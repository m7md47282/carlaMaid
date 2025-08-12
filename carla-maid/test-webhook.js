#!/usr/bin/env node

/**
 * SkipCash Webhook Testing Utility
 * 
 * This script helps test your webhook endpoint by simulating
 * webhook calls from SkipCash with proper signature verification.
 * 
 * Usage:
 * node test-webhook.js [webhookUrl] [webhookKey]
 * 
 * Example:
 * node test-webhook.js http://localhost:4000/api/skipcash/webhook YOUR_WEBHOOK_KEY
 */

const crypto = require('crypto');
const axios = require('axios');

// Default configuration
const DEFAULT_WEBHOOK_URL = 'http://localhost:4000/api/skipcash/webhook';
const DEFAULT_WEBHOOK_KEY = 'YOUR_SANDBOX_WEBHOOK_KEY';

// Test webhook payloads for different scenarios
const TEST_PAYLOADS = {
  // Successful payment
  success: {
    PaymentId: 'test-payment-success-123',
    Amount: '150.00',
    StatusId: 2, // Paid
    TransactionId: 'CARLA_1234567890_ABC123',
    Custom1: 'Cleaning service - 2 cleaners, 3 hours',
    Custom2: null,
    Custom3: null,
    Custom4: null,
    Custom5: null,
    Custom6: null,
    Custom7: null,
    Custom8: null,
    Custom9: null,
    Custom10: null,
    VisaId: '07082024100903646560',
    TokenId: 'NA',
    CardType: 'Debit Card',
    CardNumber: null,
    RecurringSubscriptionId: '00000000-0000-0000-0000-000000000000'
  },
  
  // Failed payment
  failed: {
    PaymentId: 'test-payment-failed-456',
    Amount: '200.00',
    StatusId: 4, // Failed
    TransactionId: 'CARLA_1234567890_DEF456',
    Custom1: 'Cleaning service - 3 cleaners, 4 hours',
    Custom2: null,
    Custom3: null,
    Custom4: null,
    Custom5: null,
    Custom6: null,
    Custom7: null,
    Custom8: null,
    Custom9: null,
    Custom10: null,
    VisaId: '07082024100903646561',
    TokenId: 'NA',
    CardType: 'Debit Card',
    CardNumber: null,
    RecurringSubscriptionId: '00000000-0000-0000-0000-000000000000'
  },
  
  // Cancelled payment
  cancelled: {
    PaymentId: 'test-payment-cancelled-789',
    Amount: '100.00',
    StatusId: 3, // Canceled
    TransactionId: 'CARLA_1234567890_GHI789',
    Custom1: 'Cleaning service - 1 cleaner, 2 hours',
    Custom2: null,
    Custom3: null,
    Custom4: null,
    Custom5: null,
    Custom6: null,
    Custom7: null,
    Custom8: null,
    Custom9: null,
    Custom10: null,
    VisaId: '07082024100903646562',
    TokenId: 'NA',
    CardType: 'Debit Card',
    CardNumber: null,
    RecurringSubscriptionId: '00000000-0000-0000-0000-000000000000'
  }
};

/**
 * Generate HMAC-SHA256 signature for webhook payload
 */
function generateSignature(payload, webhookKey) {
  // Build signature data according to SkipCash documentation
  // Required fields: PaymentId, Amount, StatusId, TransactionId, Custom1, VisaId
  const signatureFields = [
    'PaymentId', 'Amount', 'StatusId', 'TransactionId', 'Custom1', 'VisaId'
  ];
  
  const signatureData = signatureFields
    .map(field => {
      const value = payload[field];
      return value !== null && value !== undefined ? `${field}=${value}` : null;
    })
    .filter(Boolean)
    .join(',');
  
  console.log('Signature data:', signatureData);
  
  // Generate signature using HMAC-SHA256
  const hmac = crypto.createHmac('sha256', webhookKey);
  hmac.update(signatureData);
  return hmac.digest('base64');
}

/**
 * Test webhook endpoint with a specific payload
 */
