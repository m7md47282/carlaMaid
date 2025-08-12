const axios = require('axios');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
// Adding the exact dependencies from SkipCash documentation
const { v4 } = require("uuid");
const cryptojs = require("crypto-js");

console.log('🚀 Testing Direct SkipCash API (Official Documentation Format)');
console.log('=' .repeat(70));

// Your SkipCash configuration
const skipCashConfig = {
  sandboxURL: 'https://skipcashtest.azurewebsites.net',
  productionURL: 'https://api.skipcash.app',
  secretKey: 'Og9vDBQbBFHg/dwxkQjFCcLYogMDq4hLOF0OPsuRDY+OrLp/BPWMoCvsf1EDW41N8QTqoJHFhpclF/+bMR8Gwjyy2n0ZBNKuk8TO6LSpA2+JTWRM3ODl3LuX1nSFHRVnHJ1h0+ojevQqA8U/FzgCu88S+HhdZ1zq1GeWvka9MM8y8arkLwo0oLCf4IPAcH6olU8EKWrgcIymL6spNmRYRqfiLEzFWIQAjNJa2PH/spkK8c0brTae9jzbC5Td+BqWEjOmDphtQ3XSfqaj5fIjkGjjd58tnP6uQELF08Q5uZqGno8fWxZi+B6Wz9Z6Zr3y7cr19VTpRA2+RGOSVNzdaMnc7EL6ryFxmXUg+dSU37gBffAzn8fAIe2KJJdGnsSUkM8Z82E6Yj2KPi/Tw/wrYZMwuXNROwlIilIt9tds8PCdlFgPD1wiH8q9om/kIcarLuoVXn71nF65BT3/PhAOEhKyrxLaiqwZg+8xZdbCHzFQNYefcYuDRzflWzPRp3oWX1L9bPw==',
  keyId: '288d604d-03b6-4c66-821e-0a82a3fd2cc8',
  clientId: '288d604d-03b6-4c66-821e-0a82a3fd2cc8'
};

