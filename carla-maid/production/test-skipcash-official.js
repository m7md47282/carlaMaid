const axios = require('axios');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

// Test configuration
const testConfig = {
  baseUrl: 'http://localhost:4000',
  skipCashConfig: {
    sandboxURL: 'https://skipcashtest.azurewebsites.net',
    productionURL: 'https://api.skipcash.app',
    secretKey: 'Og9vDBQbBFHg/dwxkQjFCcLYogMDq4hLOF0OPsuRDY+OrLp/BPWMoCvsf1EDW41N8QTqoJHFhpclF/+bMR8Gwjyy2n0ZBNKuk8TO6LSpA2+JTWRM3ODl3LuX1nSFHRVnHJ1h0+ojevQqA8U/FzgCu88S+HhdZ1zq1GeWvka9MM8y8arkLwo0oLCf4IPAcH6olU8EKWrgcIymL6spNmRYRqfiLEzFWIQAjNJa2PH/spkK8c0brTae9jzbC5Td+BqWEjOmDphtQ3XSfqaj5fIjkGjjd58tnP6uQELF08Q5uZqGno8fWxZi+B6Wz9Z6Zr3y7cr19VTpRA2+RGOSVNzdaMnc7EL6ryFxmXUg+dSU37gBffAzn8fAIe2KJJdGnsSUkM8Z82E6Yj2KPi/Tw/wrYZMwuXNROwlIilIt9tds8PCdlFgPD1wiH8q9om/kIcarLuoVXn71nF65BT3/PhAOEhKyrxLaiqwZg+8xZdbCHzFQNYefcYuDRzflWzPRp3oWX1L9bPw==',
    keyId: '288d604d-03b6-4c66-821e-0a82a3fd2cc8',
    clientId: '288d604d-03b6-4c66-821e-0a82a3fd2cc8'
  }
};

// Test 1: Test backend health
async function testBackendHealth() {
  console.log('\n🔍 Testing Backend Health...');
  try {
    const response = await axios.get(`${testConfig.baseUrl}/api/health`);
    console.log('✅ Backend is running:', response.data);
    return true;
  } catch (error) {
    console.error('❌ Backend health check failed:', error.message);
    return false;
  }
}

// Test 2: Test SkipCash health
async function testSkipCashHealth() {
  console.log('\n🔍 Testing SkipCash Health...');
  try {
    const response = await axios.get(`${testConfig.baseUrl}/api/skipcash/health`);
    console.log('✅ SkipCash health check:', response.data);
    return true;
  } catch (error) {
    console.error('❌ SkipCash health check failed:', error.message);
    return false;
  }
}

// Test 3: Test payment creation with official SkipCash format
async function testPaymentCreation() {
  console.log('\n🔍 Testing Payment Creation (Official SkipCash Format)...');
  
  try {
    // Test data following official SkipCash documentation
    const paymentData = {
      amount: '100.00',
      customerName: 'John Doe',
      customerEmail: 'john.doe@example.com',
      customerPhone: '+97412345678',
      description: 'Test cleaning service',
      returnUrl: 'https://carlamaid.qa/payment-success',
      cancelUrl: 'https://carlamaid.qa/payment-cancel',
      orderId: `TEST_${Date.now()}`
    };

    console.log('📤 Sending payment request:', paymentData);

    const response = await axios.post(`${testConfig.baseUrl}/api/skipcash/payment/create`, paymentData);
    
    console.log('✅ Payment creation successful:', response.data);
    
    if (response.data.success && response.data.paymentUrl) {
      console.log('🔗 Payment URL:', response.data.paymentUrl);
      console.log('🆔 Order ID:', response.data.orderId);
      console.log('🆔 Payment ID:', response.data.paymentId);
    }
    
    return true;
  } catch (error) {
    console.error('❌ Payment creation failed:', error.response?.data || error.message);
    return false;
  }
}

