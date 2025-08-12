const axios = require('axios');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

console.log('🚀 Testing SkipCash with Exact Documentation Example');
console.log('=' .repeat(70));

// Your SkipCash configuration
const skipCashConfig = {
  sandboxURL: 'https://skipcashtest.azurewebsites.net',
  productionURL: 'https://api.skipcash.app',
  secretKey: 'Og9vDBQbBFHg/dwxkQjFCcLYogMDq4hLOF0OPsuRDY+OrLp/BPWMoCvsf1EDW41N8QTqoJHFhpclF/+bMR8Gwjyy2n0ZBNKuk8TO6LSpA2+JTWRM3ODl3LuX1nSFHRVnHJ1h0+ojevQqA8U/FzgCu88S+HhdZ1zq1GeWvka9MM8y8arkLwo0oLCf4IPAcH6olU8EKWrgcIymL6spNmRYRqfiLEzFWIQAjNJa2PH/spkK8c0brTae9jzbC5Td+BqWEjOmDphtQ3XSfqaj5fIjkGjjd58tnP6uQELF08Q5uZqGno8fWxZi+B6Wz9Z6Zr3y7cr19VTpRA2+RGOSVNzdaMnc7EL6ryFxmXUg+dSU37gBffAzn8fAIe2KJJdGnsSUkM8Z82E6Yj2KPi/Tw/wrYZMwuXNROwlIilIt9tds8PCdlFgPD1wiH8q9om/kIcarLuoVXn71nF65BT3/PhAOEhKyrxLaiqwZg+8xZdbCHzFQNYefcYuDRzflWzPRp3oWX1L9bPw==',
  keyId: '288d604d-03b6-4c66-821e-0a82a3fd2cc8',
  clientId: '288d604d-03b6-4c66-821e-0a82a3fd2cc8'
};

// Test 1: Test with empty values (as shown in official docs)
async function testEmptyValues() {
  console.log('\n🔍 Test 1: Empty Values (Official Documentation Example)');
  
  try {
    // Create payment request exactly as per official SkipCash documentation
    const paymentDetails = {
      Uid: uuidv4(),
      KeyId: skipCashConfig.keyId,
      Amount: '1.00', // Very small amount
      FirstName: 'Test',
      LastName: 'User',
      Phone: '12345678',
      Email: 'test@example.com',
      Street: '', // Empty as per docs
      City: '', // Empty as per docs
      State: '', // Empty as per docs
      Country: '', // Empty as per docs
      PostalCode: '', // Empty as per docs
      TransactionId: `EMPTY_TEST_${Date.now()}`,
      Custom1: '' // Empty as per docs
    };

    // Create combined data string for signature (exactly as per SkipCash docs)
    const combinedData = `Uid=${paymentDetails.Uid},KeyId=${paymentDetails.KeyId},Amount=${paymentDetails.Amount},FirstName=${paymentDetails.FirstName},LastName=${paymentDetails.LastName},Phone=${paymentDetails.Phone},Email=${paymentDetails.Email},Street=${paymentDetails.Street},City=${paymentDetails.City},State=${paymentDetails.State},Country=${paymentDetails.Country},PostalCode=${paymentDetails.PostalCode},TransactionId=${paymentDetails.TransactionId},Custom1=${paymentDetails.Custom1}`;

    // Generate HMAC-SHA256 signature using secret key (exactly as per SkipCash docs)
    const combinedDataHash = crypto
      .createHmac('sha256', skipCashConfig.secretKey)
      .update(combinedData)
      .digest('base64');

    console.log('📤 Payment Details:', paymentDetails);
    console.log('🔗 Combined Data:', combinedData);
    console.log('🔐 Generated Signature:', combinedDataHash.substring(0, 20) + '...');

    // Make request to SkipCash using official endpoint and format
    const response = await axios.post(`${skipCashConfig.sandboxURL}/api/v1/payments`, paymentDetails, {
      headers: {
        'Authorization': combinedDataHash,
        'Content-Type': 'application/json'
      },
      timeout: 10000
    });

    console.log('✅ Payment creation successful:', response.data);
    return true;
    
  } catch (error) {
    console.error('❌ Payment creation failed:', error.response?.data || error.message);
    return false;
  }
}

// Test 2: Test with different API endpoints
async function testDifferentEndpoints() {
  console.log('\n🔍 Test 2: Different API Endpoints');
  
  const paymentDetails = {
    Uid: uuidv4(),
    KeyId: skipCashConfig.keyId,
    Amount: '1.00',
    FirstName: 'Endpoint',
    LastName: 'Test',
    Phone: '12345678',
    Email: 'endpoint@test.com',
    Street: '',
    City: '',
    State: '',
    Country: '',
    PostalCode: '',
    TransactionId: `ENDPOINT_TEST_${Date.now()}`,
    Custom1: ''
  };

  const combinedData = `Uid=${paymentDetails.Uid},KeyId=${paymentDetails.KeyId},Amount=${paymentDetails.Amount},FirstName=${paymentDetails.FirstName},LastName=${paymentDetails.LastName},Phone=${paymentDetails.Phone},Email=${paymentDetails.Email},Street=${paymentDetails.Street},City=${paymentDetails.City},State=${paymentDetails.State},Country=${paymentDetails.Country},PostalCode=${paymentDetails.PostalCode},TransactionId=${paymentDetails.TransactionId},Custom1=${paymentDetails.Custom1}`;

  const combinedDataHash = crypto
    .createHmac('sha256', skipCashConfig.secretKey)
    .update(combinedData)
    .digest('base64');

  const endpoints = [
    '/api/v1/payments',
    '/api/payments',
    '/payments',
    '/payment/create'
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`\n🔗 Testing endpoint: ${endpoint}`);
      
      const response = await axios.post(`${skipCashConfig.sandboxURL}${endpoint}`, paymentDetails, {
        headers: {
          'Authorization': combinedDataHash,
          'Content-Type': 'application/json'
        },
        timeout: 10000
      });

      console.log(`✅ Success with endpoint ${endpoint}:`, response.data);
      return true;
      
    } catch (error) {
      console.log(`❌ Failed with endpoint ${endpoint}:`, error.response?.data?.errorMessage || error.message);
    }
  }
  
  return false;
}

