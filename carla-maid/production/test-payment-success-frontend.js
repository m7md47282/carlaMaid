const puppeteer = require('puppeteer');

// Frontend test configuration
const FRONTEND_TEST_CONFIG = {
  baseUrl: 'http://localhost:4200', // Angular dev server
  testTimeout: 30000,
  viewport: { width: 1280, height: 720 }
};

// Mock payment data for testing
const MOCK_PAYMENT_DATA = {
  success: {
    orderId: 'CARLA_TEST_SUCCESS_123',
    status: 'completed',
    amount: 150.00,
    currency: 'QAR',
    transactionId: 'TXN_SUCCESS_456'
  },
  pending: {
    orderId: 'CARLA_TEST_PENDING_789',
    status: 'pending',
    amount: 200.00,
    currency: 'QAR'
  },
  failed: {
    orderId: 'CARLA_TEST_FAILED_012',
    status: 'failed',
    amount: 100.00,
    currency: 'QAR',
    error: 'Payment failed'
  }
};

// Test scenarios for frontend
const FRONTEND_TEST_SCENARIOS = {
  // Scenario 1: Payment success page load
  paymentSuccessPageLoad: {
    name: 'Payment Success Page Load Test',
    description: 'Test loading payment success page with mock data',
    steps: [
      {
        name: 'Navigate to payment success page',
        action: async (page) => {
          const mockOrderId = MOCK_PAYMENT_DATA.success.orderId;
          await page.goto(`${FRONTEND_TEST_CONFIG.baseUrl}/payment/success?orderId=${mockOrderId}`);
          await page.waitForSelector('.payment-success-container', { timeout: 5000 });
        },
        assertions: [
          {
            name: 'Success page should load',
            check: async (page) => {
              const container = await page.$('.payment-success-container');
              return container !== null;
            }
          },
          {
            name: 'Success icon should be visible',
            check: async (page) => {
              const icon = await page.$('.success-icon svg');
              return icon !== null;
            }
          },
          {
            name: 'Success title should be displayed',
            check: async (page) => {
              const title = await page.$('h1');
              return title !== null;
            }
          }
        ]
      }
    ]
  },

  // Scenario 2: Payment success with order details
  paymentSuccessWithDetails: {
    name: 'Payment Success with Order Details Test',
    description: 'Test payment success page with complete order details',
    steps: [
      {
        name: 'Navigate to payment success with complete data',
        action: async (page) => {
          const mockOrderId = MOCK_PAYMENT_DATA.success.orderId;
          await page.goto(`${FRONTEND_TEST_CONFIG.baseUrl}/payment/success?orderId=${mockOrderId}`);
          await page.waitForSelector('.payment-details', { timeout: 5000 });
        },
        assertions: [
          {
            name: 'Payment details should be displayed',
            check: async (page) => {
              const details = await page.$('.payment-details');
              return details !== null;
            }
          },
          {
            name: 'Order ID should be shown',
            check: async (page) => {
              const orderIdText = await page.$eval('.detail-row', el => el.textContent);
              return orderIdText.includes(MOCK_PAYMENT_DATA.success.orderId);
            }
          },
          {
            name: 'Amount should be displayed',
            check: async (page) => {
              const amountText = await page.$eval('.detail-row:nth-child(2)', el => el.textContent);
              return amountText.includes(MOCK_PAYMENT_DATA.success.amount.toString());
            }
          }
        ]
      }
    ]
  },

  // Scenario 3: Payment success popup
  paymentSuccessPopup: {
    name: 'Payment Success Popup Test',
    description: 'Test payment success popup component',
    steps: [
      {
        name: 'Trigger payment success popup',
        action: async (page) => {
          // Navigate to a page that can trigger the popup
          await page.goto(`${FRONTEND_TEST_CONFIG.baseUrl}/book-now`);
          await page.waitForSelector('app-book-now', { timeout: 5000 });
          
          // Simulate successful payment by setting session storage
          await page.evaluate(() => {
            sessionStorage.setItem('paymentSuccess', 'true');
            sessionStorage.setItem('paymentOrderId', 'CARLA_TEST_POPUP_123');
            sessionStorage.setItem('paymentAmount', '150.00');
          });
          
          // Trigger a page reload to simulate payment callback
          await page.reload();
        },
        assertions: [
          {
            name: 'Popup should be triggered',
            check: async (page) => {
              const popup = await page.$('.popup-overlay');
              return popup !== null;
            }
          },
          {
            name: 'Popup should have success content',
            check: async (page) => {
              const popupContent = await page.$('.popup-content');
              return popupContent !== null;
            }
          }
        ]
      }
    ]
  },

  // Scenario 4: Navigation after payment success
  navigationAfterSuccess: {
    name: 'Navigation After Payment Success Test',
    description: 'Test navigation buttons after payment success',
    steps: [
      {
        name: 'Navigate to payment success page',
        action: async (page) => {
          const mockOrderId = MOCK_PAYMENT_DATA.success.orderId;
          await page.goto(`${FRONTEND_TEST_CONFIG.baseUrl}/payment/success?orderId=${mockOrderId}`);
          await page.waitForSelector('.actions', { timeout: 5000 });
        },
        assertions: [
          {
            name: 'Back to home button should be present',
            check: async (page) => {
              const homeButton = await page.$('.btn-primary');
              return homeButton !== null;
            }
          },
          {
            name: 'Book another button should be present',
            check: async (page) => {
              const bookAnotherButton = await page.$('.btn-secondary');
              return bookAnotherButton !== null;
            }
          }
        ]
      },
      {
        name: 'Test back to home navigation',
        action: async (page) => {
          await page.click('.btn-primary');
          await page.waitForNavigation({ timeout: 5000 });
        },
        assertions: [
          {
            name: 'Should navigate to home page',
            check: async (page) => {
              const currentUrl = page.url();
              return currentUrl.includes('/') || currentUrl.includes('/home');
            }
          }
        ]
      }
    ]
  },

  // Scenario 5: Payment success with booking creation
  paymentSuccessWithBooking: {
    name: 'Payment Success with Booking Creation Test',
    description: 'Test complete flow from payment success to booking creation',
    steps: [
      {
        name: 'Navigate to payment success with booking data',
        action: async (page) => {
          const mockOrderId = MOCK_PAYMENT_DATA.success.orderId;
          await page.goto(`${FRONTEND_TEST_CONFIG.baseUrl}/payment/success?orderId=${mockOrderId}`);
          await page.waitForSelector('.payment-success-container', { timeout: 5000 });
          
          // Simulate booking data in session storage
          await page.evaluate(() => {
            sessionStorage.setItem('bookingData', JSON.stringify({
              customerName: 'Test Customer',
              customerEmail: 'test@example.com',
              customerPhone: '+97450123456',
              address: 'Test Address, Doha, Qatar',
              serviceType: 'cleaning',
              cleaners: 2,
              hours: 3,
              materials: true,
              scheduledDate: '2024-01-15',
              scheduledTime: '09:00'
            }));
          });
        },
        assertions: [
          {
            name: 'Booking order ID should be displayed',
            check: async (page) => {
              const bookingOrderId = await page.$eval('.detail-row:last-child', el => el.textContent);
              return bookingOrderId.includes('CARLA_BOOKING');
            }
          }
        ]
      }
    ]
  }
};