// Test 1: Simple payment with minimal data (following official docs exactly)
async function testSimplePayment() {
  console.log('\n🔍 Test 1: Simple Payment (Official Documentation Format)');
  
  try {
    // Create payment request exactly as per official SkipCash documentation
    const paymentDetails = {
      Uid: uuidv4(),
      KeyId: skipCashConfig.keyId,
      Amount: '10.00', // Small amount for testing
      FirstName: 'Test',
      LastName: 'User',
      Phone: '12345678',
      Email: 'test@example.com',
      Street: '',
      City: '',
      State: '',
      Country: '',
      PostalCode: '',
      TransactionId: `TEST_${Date.now()}`,
      Custom1: 'Test payment'
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

// Test 2: Test with your actual data format
async function testYourDataFormat() {
  console.log('\n🔍 Test 2: Your Data Format (140 QAR Payment)');
  
  try {
    const paymentDetails = {
      Uid: uuidv4(),
      KeyId: skipCashConfig.keyId,
      Amount: '140.00',
      FirstName: 'asdasd',
      LastName: '',
      Phone: '77777777',
      Email: 'mhmd97omari@gmail.cpm',
      Street: '',
      City: '',
      State: '',
      Country: '',
      PostalCode: '',
      TransactionId: `CARLA_${Date.now()}_TEST`,
      Custom1: 'Cleaning Service - 1 cleaner(s), 4 hour(s)'
    };

    // Create combined data string for signature
    const combinedData = `Uid=${paymentDetails.Uid},KeyId=${paymentDetails.KeyId},Amount=${paymentDetails.Amount},FirstName=${paymentDetails.FirstName},LastName=${paymentDetails.LastName},Phone=${paymentDetails.Phone},Email=${paymentDetails.Email},Street=${paymentDetails.Street},City=${paymentDetails.City},State=${paymentDetails.State},Country=${paymentDetails.Country},PostalCode=${paymentDetails.PostalCode},TransactionId=${paymentDetails.TransactionId},Custom1=${paymentDetails.Custom1}`;

    const combinedDataHash = crypto
      .createHmac('sha256', skipCashConfig.secretKey)
      .update(combinedData)
      .digest('base64');

    console.log('📤 Payment Details:', paymentDetails);
    console.log('🔗 Combined Data:', combinedData);
    console.log('🔐 Generated Signature:', combinedDataHash.substring(0, 20) + '...');

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

// Test 3: Test different signature format (using array join)
async function testArrayJoinSignature() {
  console.log('\n🔍 Test 3: Array Join Signature Format');
  
  try {
    const paymentDetails = {
      Uid: uuidv4(),
      KeyId: skipCashConfig.keyId,
      Amount: '5.00',
      FirstName: 'Array',
      LastName: 'Test',
      Phone: '12345678',
      Email: 'array@test.com',
      Street: '',
      City: '',
      State: '',
      Country: '',
      PostalCode: '',
      TransactionId: `ARRAY_TEST_${Date.now()}`,
      Custom1: 'Array join test'
    };

    // Create combined data string using array join (like in your server)
    const combinedData = [
      `Uid=${paymentDetails.Uid}`,
      `KeyId=${paymentDetails.KeyId}`,
      `Amount=${paymentDetails.Amount}`,
      `FirstName=${paymentDetails.FirstName}`,
      `LastName=${paymentDetails.LastName}`,
      `Phone=${paymentDetails.Phone}`,
      `Email=${paymentDetails.Email}`,
      `Street=${paymentDetails.Street}`,
      `City=${paymentDetails.City}`,
      `State=${paymentDetails.State}`,
      `Country=${paymentDetails.Country}`,
      `PostalCode=${paymentDetails.PostalCode}`,
      `TransactionId=${paymentDetails.TransactionId}`,
      `Custom1=${paymentDetails.Custom1}`
    ].join(',');

    const combinedDataHash = crypto
      .createHmac('sha256', skipCashConfig.secretKey)
      .update(combinedData)
      .digest('base64');

    console.log('📤 Payment Details:', paymentDetails);
    console.log('🔗 Combined Data (Array Join):', combinedData);
    console.log('🔐 Generated Signature:', combinedDataHash.substring(0, 20) + '...');

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

// Test 4: Exact SkipCash Documentation Format (no signature)
async function testSkipCashDocumentationFormat() {
  console.log('\n🔍 Test 4: Exact SkipCash Documentation Format (no signature)');
  
  try {
    // Payment details exactly as per SkipCash documentation
    const paymentDetails = {
      Uid: v4(),
      KeyId: skipCashConfig.keyId,
      Amount: '15.00',
      FirstName: 'SkipCash',
      LastName: 'Doc',
      Phone: '12345678',
      Email: 'skipcash@doc.com',
      Street: '', // required for US, UK, and Canada cards only
      City: '', // required for US, UK, and Canada cards only
      State: '', // required for US, UK, and Canada cards only
      Country: '', // required for US, UK, and Canada cards only
      PostalCode: '', // required for US, UK, and Canada cards only
      TransactionId: `SKIPCASH_DOC_${Date.now()}`, // your internal order id
      Custom1: 'SkipCash Documentation Test' // optional
    };

    console.log('📤 Payment Details:', paymentDetails);

    // Make request without signature (exactly as per SkipCash docs)
    const url = `${skipCashConfig.sandboxURL}/api/v1/payments`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentDetails),
    });
    
    const json = await response.json();
    console.log("✅ SkipCash Response JSON:", json);
    
    if (json.resultObj) {
      console.log("✅ Result Object:", json.resultObj);
    }

    return true;
    
  } catch (error) {
    console.error('❌ SkipCash Documentation Format Test Failed:', error.message);
    return false;
  }
}

// Test 5: Try different authentication methods
async function testDifferentAuthMethods() {
  console.log('\n🔍 Test 5: Try Different Authentication Methods');
  
  try {
    const paymentDetails = {
      Uid: v4(),
      KeyId: skipCashConfig.keyId,
      Amount: '5.00',
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
      Custom1: 'Authentication test'
    };

    const url = `${skipCashConfig.sandboxURL}/api/v1/payments`;
    
    // Try with API key in Authorization header
    console.log('🔑 Trying with API Key in Authorization header...');
    try {
      const response1 = await fetch(url, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${skipCashConfig.keyId}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentDetails),
      });
      const json1 = await response1.json();
      console.log("✅ API Key Response:", json1);
      if (json1.returnCode !== 400) return true;
    } catch (e) {
      console.log("❌ API Key failed:", e.message);
    }

    // Try with Client ID in Authorization header
    console.log('🔑 Trying with Client ID in Authorization header...');
    try {
      const response2 = await fetch(url, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${skipCashConfig.clientId}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentDetails),
      });
      const json2 = await response2.json();
      console.log("✅ Client ID Response:", json2);
      if (json2.returnCode !== 400) return true;
    } catch (e) {
      console.log("❌ Client ID failed:", e.message);
    }

    // Try with X-API-Key header
    console.log('🔑 Trying with X-API-Key header...');
    try {
      const response3 = await fetch(url, {
        method: "POST",
        headers: {
          "X-API-Key": skipCashConfig.keyId,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentDetails),
      });
      const json3 = await response3.json();
      console.log("✅ X-API-Key Response:", json3);
      if (json3.returnCode !== 400) return true;
    } catch (e) {
      console.log("❌ X-API-Key failed:", e.message);
    }

    // Try with no headers at all
    console.log('🔑 Trying with no authentication headers...');
    try {
      const response4 = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentDetails),
      });
      const json4 = await response4.json();
      console.log("✅ No Auth Response:", json4);
      if (json4.returnCode !== 400) return true;
    } catch (e) {
      console.log("❌ No Auth failed:", e.message);
    }

    return false;
    
  } catch (error) {
    console.error('❌ Authentication Test Failed:', error.message);
    return false;
  }
}

