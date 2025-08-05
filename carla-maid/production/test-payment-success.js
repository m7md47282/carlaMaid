const axios = require('axios');
const express = require('express');

// Mock test configuration
const TEST_CONFIG = {
  baseUrl: 'http://localhost:4000',
  testOrderId: 'CARLA_TEST_123456789',
  testPaymentId: 'PAY_TEST_987654321',
  testAmount: 150.00,
  testCurrency: 'QAR',
  testCustomer: {
    name: 'Test Customer',
    email: 'test@example.com',
    phone: '+97450123456'
  },
  testAddress: 'Test Address, Doha, Qatar',
  testBookingData: {
    serviceType: 'cleaning',
    cleaners: 2,
    hours: 3,
    materials: true,
    scheduledDate: '2024-01-15',
    scheduledTime: '09:00'
  }
};

// Test scenarios
const TEST_SCENARIOS = {
  // Scenario 1: Complete successful payment flow
  completePaymentFlow: {
    name: 'Complete Payment Flow Test',
    steps: [
      {
        name: 'Create Payment',
        endpoint: '/api/skipcash/payment/create',
        method: 'POST',
        data: {
          amount: TEST_CONFIG.testAmount,
          currency: TEST_CONFIG.testCurrency,
          customerName: TEST_CONFIG.testCustomer.name,
          customerEmail: TEST_CONFIG.testCustomer.email,
          customerPhone: TEST_CONFIG.testCustomer.phone,
          description: 'Test cleaning service payment',
          returnUrl: `${TEST_CONFIG.baseUrl}/payment/success`,
          cancelUrl: `${TEST_CONFIG.baseUrl}/payment/cancel`,
          orderId: TEST_CONFIG.testOrderId
        },
        expectedStatus: 200,
        expectedFields: ['success', 'data', 'data.paymentUrl', 'data.payUrl', 'data.id']
      },
      {
        name: 'Check Payment Status',
        endpoint: `/api/payment/status-skip-cash/${TEST_CONFIG.testOrderId}`,
        method: 'GET',
        expectedStatus: 200,
        expectedFields: ['success', 'data']
      },
      {
        name: 'Store Payment Data',
        endpoint: '/api/bookings/store-payment-data',
        method: 'POST',
        data: {
          paymentOrderId: TEST_CONFIG.testPaymentId,
          bookingData: {
            customerName: TEST_CONFIG.testCustomer.name,
            customerEmail: TEST_CONFIG.testCustomer.email,
            customerPhone: TEST_CONFIG.testCustomer.phone,
            address: TEST_CONFIG.testAddress,
            serviceType: TEST_CONFIG.testBookingData.serviceType,
            cleaners: TEST_CONFIG.testBookingData.cleaners,
            hours: TEST_CONFIG.testBookingData.hours,
            materials: TEST_CONFIG.testBookingData.materials,
            scheduledDate: TEST_CONFIG.testBookingData.scheduledDate,
            scheduledTime: TEST_CONFIG.testBookingData.scheduledTime
          },
          paymentAmount: TEST_CONFIG.testAmount
        },
        expectedStatus: 200,
        expectedFields: ['success', 'message']
      },
      {
        name: 'Create Booking with Payment',
        endpoint: '/api/bookings/create-with-payment',
        method: 'POST',
        data: {
          customer_name: TEST_CONFIG.testCustomer.name,
          customer_email: TEST_CONFIG.testCustomer.email,
          customer_phone: TEST_CONFIG.testCustomer.phone,
          address: TEST_CONFIG.testAddress,
          service_type: TEST_CONFIG.testBookingData.serviceType,
          cleaners: TEST_CONFIG.testBookingData.cleaners,
          hours: TEST_CONFIG.testBookingData.hours,
          materials: TEST_CONFIG.testBookingData.materials,
          total: TEST_CONFIG.testAmount,
          payment_method: 'skipcash',
          payment_order_id: TEST_CONFIG.testPaymentId,
          payment_status: 'completed',
          is_paid: true,
          scheduled_date: TEST_CONFIG.testBookingData.scheduledDate,
          scheduled_time: TEST_CONFIG.testBookingData.scheduledTime
        },
        expectedStatus: 200,
        expectedFields: ['success', 'orderId', 'order', 'message']
      }
    ]
  },

  // Scenario 2: Payment creation only
  paymentCreationOnly: {
    name: 'Payment Creation Test',
    steps: [
      {
        name: 'Create Payment',
        endpoint: '/api/skipcash/payment/create',
        method: 'POST',
        data: {
          amount: 200.00,
          currency: 'QAR',
          customerName: 'John Doe',
          customerEmail: 'john.doe@example.com',
          customerPhone: '+97450789012',
          description: 'Premium cleaning service',
          returnUrl: `${TEST_CONFIG.baseUrl}/payment/success`,
          cancelUrl: `${TEST_CONFIG.baseUrl}/payment/cancel`,
          orderId: 'CARLA_TEST_200_001'
        },
        expectedStatus: 200,
        expectedFields: ['success', 'data', 'data.paymentUrl']
      }
    ]
  },

  // Scenario 3: Payment status check
  paymentStatusCheck: {
    name: 'Payment Status Check Test',
    steps: [
      {
        name: 'Check Payment Status',
        endpoint: `/api/payment/status-skip-cash/${TEST_CONFIG.testOrderId}`,
        method: 'GET',
        expectedStatus: 200,
        expectedFields: ['success', 'data']
      }
    ]
  },

  // Scenario 4: Booking creation with payment
  bookingWithPayment: {
    name: 'Booking with Payment Test',
    steps: [
      {
        name: 'Create Booking with Payment',
        endpoint: '/api/bookings/create-with-payment',
        method: 'POST',
        data: {
          customer_name: 'Jane Smith',
          customer_email: 'jane.smith@example.com',
          customer_phone: '+97450345678',
          address: 'Villa 123, West Bay, Doha',
          service_type: 'deep_cleaning',
          cleaners: 3,
          hours: 4,
          materials: false,
          total: 300.00,
          payment_method: 'skipcash',
          payment_order_id: 'PAY_COMPLETED_456',
          payment_status: 'completed',
          is_paid: true,
          scheduled_date: '2024-01-20',
          scheduled_time: '10:00'
        },
        expectedStatus: 200,
        expectedFields: ['success', 'orderId', 'order', 'message']
      }
    ]
  },

  // Scenario 5: Payment data storage and retrieval
  paymentDataStorage: {
    name: 'Payment Data Storage Test',
    steps: [
      {
        name: 'Store Payment Data',
        endpoint: '/api/bookings/store-payment-data',
        method: 'POST',
        data: {
          paymentOrderId: 'PAY_STORAGE_TEST_789',
          bookingData: {
            customerName: 'Storage Test Customer',
            customerEmail: 'storage.test@example.com',
            customerPhone: '+97450987654',
            address: 'Storage Test Address',
            serviceType: 'regular_cleaning',
            cleaners: 1,
            hours: 2,
            materials: true,
            scheduledDate: '2024-01-25',
            scheduledTime: '14:00'
          },
          paymentAmount: 100.00
        },
        expectedStatus: 200,
        expectedFields: ['success', 'message']
      },
      {
        name: 'Retrieve Payment Data',
        endpoint: '/api/bookings/payment-data/PAY_STORAGE_TEST_789',
        method: 'GET',
        expectedStatus: 200,
        expectedFields: ['success', 'data', 'data.bookingData', 'data.paymentAmount']
      }
    ]
  }
};