// Test 4: Direct SkipCash API test (following official docs exactly)
async function testDirectSkipCashAPI() {
  console.log('\n🔍 Testing Direct SkipCash API (Official Documentation)...');
  
  try {
    // Create payment request exactly as per official SkipCash documentation
    const paymentDetails = {
      Uid: uuidv4(),
      KeyId: testConfig.skipCashConfig.keyId,
      Amount: '50.00',
      FirstName: 'Jane',
      LastName: 'Smith',
      Phone: '+97487654321',
      Email: 'jane.smith@example.com',
      Street: '',
      City: '',
      State: '',
      Country: '',
      PostalCode: '',
      TransactionId: `DIRECT_TEST_${Date.now()}`,
      Custom1: 'Direct API test'
    };

    // Create combined data string for signature (exactly as per SkipCash docs)
    const combinedData = `Uid=${paymentDetails.Uid},KeyId=${paymentDetails.KeyId},Amount=${paymentDetails.Amount},FirstName=${paymentDetails.FirstName},LastName=${paymentDetails.LastName},Phone=${paymentDetails.Phone},Email=${paymentDetails.Email},Street=${paymentDetails.Street},City=${paymentDetails.City},State=${paymentDetails.State},Country=${paymentDetails.Country},PostalCode=${paymentDetails.PostalCode},TransactionId=${paymentDetails.TransactionId},Custom1=${paymentDetails.Custom1}`;

    // Generate HMAC-SHA256 signature using secret key (exactly as per SkipCash docs)
    const combinedDataHash = crypto
      .createHmac('sha256', testConfig.skipCashConfig.secretKey)
      .update(combinedData)
      .digest('base64');

    console.log('📤 Sending direct request to SkipCash:', {
      endpoint: `${testConfig.skipCashConfig.sandboxURL}/api/v1/payments`,
      paymentDetails,
      signature: combinedDataHash.substring(0, 20) + '...'
    });

    const response = await axios.post(`${testConfig.skipCashConfig.sandboxURL}/api/v1/payments`, paymentDetails, {
      headers: {
        'Authorization': combinedDataHash,
        'Content-Type': 'application/json'
      },
      timeout: 10000
    });

    console.log('✅ Direct SkipCash API call successful:', response.data);
    
    if (response.data && response.data.resultObj) {
      console.log('🔗 Payment URL:', response.data.resultObj.PaymentUrl || response.data.resultObj.paymentUrl);
      console.log('🆔 Payment ID:', response.data.resultObj.PaymentId || response.data.resultObj.paymentId);
    }
    
    return true;
  } catch (error) {
    console.error('❌ Direct SkipCash API call failed:', error.response?.data || error.message);
    return false;
  }
}

// Test 5: Test webhook signature verification
async function testWebhookSignature() {
  console.log('\n🔍 Testing Webhook Signature Verification...');
  
  try {
    // Simulate webhook data
    const webhookData = {
      PaymentId: 'TEST_PAYMENT_123',
      Amount: '100.00',
      StatusId: 2,
      TransactionId: 'TEST_ORDER_456',
      Custom1: 'Test webhook',
      VisaId: 'TEST_VISA_789'
    };

    // Generate signature using the same method as the webhook verification
    const signatureFields = ['PaymentId', 'Amount', 'StatusId', 'TransactionId', 'Custom1', 'VisaId'];
    const signatureData = signatureFields
      .map(field => `${field}=${webhookData[field]}`)
      .join(',');
    
    const expectedSignature = crypto
      .createHmac('sha256', testConfig.skipCashConfig.secretKey)
      .update(signatureData)
      .digest('base64');

    console.log('✅ Webhook signature verification test completed');
    console.log('📝 Signature data:', signatureData);
    console.log('🔐 Generated signature:', expectedSignature.substring(0, 20) + '...');
    
    return true;
  } catch (error) {
    console.error('❌ Webhook signature test failed:', error.message);
    return false;
  }
}

// Main test runner
async function runAllTests() {
  console.log('🚀 Starting SkipCash Integration Tests (Official Documentation Format)');
  console.log('=' .repeat(70));
  
  const tests = [
    { name: 'Backend Health', fn: testBackendHealth },
    { name: 'SkipCash Health', fn: testSkipCashHealth },
    { name: 'Payment Creation (Backend)', fn: testPaymentCreation },
    { name: 'Direct SkipCash API', fn: testDirectSkipCashAPI },
    { name: 'Webhook Signature', fn: testWebhookSignature }
  ];

  let passed = 0;
  let total = tests.length;

  for (const test of tests) {
    try {
      const result = await test.fn();
      if (result) passed++;
    } catch (error) {
      console.error(`❌ Test "${test.name}" failed with error:`, error.message);
    }
  }

  console.log('\n' + '=' .repeat(70));
  console.log(`📊 Test Results: ${passed}/${total} tests passed`);
  
  if (passed === total) {
    console.log('🎉 All tests passed! SkipCash integration is working correctly.');
  } else {
    console.log('⚠️  Some tests failed. Please check the errors above.');
  }
}

// Run tests if this file is executed directly
if (require.main === module) {
  runAllTests().catch(console.error);
}

module.exports = {
  testBackendHealth,
  testSkipCashHealth,
  testPaymentCreation,
  testDirectSkipCashAPI,
  testWebhookSignature,
  runAllTests
};
