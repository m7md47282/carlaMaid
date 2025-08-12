const axios = require('axios');
const crypto = require('crypto');

// SkipCash Configuration
const skipCashConfig = {
  production: {
    apiUrl: 'https://api.skipcash.app',
    apiKey: '2ce8c700-f8e6-4cc5-b59a-0069f368815d',
    secretKey: 'fsrj/XE5skmcrfaG4Yqoc07VGuiHBW'
  },
  sandbox: {
    apiUrl: 'https://skipcashtest.azurewebsites.net',
    apiKey: '2ce8c700-f8e6-4cc5-b59a-0069f368815d',
    secretKey: 'fsrj/XE5skmcrfaG4Yqoc07VGuiHBW'
  }
};

async function testSkipCashConfig() {
  console.log('🔍 Testing SkipCash Configuration...\n');

  // Test both environments
  for (const [env, config] of Object.entries(skipCashConfig)) {
    console.log(`📡 Testing ${env.toUpperCase()} environment:`);
    console.log(`   API URL: ${config.apiUrl}`);
    console.log(`   API Key: ${config.apiKey}`);
    console.log(`   Secret Key: ${config.secretKey ? '✅ Set' : '❌ Missing'}`);
    
    try {
      // Test basic connectivity
      const response = await axios.get(`${config.apiUrl}/api/v1/health`, {
        timeout: 5000
      });
      console.log(`   Health Check: ✅ ${response.status} - ${response.statusText}`);
    } catch (error) {
      console.log(`   Health Check: ❌ ${error.message}`);
    }

    // Test with a minimal payment request
    try {
      const { v4: uuidv4 } = require('uuid');
      
      const testPayment = {
        Uid: uuidv4(),
        KeyId: config.apiKey,
        Amount: '10.00',
        FirstName: 'Test',
        LastName: 'User',
        Phone: '123456789',
        Email: 'test@example.com',
        Street: '',
        City: '',
        State: '',
        Country: '',
        PostalCode: '',
        TransactionId: `TEST_${Date.now()}`,
        Custom1: 'Test Payment'
      };

      const combinedData = [
        `Uid=${testPayment.Uid}`,
        `KeyId=${testPayment.KeyId}`,
        `Amount=${testPayment.Amount}`,
        `FirstName=${testPayment.FirstName}`,
        `LastName=${testPayment.LastName}`,
        `Phone=${testPayment.Phone}`,
        `Email=${testPayment.Email}`,
        `Street=${testPayment.Street}`,
        `City=${testPayment.City}`,
        `State=${testPayment.State}`,
        `Country=${testPayment.Country}`,
        `PostalCode=${testPayment.PostalCode}`,
        `TransactionId=${testPayment.TransactionId}`,
        `Custom1=${testPayment.Custom1}`,
        `Currency=QAR`
      ].join(',');

      const signature = crypto
        .createHmac('sha256', config.secretKey)
        .update(combinedData)
        .digest('base64');

      console.log(`   Payment Test: 🔄 Attempting...`);
      
      const paymentResponse = await axios.post(`${config.apiUrl}/api/v1/payments`, testPayment, {
        headers: {
          'Authorization': signature,
          'Content-Type': 'application/json'
        },
        timeout: 10000
      });
      
      console.log(`   Payment Test: ✅ Success - ${paymentResponse.status}`);
      
    } catch (error) {
      if (error.response) {
        console.log(`   Payment Test: ❌ ${error.response.status} - ${error.response.data?.errorMessage || error.message}`);
      } else {
        console.log(`   Payment Test: ❌ ${error.message}`);
      }
    }
    
    console.log('');
  }
}

// Run the test
testSkipCashConfig().catch(console.error);