// Test runner class
class PaymentSuccessTestRunner {
  constructor() {
    this.results = [];
    this.currentScenario = null;
  }

  /**
   * Run all test scenarios
   */
  async runAllTests() {
    console.log('🚀 Starting Payment Success Tests...\n');
    
    for (const [scenarioKey, scenario] of Object.entries(TEST_SCENARIOS)) {
      await this.runScenario(scenarioKey, scenario);
    }
    
    this.printSummary();
  }

  /**
   * Run a specific test scenario
   */
  async runScenario(scenarioKey, scenario) {
    console.log(`📋 Running Scenario: ${scenario.name}`);
    console.log(`   Key: ${scenarioKey}`);
    console.log(`   Steps: ${scenario.steps.length}\n`);

    this.currentScenario = scenarioKey;
    const scenarioResults = [];

    for (let i = 0; i < scenario.steps.length; i++) {
      const step = scenario.steps[i];
      const result = await this.runStep(step, i + 1);
      scenarioResults.push(result);
      
      if (!result.success) {
        console.log(`   ❌ Step ${i + 1} failed: ${result.error}`);
        break;
      }
    }

    const scenarioSuccess = scenarioResults.every(r => r.success);
    this.results.push({
      scenarioKey,
      scenarioName: scenario.name,
      success: scenarioSuccess,
      results: scenarioResults
    });

    console.log(`   ${scenarioSuccess ? '✅' : '❌'} Scenario ${scenarioSuccess ? 'PASSED' : 'FAILED'}\n`);
  }

  /**
   * Run a single test step
   */
  async runStep(step, stepNumber) {
    console.log(`   🔄 Step ${stepNumber}: ${step.name}`);
    
    try {
      const url = `${TEST_CONFIG.baseUrl}${step.endpoint}`;
      let response;

      if (step.method === 'GET') {
        response = await axios.get(url);
      } else if (step.method === 'POST') {
        response = await axios.post(url, step.data);
      } else if (step.method === 'PUT') {
        response = await axios.put(url, step.data);
      } else if (step.method === 'DELETE') {
        response = await axios.delete(url);
      }

      const result = this.validateResponse(response, step);
      
      if (result.success) {
        console.log(`      ✅ Step ${stepNumber} passed`);
      } else {
        console.log(`      ❌ Step ${stepNumber} failed: ${result.error}`);
      }

      return result;

    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message || 'Unknown error';
      console.log(`      ❌ Step ${stepNumber} failed: ${errorMessage}`);
      
      return {
        success: false,
        error: errorMessage,
        status: error.response?.status,
        data: error.response?.data
      };
    }
  }

