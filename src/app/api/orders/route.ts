import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { databases, DATABASE_ID, ORDERS_COLLECTION_ID, createServerClient } from '@/lib/appwrite';
import { ID } from 'appwrite';
import { Databases } from 'node-appwrite';
import { emailService } from '../../../lib/email-service';

// GET /api/orders - Get user's orders
export const GET = withAuth(async (request: NextRequest, user) => {
  try {
    console.log('Fetching orders for user:', user.$id);

    // TODO: Implement orders database queries
    // This is a placeholder for the actual orders implementation
    const orders = [
      {
        id: 'order_1',
        userId: user.$id,
        status: 'pending',
        total: 59.98,
        items: [
          { productId: 'prod_1', name: 'Sample Product', quantity: 2, price: 29.99 }
        ],
        createdAt: new Date().toISOString(),
        shippingAddress: {
          street: '123 Main St',
          city: 'Anytown',
          state: 'CA',
          zipCode: '12345'
        }
      }
    ];

    return NextResponse.json({
      success: true,
      orders
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
});

// POST /api/orders - Create new order (supports both authenticated and guest users)
export const POST = async (request: NextRequest) => {
  try {
    console.log('📦 Received order creation request');
    const body = await request.json();
    console.log('📝 Request body:', JSON.stringify(body, null, 2));
    const { 
      customer_id,
      customerId = customer_id, // Support both naming conventions
      brand_id = '', // Brand ID from first cart item
      items, 
      shippingAddress, 
      billingAddress, 
      paymentMethod, 
      customerNote,
      shippingCost = 0,
      taxAmount = 0,
      discountAmount = 0,
      subtotal
    } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Order items are required' },
        { status: 400 }
      );
    }

    if (!shippingAddress) {
      return NextResponse.json(
        { error: 'Shipping address is required' },
        { status: 400 }
      );
    }

    if (!billingAddress) {
      return NextResponse.json(
        { error: 'Billing address is required' },
        { status: 400 }
      );
    }

    console.log('📍 Creating order for customer:', customerId);
    console.log('🏷️ Brand ID:', brand_id || '(none)');

    // Calculate totals
    const calculatedSubtotal = subtotal || items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalAmount = calculatedSubtotal + shippingCost + taxAmount - discountAmount;
    
    // Map payment method to Appwrite schema enum values
    const paymentMethodMap: Record<string, string> = {
      'cash_on_delivery': 'cash',
      'credit_card': 'credit_card',
      'debit_card': 'debit_card',
      'paypal': 'paypal',
      'bank_transfer': 'bank_transfer',
      'wallet': 'wallet',
      'cash': 'cash'
    };
    const mappedPaymentMethod = paymentMethodMap[paymentMethod] || 'cash';

    // Generate order code (unique identifier for customer to track order)
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    const order_code = `ORD-${year}${month}${day}-${random}`;

    // Prepare order data matching the ACTUAL Appwrite orders collection schema
    // Based on schema check: only these fields exist
    const orderData = {
      // Required fields
      brand_id: brand_id || 'default',
      order_code,
      order_status: 'pending',
      payable_amount: totalAmount,
      payment_status: 'unpaid',
      total_amount: totalAmount,
      
      // Optional fields
      customer_id: customerId || 'guest',
      discount: discountAmount,
      payment_method: mappedPaymentMethod,
      
      // Note: The following fields from original code don't exist in Appwrite:
      // - items (need to store in separate collection or add to schema)
      // - shipping_address, billing_address (need to add to schema)
      // - subtotal, shipping_amount, tax_amount (need to add to schema)
      // - status, fulfillment_status (don't exist)
      // - notes, tracking_number, carrier (don't exist)
    };

    // Create order in Appwrite database
    const serverClient = createServerClient();
    const serverDatabases = new Databases(serverClient);
    
    const order = await serverDatabases.createDocument(
      DATABASE_ID,
      ORDERS_COLLECTION_ID,
      ID.unique(),
      orderData
    );

    console.log('Order created successfully:', order.$id);

    // Send order confirmation email
    try {
      // For guest users, we need customer email from the request
      // For authenticated users, we would fetch it from the user data
      const customerEmail = customerId && customerId !== 'guest'
        ? 'customer@example.com' // In real implementation, fetch from user data
        : 'guest@example.com'; // In real implementation, get from request or form data

      const customerName = shippingAddress.fullName || 'Valued Customer';

      // Prepare items for email (since items not stored in order document)
      const emailItems = items.map(item => ({
        name: item.name || item.productName || '',
        quantity: item.quantity,
        price: item.price,
        total: item.price * item.quantity
      }));

      await emailService.sendOrderConfirmation({
        orderNumber: order_code,
        customerName,
        customerEmail,
        items: emailItems,
        subtotal: calculatedSubtotal,
        shipping: shippingCost,
        tax: taxAmount,
        total: totalAmount,
        shippingAddress,
        estimatedDelivery: '3-5 business days'
      });

      console.log('Order confirmation email sent successfully');
    } catch (emailError) {
      console.error('Failed to send order confirmation email:', emailError);
      // Don't fail the order if email fails
    }

    return NextResponse.json({
      success: true,
      order: {
        id: order.$id,
        order_code: order.order_code,
        total: order.total,
        order_status: order.order_status,
        ...order
      },
      message: 'Order created successfully'
    });
  } catch (error) {
    console.error('❌ Error creating order:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      error
    });
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to create order',
        details: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
};