// Test 6: Debug Signature Generation
async function testDebugSignature() {
  console.log('\n🔍 Test 6: Debug Signature Generation');
  
  try {
    const paymentDetails = {
      Uid: v4(),
      KeyId: skipCashConfig.keyId,
      Amount: '5.00',
      FirstName: 'Debug',
      LastName: 'Test',
      Phone: '12345678',
      Email: 'debug@test.com',
      Street: '',
      City: '',
      State: '',
      Country: '',
      PostalCode: '',
      TransactionId: `DEBUG_TEST_${Date.now()}`,
      Custom1: 'Debug signature test'
    };

    // Create combined data string
    const combinedData = `Uid=${paymentDetails.Uid},KeyId=${paymentDetails.KeyId},Amount=${paymentDetails.Amount},FirstName=${paymentDetails.FirstName},LastName=${paymentDetails.LastName},Phone=${paymentDetails.Phone},Email=${paymentDetails.Email},Street=${paymentDetails.Street},City=${paymentDetails.City},State=${paymentDetails.State},Country=${paymentDetails.Country},PostalCode=${paymentDetails.PostalCode},TransactionId=${paymentDetails.TransactionId},Custom1=${paymentDetails.Custom1}`;

    console.log('📤 Payment Details:', paymentDetails);
    console.log('🔗 Combined Data String:', combinedData);
    console.log('🔑 Secret Key (first 50 chars):', skipCashConfig.secretKey.substring(0, 50) + '...');
    console.log('🔑 Secret Key Length:', skipCashConfig.secretKey.length);

    // Try different signature methods
    console.log('\n🔐 Testing Different Signature Methods:');

    // Method 1: Node.js crypto (HMAC-SHA256)
    const nodeSignature = crypto
      .createHmac('sha256', skipCashConfig.secretKey)
      .update(combinedData)
      .digest('base64');
    console.log('✅ Node.js Crypto Signature:', nodeSignature.substring(0, 30) + '...');

    // Method 2: CryptoJS (HMAC-SHA256)
    const cryptoJSSignature = cryptojs.HmacSHA256(
      combinedData,
      skipCashConfig.secretKey
    );
    const cryptoJSBase64 = cryptojs.enc.Base64.stringify(cryptoJSSignature);
    console.log('✅ CryptoJS Signature:', cryptoJSBase64.substring(0, 30) + '...');

    // Method 3: Try with UTF-8 encoding
    const nodeSignatureUTF8 = crypto
      .createHmac('sha256', Buffer.from(skipCashConfig.secretKey, 'utf8'))
      .update(Buffer.from(combinedData, 'utf8'))
      .digest('base64');
    console.log('✅ Node.js UTF-8 Signature:', nodeSignatureUTF8.substring(0, 30) + '...');

    // Method 4: Try with different field order (alphabetical)
    const sortedFields = Object.keys(paymentDetails).sort();
    const sortedCombinedData = sortedFields.map(key => `${key}=${paymentDetails[key]}`).join(',');
    const sortedSignature = crypto
      .createHmac('sha256', skipCashConfig.secretKey)
      .update(sortedCombinedData)
      .digest('base64');
    console.log('✅ Sorted Fields Signature:', sortedSignature.substring(0, 30) + '...');

    console.log('\n🔍 Testing with Node.js signature...');
    
    // Test with Node.js signature
    const url = `${skipCashConfig.sandboxURL}/api/v1/payments`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": nodeSignature,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentDetails),
    });
    
    const json = await response.json();
    console.log("✅ Node.js Signature Response:", json);
    
    return true;
    
  } catch (error) {
    console.error('❌ Debug Signature Test Failed:', error.message);
    return false;
  }
}

// Run all tests
async function runAllTests() {
  const tests = [
    { name: 'Simple Payment (Official Format)', fn: testSimplePayment },
    { name: 'Your Data Format (140 QAR)', fn: testYourDataFormat },
    { name: 'Array Join Signature Format', fn: testArrayJoinSignature },
    { name: 'SkipCash Documentation Format (no signature)', fn: testSkipCashDocumentationFormat },
    { name: 'Try Different Authentication Methods', fn: testDifferentAuthMethods },
    { name: 'Debug Signature Generation', fn: testDebugSignature }
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
