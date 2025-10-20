/**
 * Script to check Appwrite Orders Collection Schema
 * Run with: node check-orders-schema.js
 */

const sdk = require('node-appwrite');

const endpoint = 'https://fra.cloud.appwrite.io/v1';
const projectId = '68dbeba80017571a1581';
const apiKey = 'standard_aade8f8400fd56135556d70affe7a023bd6e0f70707dc5fcfef03d3d33b3a9b05ccaa5083f6256ba8c5698e89e5f6c375dfc27b605c2d7314b33968fd1574ac7ff99a6cfdc7d743cdf6c9050de580769f419e8a7596d44a8338342d0aff9b7edc7adcb86b23f998cc1cc18d876a5f099b8e7cb210846b67418a4a94719d43dfa';
const databaseId = '68dbeceb003bf10d9498';
const collectionId = 'orders';

async function checkSchema() {
  const client = new sdk.Client();
  
  client
    .setEndpoint(endpoint)
    .setProject(projectId)
    .setKey(apiKey);

  const databases = new sdk.Databases(client);

  console.log('═══════════════════════════════════════════════════');
  console.log('   Checking Orders Collection Schema');
  console.log('═══════════════════════════════════════════════════\n');
  
  try {
    // Get collection details
    const collection = await databases.getCollection(databaseId, collectionId);
    
    console.log('Collection Name:', collection.name);
    console.log('Collection ID:', collection.$id);
    console.log('Total Attributes:', collection.attributes.length);
    console.log('\n📋 Attributes:\n');
    
    // Sort attributes by name for easier reading
    const sortedAttributes = collection.attributes.sort((a, b) => a.key.localeCompare(b.key));
    
    sortedAttributes.forEach((attr, index) => {
      console.log(`${index + 1}. ${attr.key}`);
      console.log(`   Type: ${attr.type}`);
      console.log(`   Required: ${attr.required ? 'Yes' : 'No'}`);
      console.log(`   Array: ${attr.array ? 'Yes' : 'No'}`);
      
      if (attr.type === 'string') {
        console.log(`   Size: ${attr.size}`);
        if (attr.format) {
          console.log(`   Format: ${attr.format}`);
        }
        if (attr.default !== undefined && attr.default !== null) {
          console.log(`   Default: "${attr.default}"`);
        }
      } else if (attr.type === 'integer' || attr.type === 'double') {
        if (attr.min !== undefined) console.log(`   Min: ${attr.min}`);
        if (attr.max !== undefined) console.log(`   Max: ${attr.max}`);
        if (attr.default !== undefined && attr.default !== null) {
          console.log(`   Default: ${attr.default}`);
        }
      } else if (attr.type === 'boolean') {
        if (attr.default !== undefined && attr.default !== null) {
          console.log(`   Default: ${attr.default}`);
        }
      }
      
      console.log('');
    });
    
    console.log('═══════════════════════════════════════════════════');
    console.log('Required Attributes:');
    console.log('═══════════════════════════════════════════════════\n');
    
    const requiredAttrs = sortedAttributes.filter(attr => attr.required);
    requiredAttrs.forEach(attr => {
      console.log(`✅ ${attr.key} (${attr.type})`);
    });
    
    console.log('\n═══════════════════════════════════════════════════');
    console.log('Optional Attributes:');
    console.log('═══════════════════════════════════════════════════\n');
    
    const optionalAttrs = sortedAttributes.filter(attr => !attr.required);
    optionalAttrs.forEach(attr => {
      console.log(`⚪ ${attr.key} (${attr.type})`);
    });
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('\nFull error:', error);
  }
}

checkSchema()
  .then(() => {
    console.log('\n═══════════════════════════════════════════════════');
    console.log('Schema check completed!');
    console.log('═══════════════════════════════════════════════════');
  })
  .catch(error => {
    console.error('Unhandled error:', error);
    process.exit(1);
  });