  /**
   * Validate API response
   */
  validateResponse(response, step) {
    // Check status code
    if (response.status !== step.expectedStatus) {
      return {
        success: false,
        error: `Expected status ${step.expectedStatus}, got ${response.status}`,
        status: response.status,
        data: response.data
      };
    }

    // Check response structure
    if (!response.data) {
      return {
        success: false,
        error: 'No response data received',
        status: response.status,
        data: response.data
      };
    }

    // Check expected fields
    for (const field of step.expectedFields) {
      if (!this.hasNestedProperty(response.data, field)) {
        return {
          success: false,
          error: `Missing expected field: ${field}`,
          status: response.status,
          data: response.data
        };
      }
    }

    // Check success field if present
    if (response.data.hasOwnProperty('success') && !response.data.success) {
      return {
        success: false,
        error: response.data.error || 'API returned success: false',
        status: response.status,
        data: response.data
      };
    }

    return {
      success: true,
      status: response.status,
      data: response.data
    };
  }

  /**
   * Check if object has nested property
   */
  hasNestedProperty(obj, path) {
    const keys = path.split('.');
    let current = obj;
    
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return false;
      }
    }
    
    return true;
  }

  /**
   * Print test summary
   */
  printSummary() {
    console.log('📊 Test Summary');
    console.log('================');
    
    const totalScenarios = this.results.length;
    const passedScenarios = this.results.filter(r => r.success).length;
    const failedScenarios = totalScenarios - passedScenarios;
    
    console.log(`Total Scenarios: ${totalScenarios}`);
    console.log(`Passed: ${passedScenarios}`);
    console.log(`Failed: ${failedScenarios}`);
    console.log(`Success Rate: ${((passedScenarios / totalScenarios) * 100).toFixed(1)}%\n`);
    
    if (failedScenarios > 0) {
      console.log('❌ Failed Scenarios:');
      this.results.filter(r => !r.success).forEach(result => {
        console.log(`   - ${result.scenarioName} (${result.scenarioKey})`);
      });
      console.log('');
    }
    
    if (passedScenarios > 0) {
      console.log('✅ Passed Scenarios:');
      this.results.filter(r => r.success).forEach(result => {
        console.log(`   - ${result.scenarioName} (${result.scenarioKey})`);
      });
      console.log('');
    }
  }
}

// Mock data generator
class MockDataGenerator {
  static generatePaymentRequest() {
    return {
      amount: Math.floor(Math.random() * 500) + 50,
      currency: 'QAR',
      customerName: `Test Customer ${Date.now()}`,
      customerEmail: `test.${Date.now()}@example.com`,
      customerPhone: `+97450${Math.floor(Math.random() * 900000) + 100000}`,
      description: 'Test cleaning service payment',
      returnUrl: `${TEST_CONFIG.baseUrl}/payment/success`,
      cancelUrl: `${TEST_CONFIG.baseUrl}/payment/cancel`,
      orderId: `CARLA_TEST_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`
    };
  }

  static generateBookingData() {
    return {
      customer_name: `Booking Customer ${Date.now()}`,
      customer_email: `booking.${Date.now()}@example.com`,
      customer_phone: `+97450${Math.floor(Math.random() * 900000) + 100000}`,
      address: `Test Address ${Date.now()}, Doha, Qatar`,
      service_type: ['cleaning', 'deep_cleaning', 'regular_cleaning'][Math.floor(Math.random() * 3)],
      cleaners: Math.floor(Math.random() * 3) + 1,
      hours: Math.floor(Math.random() * 4) + 1,
      materials: Math.random() > 0.5,
      total: Math.floor(Math.random() * 500) + 50,
      payment_method: 'skipcash',
      payment_order_id: `PAY_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
      payment_status: 'completed',
      is_paid: true,
      scheduled_date: new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      scheduled_time: `${Math.floor(Math.random() * 12) + 8}:${Math.floor(Math.random() * 4) * 15}`
    };
  }
}

// Health check function
async function checkServerHealth() {
  try {
    const response = await axios.get(`${TEST_CONFIG.baseUrl}/api/health`);
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
  console.log('🧪 Payment Success Mock Tests');
  console.log('==============================\n');
  
  // Check server health
  const serverHealthy = await checkServerHealth();
  if (!serverHealthy) {
    process.exit(1);
  }
  
  // Run tests
  const testRunner = new PaymentSuccessTestRunner();
  await testRunner.runAllTests();
}

// Export for use in other files
module.exports = {
  PaymentSuccessTestRunner,
  MockDataGenerator,
  TEST_CONFIG,
  TEST_SCENARIOS,
  checkServerHealth
};

// Run if this file is executed directly
if (require.main === module) {
  main().catch(error => {
    console.error('Test execution failed:', error);
    process.exit(1);
  });
} 