async function testWebhook(webhookUrl, webhookKey, payload, scenario) {
  try {
    console.log(`\n🧪 Testing ${scenario} scenario...`);
    console.log('Payload:', JSON.stringify(payload, null, 2));
    
    // Generate signature
    const signature = generateSignature(payload, webhookKey);
    console.log('Generated signature:', signature);
    
    // Make webhook request
    const response = await axios.post(webhookUrl, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': signature
      },
      timeout: 10000
    });
    
    console.log(`✅ ${scenario} webhook successful!`);
    console.log('Response status:', response.status);
    console.log('Response data:', response.data);
    
    return { success: true, response: response.data };
    
  } catch (error) {
    console.error(`❌ ${scenario} webhook failed!`);
    
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    } else {
      console.error('Error:', error.message);
    }
    
    return { success: false, error: error.message };
  }
}

/**
 * Test webhook with invalid signature
 */
async function testInvalidSignature(webhookUrl, payload) {
  try {
    console.log('\n🧪 Testing invalid signature scenario...');
    
    // Use invalid signature
    const invalidSignature = 'invalid_signature_123';
    
    const response = await axios.post(webhookUrl, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': invalidSignature
      },
      timeout: 10000
    });
    
    console.log('❌ Webhook should have failed with invalid signature!');
    console.log('Response status:', response.status);
    console.log('Response data:', response.data);
    
    return { success: false, error: 'Webhook accepted invalid signature' };
    
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.log('✅ Webhook correctly rejected invalid signature');
      return { success: true, message: 'Invalid signature correctly rejected' };
    } else {
      console.error('❌ Unexpected error with invalid signature:', error.message);
      return { success: false, error: error.message };
    }
  }
}

/**
 * Main test function
 */
async function runTests() {
  // Get command line arguments
  const webhookUrl = process.argv[2] || DEFAULT_WEBHOOK_URL;
  const webhookKey = process.argv[3] || DEFAULT_WEBHOOK_KEY;
  
  console.log('🚀 SkipCash Webhook Testing Utility');
  console.log('=====================================');
  console.log('Webhook URL:', webhookUrl);
  console.log('Webhook Key:', webhookKey === DEFAULT_WEBHOOK_KEY ? 'DEFAULT (update this)' : 'SET');
  console.log('');
  
  // Check if webhook key is still default
  if (webhookKey === DEFAULT_WEBHOOK_KEY) {
    console.log('⚠️  Warning: Using default webhook key. Please provide your actual webhook key.');
    console.log('   Usage: node test-webhook.js [webhookUrl] [webhookKey]');
    console.log('');
  }
  
  const results = [];
  
  // Test successful payment
  results.push(await testWebhook(webhookUrl, webhookKey, TEST_PAYLOADS.success, 'Successful Payment'));
  
  // Test failed payment
  results.push(await testWebhook(webhookUrl, webhookKey, TEST_PAYLOADS.failed, 'Failed Payment'));
  
  // Test cancelled payment
  results.push(await testWebhook(webhookUrl, webhookKey, TEST_PAYLOADS.cancelled, 'Cancelled Payment'));
  
  // Test invalid signature
  results.push(await testInvalidSignature(webhookUrl, TEST_PAYLOADS.success));
  
  // Summary
  console.log('\n📊 Test Results Summary');
  console.log('========================');
  
  const successfulTests = results.filter(r => r.success).length;
  const totalTests = results.length;
  
  console.log(`Total tests: ${totalTests}`);
  console.log(`Successful: ${successfulTests}`);
  console.log(`Failed: ${totalTests - successfulTests}`);
  
  if (successfulTests === totalTests) {
    console.log('\n🎉 All tests passed! Your webhook integration is working correctly.');
  } else {
    console.log('\n⚠️  Some tests failed. Please check the errors above and fix any issues.');
  }
  
  console.log('\n💡 Next steps:');
  console.log('1. Configure your webhook URL in SkipCash Sandbox → Credentials');
  console.log('2. Test with real payment scenarios');
  console.log('3. Monitor webhook events in SkipCash dashboard');
  console.log('4. Implement database updates for production use');
}

// Run tests if this file is executed directly
if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = {
  generateSignature,
  testWebhook,
  testInvalidSignature,
  TEST_PAYLOADS
};
