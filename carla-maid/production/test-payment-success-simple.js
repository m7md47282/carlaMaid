#!/usr/bin/env node

const axios = require('axios');

// Simple test configuration
const SIMPLE_TEST_CONFIG = {
  baseUrl: 'http://localhost:4000',
  testTimeout: 10000
};

// Simple test scenarios
const SIMPLE_TESTS = [
  {
    name: 'Health Check',
    endpoint: '/api/health',
    method: 'GET',
    expectedStatus: 200
  },
  {
    name: 'SkipCash Health Check',
    endpoint: '/api/skipcash/health',
    method: 'GET',
    expectedStatus: 200
  },
  {
    name: 'Payment Creation Test',
    endpoint: '/api/skipcash/payment/create',
    method: 'POST',
    data: {
      amount: 100.00,
      currency: 'QAR',
      customerName: 'Simple Test Customer',
      customerEmail: 'simple.test@example.com',
      customerPhone: '+97450123456',
      description: 'Simple test payment',
      returnUrl: 'http://localhost:4200/payment/success',
      cancelUrl: 'http://localhost:4200/payment/cancel',
      orderId: `SIMPLE_TEST_${Date.now()}`
    },
    expectedStatus: 200
  },
  {
    name: 'Booking Creation Test',
    endpoint: '/api/bookings/create',
    method: 'POST',
    data: {
      customer_name: 'Simple Test Customer',
      customer_email: 'simple.test@example.com',
      customer_phone: '+97450123456',
      address: 'Simple Test Address, Doha, Qatar',
      service_type: 'cleaning',
      cleaners: 1,
      hours: 2,
      materials: false,
      total: 100.00,
      payment_method: 'pay_later',
      scheduled_date: '2024-01-15',
      scheduled_time: '09:00'
    },
    expectedStatus: 200
  }
];

// Simple test runner
class SimplePaymentSuccessTestRunner {
  constructor() {
    this.results = [];
  }

  async runAllTests() {
    console.log('🧪 Simple Payment Success Tests');
    console.log('===============================\n');
    
    for (let i = 0; i < SIMPLE_TESTS.length; i++) {
      const test = SIMPLE_TESTS[i];
      const result = await this.runTest(test, i + 1);
      this.results.push(result);
    }
    
    this.printSummary();
  }

  async runTest(test, testNumber) {
    console.log(`🔄 Test ${testNumber}: ${test.name}`);
    
    try {
      const url = `${SIMPLE_TEST_CONFIG.baseUrl}${test.endpoint}`;
      let response;

      if (test.method === 'GET') {
        response = await axios.get(url, { timeout: SIMPLE_TEST_CONFIG.testTimeout });
      } else if (test.method === 'POST') {
        response = await axios.post(url, test.data, { 
          timeout: SIMPLE_TEST_CONFIG.testTimeout,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      const success = response.status === test.expectedStatus;
      
      if (success) {
        console.log(`   ✅ Test ${testNumber} passed`);
      } else {
        console.log(`   ❌ Test ${testNumber} failed: Expected status ${test.expectedStatus}, got ${response.status}`);
      }

      return {
        name: test.name,
        success,
        status: response.status,
        data: response.data
      };

    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message || 'Unknown error';
      console.log(`   ❌ Test ${testNumber} failed: ${errorMessage}`);
      
      return {
        name: test.name,
        success: false,
        error: errorMessage,
        status: error.response?.status
      };
    }
  }

  printSummary() {
    console.log('\n📊 Simple Test Summary');
    console.log('======================\n');
    
    const totalTests = this.results.length;
    const passedTests = this.results.filter(r => r.success).length;
    const failedTests = totalTests - passedTests;
    
    console.log(`Total Tests: ${totalTests}`);
    console.log(`Passed: ${passedTests}`);
    console.log(`Failed: ${failedTests}`);
    console.log(`Success Rate: ${((passedTests / totalTests) * 100).toFixed(1)}%\n`);
    
    if (failedTests > 0) {
      console.log('❌ Failed Tests:');
      this.results.filter(r => !r.success).forEach(result => {
        console.log(`   - ${result.name}: ${result.error || 'Unknown error'}`);
      });
      console.log('');
    }
    
    if (passedTests > 0) {
      console.log('✅ Passed Tests:');
      this.results.filter(r => r.success).forEach(result => {
        console.log(`   - ${result.name}`);
      });
      console.log('');
    }
  }
}

// Health check function
async function checkServerHealth() {
  try {
    const response = await axios.get(`${SIMPLE_TEST_CONFIG.baseUrl}/api/health`, {
      timeout: 5000
    });
    console.log('✅ Server is running and healthy');
    return true;
  } catch (error) {
    console.log('❌ Server is not running or not accessible');
    console.log('   Please start the server with: node standalone-server.js');
    return false;
  }
}

// Main execution
async function main() {
  console.log('🚀 Starting Simple Payment Success Tests...\n');
  
  // Check server health
  const serverHealthy = await checkServerHealth();
  if (!serverHealthy) {
    process.exit(1);
  }
  
  // Run tests
  const testRunner = new SimplePaymentSuccessTestRunner();
  await testRunner.runAllTests();
}

// Export for use in other files
module.exports = {
  SimplePaymentSuccessTestRunner,
  SIMPLE_TESTS,
  SIMPLE_TEST_CONFIG,
  checkServerHealth
};

// Run if this file is executed directly
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Simple test execution failed:', error);
    process.exit(1);
  });
} 