// Frontend test runner class
class FrontendPaymentSuccessTestRunner {
  constructor() {
    this.browser = null;
    this.page = null;
    this.results = [];
  }

  /**
   * Initialize browser and page
   */
  async initialize() {
    console.log('🌐 Initializing browser...');
    
    this.browser = await puppeteer.launch({
      headless: false, // Set to true for CI/CD
      defaultViewport: FRONTEND_TEST_CONFIG.viewport,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    this.page = await this.browser.newPage();
    
    // Set user agent
    await this.page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    console.log('✅ Browser initialized');
  }

  /**
   * Run all frontend test scenarios
   */
  async runAllTests() {
    console.log('🚀 Starting Frontend Payment Success Tests...\n');
    
    try {
      await this.initialize();
      
      for (const [scenarioKey, scenario] of Object.entries(FRONTEND_TEST_SCENARIOS)) {
        await this.runScenario(scenarioKey, scenario);
      }
      
      this.printSummary();
    } finally {
      await this.cleanup();
    }
  }

  /**
   * Run a specific frontend test scenario
   */
  async runScenario(scenarioKey, scenario) {
    console.log(`📋 Running Frontend Scenario: ${scenario.name}`);
    console.log(`   Description: ${scenario.description}`);
    console.log(`   Steps: ${scenario.steps.length}\n`);

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

    console.log(`   ${scenarioSuccess ? '✅' : '❌'} Frontend Scenario ${scenarioSuccess ? 'PASSED' : 'FAILED'}\n`);
  }

  /**
   * Run a single frontend test step
   */
  async runStep(step, stepNumber) {
    console.log(`   🔄 Step ${stepNumber}: ${step.name}`);
    
    try {
      // Execute the action
      await step.action(this.page);
      
      // Run assertions
      const assertionResults = [];
      for (const assertion of step.assertions) {
        const assertionResult = await assertion.check(this.page);
        assertionResults.push({
          name: assertion.name,
          success: assertionResult
        });
        
        if (!assertionResult) {
          console.log(`      ❌ Assertion failed: ${assertion.name}`);
        }
      }
      
      const stepSuccess = assertionResults.every(r => r.success);
      
      if (stepSuccess) {
        console.log(`      ✅ Step ${stepNumber} passed (${assertionResults.length} assertions)`);
      } else {
        const failedAssertions = assertionResults.filter(r => !r.success).map(r => r.name);
        console.log(`      ❌ Step ${stepNumber} failed: ${failedAssertions.join(', ')}`);
      }

      return {
        success: stepSuccess,
        assertions: assertionResults
      };

    } catch (error) {
      console.log(`      ❌ Step ${stepNumber} failed: ${error.message}`);
      
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Print test summary
   */
  printSummary() {
    console.log('📊 Frontend Test Summary');
    console.log('========================');
    
    const totalScenarios = this.results.length;
    const passedScenarios = this.results.filter(r => r.success).length;
    const failedScenarios = totalScenarios - passedScenarios;
    
    console.log(`Total Scenarios: ${totalScenarios}`);
    console.log(`Passed: ${passedScenarios}`);
    console.log(`Failed: ${failedScenarios}`);
    console.log(`Success Rate: ${((passedScenarios / totalScenarios) * 100).toFixed(1)}%\n`);
    
    if (failedScenarios > 0) {
      console.log('❌ Failed Frontend Scenarios:');
      this.results.filter(r => !r.success).forEach(result => {
        console.log(`   - ${result.scenarioName} (${result.scenarioKey})`);
      });
      console.log('');
    }
    
    if (passedScenarios > 0) {
      console.log('✅ Passed Frontend Scenarios:');
      this.results.filter(r => r.success).forEach(result => {
        console.log(`   - ${result.scenarioName} (${result.scenarioKey})`);
      });
      console.log('');
    }
  }

  /**
   * Cleanup browser resources
   */
  async cleanup() {
    if (this.browser) {
      await this.browser.close();
      console.log('🧹 Browser cleaned up');
    }
  }
}

// Mock data generator for frontend tests
class FrontendMockDataGenerator {
  static generatePaymentSuccessUrl(orderId) {
    return `${FRONTEND_TEST_CONFIG.baseUrl}/payment/success?orderId=${orderId}`;
  }

  static generatePaymentCancelUrl(orderId) {
    return `${FRONTEND_TEST_CONFIG.baseUrl}/payment/cancel?orderId=${orderId}`;
  }

  static generateMockBookingData() {
    return {
      customerName: `Frontend Test Customer ${Date.now()}`,
      customerEmail: `frontend.test.${Date.now()}@example.com`,
      customerPhone: `+97450${Math.floor(Math.random() * 900000) + 100000}`,
      address: `Frontend Test Address ${Date.now()}, Doha, Qatar`,
      serviceType: 'cleaning',
      cleaners: Math.floor(Math.random() * 3) + 1,
      hours: Math.floor(Math.random() * 4) + 1,
      materials: Math.random() > 0.5,
      scheduledDate: new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      scheduledTime: `${Math.floor(Math.random() * 12) + 8}:${Math.floor(Math.random() * 4) * 15}`
    };
  }
}

// Health check for frontend
async function checkFrontendHealth() {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.goto(FRONTEND_TEST_CONFIG.baseUrl, { 
      waitUntil: 'networkidle0',
      timeout: 10000 
    });
    
    await browser.close();
    console.log('✅ Frontend is accessible');
    return true;
  } catch (error) {
    console.log('❌ Frontend is not accessible');
    console.log('   Please start the Angular dev server with: ng serve');
    return false;
  }
}

// Main execution
async function main() {
  console.log('🧪 Frontend Payment Success Mock Tests');
  console.log('=======================================\n');
  
  // Check frontend health
  const frontendHealthy = await checkFrontendHealth();
  if (!frontendHealthy) {
    process.exit(1);
  }
  
  // Run tests
  const testRunner = new FrontendPaymentSuccessTestRunner();
  await testRunner.runAllTests();
}

// Export for use in other files
module.exports = {
  FrontendPaymentSuccessTestRunner,
  FrontendMockDataGenerator,
  FRONTEND_TEST_CONFIG,
  FRONTEND_TEST_SCENARIOS,
  MOCK_PAYMENT_DATA,
  checkFrontendHealth
};

// Run if this file is executed directly
if (require.main === module) {
  main().catch(error => {
    console.error('Frontend test execution failed:', error);
    process.exit(1);
  });
} 