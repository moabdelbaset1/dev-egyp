# 🔧 إصلاح خطأ "Unknown attribute: order_number"

## المشكلة:
```
Invalid document structure: Unknown attribute: "order_number"
```

## السبب:
الكود يحاول حفظ حقل `order_number` لكنه **غير موجود** في Appwrite Collection!

---

## ✅ الحل: إضافة الحقل في Appwrite Console

### الخطوات:

#### 1. افتح Appwrite Console
```
https://fra.cloud.appwrite.io/console/project-68dbeba80017571a1581
```

#### 2. اذهب إلى Database
```
Database > Select your database (68dbeceb003bf10d9498)
```

#### 3. اختر Orders Collection
```
Collections > orders
```

#### 4. أضف Attribute جديد
```
اضغط "Add Attribute"

Type: String
Key: order_number
Size: 255
Required: Yes (أو No حسب الحاجة)
Default: (اتركه فارغ)
Array: No
```

#### 5. احفظ التغييرات
```
اضغط "Create"
انتظر حتى يتم إنشاء الـ Attribute
```

#### 6. أعد تشغيل التطبيق
```bash
# أوقف السيرفر (Ctrl+C)
# شغله من جديد
npm run dev
```

#### 7. اختبر إنشاء Order
```
افتح صفحة Checkout
أكمل عملية الشراء
✅ يجب أن يعمل الآن!
```

---

## 🔍 الحقول المطلوبة في Orders Collection:

تأكد من وجود هذه الحقول في Appwrite:

### الحقول الأساسية:
```
✅ order_number (String, 255) - رقم الطلب
✅ order_code (String, 255) - كود الطلب
✅ customer_id (String, 255) - معرف العميل
✅ customer_name (String, 255) - اسم العميل
✅ customer_email (String, 255) - بريد العميل
✅ brand_id (String, 255) - معرف البراند
```

### حقول المبالغ:
```
✅ total_amount (Float) - المبلغ الإجمالي
✅ subtotal (Float) - المجموع الفرعي
✅ shipping_amount (Float) - تكلفة الشحن
✅ tax_amount (Float) - الضريبة
✅ discount_amount (Float) - الخصم
✅ payable_amount (Float) - المبلغ المستحق
✅ discount (Float) - الخصم
```

### حقول الحالة:
```
✅ status (String, enum) - حالة الطلب
   القيم: pending, processing, shipped, delivered, cancelled

✅ order_status (String, enum) - حالة الطلب التفصيلية
   القيم: pending, processing, confirmed, shipped, delivered, cancelled, returned

✅ payment_status (String, enum) - حالة الدفع
   القيم: paid, unpaid, pending, refunded, failed

✅ fulfillment_status (String, enum) - حالة التنفيذ
   القيم: unfulfilled, partial, fulfilled, cancelled
```

### حقول الدفع والشحن:
```
✅ payment_method (String, enum) - طريقة الدفع
   القيم: cash, credit_card, debit_card, paypal, bank_transfer, wallet

✅ shipping_address (String, 5000) - عنوان الشحن (JSON)
✅ billing_address (String, 5000) - عنوان الفواتير (JSON)
✅ items (String, 10000) - المنتجات (JSON Array)
```

### حقول إضافية:
```
✅ notes (String, 1000) - ملاحظات
✅ tracking_number (String, 255) - رقم التتبع
✅ carrier (String, 255) - شركة الشحن
```

---

## 🎯 الحل البديل: إزالة order_number من الكود

إذا لم تستطع تعديل Appwrite، يمكن إزالة `order_number` واستخدام `order_code` فقط:

### في `src/app/api/orders/route.ts`:

```typescript
const orderData = {
  // order_number: order_code,  // ❌ احذف هذا السطر
  order_code,  // ✅ استخدم order_code فقط
  customer_id: customerId || 'guest',
  // ... باقي البيانات
};
```

**لكن هذا سيسبب مشاكل في:**
- صفحات الأدمن التي تعرض `order.order_number`
- البحث عن الطلبات
- العرض في Dashboard

**لذلك الخيار الأول أفضل!** ✅

---

## 📝 ملاحظات مهمة:

### 1. الفرق بين order_number و order_code:
```typescript
order_number: "ORD-20251019-ABC123"  // للعرض والبحث
order_code: "ORD-20251019-ABC123"    // نفس القيمة (يمكن دمجهما)
```

في الكود الحالي، الاثنين لهما نفس القيمة، لذلك يمكن:
- إما إضافة `order_number` في Appwrite
- أو استخدام `order_code` فقط في كل مكان

### 2. تحديث الكود في أماكن أخرى:

إذا قررت استخدام `order_code` فقط، يجب تحديث:

```typescript
// في Admin pages:
order.order_number → order.order_code

// في API routes:
Query.search("order_number", search) → Query.search("order_code", search)
```

---

## 🧪 الاختبار:

بعد إضافة الحقل:

```bash
# 1. أعد تشغيل السيرفر
npm run dev

# 2. افتح صفحة Checkout
http://localhost:3000/checkout

# 3. أضف منتجات للسلة

# 4. أكمل عملية الشراء

# 5. يجب أن يعمل بدون أخطاء ✅
```

---

## ✅ الخلاصة:

**المشكلة:**
```
❌ حقل order_number غير موجود في Appwrite
```

**الحل المفضل:**
```
✅ أضف order_number في Appwrite Console
✅ Type: String
✅ Size: 255
✅ Required: Yes
```

**الحل البديل:**
```
⚠️ احذف order_number من الكود
⚠️ استخدم order_code فقط
⚠️ حدّث كل الملفات التي تستخدم order_number
```

**التوصية:**
```
🏆 أضف الحقل في Appwrite - أسهل وأفضل!
```