// Test 3: Test with different authentication methods
async function testDifferentAuthMethods() {
  console.log('\n🔍 Test 3: Different Authentication Methods');
  
  const paymentDetails = {
    Uid: uuidv4(),
    KeyId: skipCashConfig.keyId,
    Amount: '1.00',
    FirstName: 'Auth',
    LastName: 'Test',
    Phone: '12345678',
    Email: 'auth@test.com',
    Street: '',
    City: '',
    State: '',
    Country: '',
    PostalCode: '',
    TransactionId: `AUTH_TEST_${Date.now()}`,
    Custom1: ''
  };

  const combinedData = `Uid=${paymentDetails.Uid},KeyId=${paymentDetails.KeyId},Amount=${paymentDetails.Amount},FirstName=${paymentDetails.FirstName},LastName=${paymentDetails.LastName},Phone=${paymentDetails.Phone},Email=${paymentDetails.Email},Street=${paymentDetails.Street},City=${paymentDetails.City},State=${paymentDetails.State},Country=${paymentDetails.Country},PostalCode=${paymentDetails.PostalCode},TransactionId=${paymentDetails.TransactionId},Custom1=${paymentDetails.Custom1}`;

  const combinedDataHash = crypto
    .createHmac('sha256', skipCashConfig.secretKey)
    .update(combinedData)
    .digest('base64');

  const authMethods = [
    { header: 'Authorization', value: combinedDataHash },
    { header: 'Authorization', value: `Bearer ${combinedDataHash}` },
    { header: 'X-SkipCash-Signature', value: combinedDataHash },
    { header: 'X-Signature', value: combinedDataHash }
  ];

  for (const auth of authMethods) {
    try {
      console.log(`\n🔐 Testing auth method: ${auth.header}: ${auth.value.substring(0, 20)}...`);
      
      const headers = {
        'Content-Type': 'application/json'
      };
      headers[auth.header] = auth.value;

      const response = await axios.post(`${skipCashConfig.sandboxURL}/api/v1/payments`, paymentDetails, {
        headers,
        timeout: 10000
      });

      console.log(`✅ Success with auth method ${auth.header}:`, response.data);
      return true;
      
    } catch (error) {
      console.log(`❌ Failed with auth method ${auth.header}:`, error.response?.data?.errorMessage || error.message);
    }
  }
  
  return false;
}

// Test 4: Test if the API is accessible at all
async function testAPIAccessibility() {
  console.log('\n🔍 Test 4: API Accessibility Test');
  
  try {
    // Try to access the base URL
    console.log('🔗 Testing base URL accessibility...');
    const baseResponse = await axios.get(skipCashConfig.sandboxURL, { timeout: 5000 });
    console.log('✅ Base URL accessible:', baseResponse.status);
    
    // Try to access the API endpoint without authentication
    console.log('🔗 Testing API endpoint accessibility...');
    try {
      const apiResponse = await axios.get(`${skipCashConfig.sandboxURL}/api/v1/payments`, { timeout: 5000 });
      console.log('✅ API endpoint accessible:', apiResponse.status);
    } catch (error) {
      if (error.response?.status === 401) {
        console.log('✅ API endpoint accessible (requires auth):', error.response.status);
      } else {
        console.log('❌ API endpoint not accessible:', error.message);
      }
    }
    
    return true;
  } catch (error) {
    console.error('❌ Base URL not accessible:', error.message);
    return false;
  }
}

// Run all tests
async function runAllTests() {
  const tests = [
    { name: 'Empty Values Test', fn: testEmptyValues },
    { name: 'Different Endpoints', fn: testDifferentEndpoints },
    { name: 'Different Auth Methods', fn: testDifferentAuthMethods },
    { name: 'API Accessibility', fn: testAPIAccessibility }
  ];

  let passed = 0;
  let total = tests.length;

  for (const test of tests) {
    try {
      console.log(`\n${'='.repeat(50)}`);
      const result = await test.fn();
      if (result) passed++;
    } catch (error) {
      console.error(`❌ Test "${test.name}" failed with error:`, error.message);
    }
  }

  console.log('\n' + '='.repeat(70));
  console.log(`📊 Test Results: ${passed}/${total} tests passed`);
  
  if (passed === total) {
    console.log('🎉 All tests passed! SkipCash integration is working correctly.');
  } else {
    console.log('⚠️  Some tests failed. This will help identify the issue.');
  }
}

// Run tests
runAllTests().catch(console.error);
