#!/usr/bin/env node

const { PaymentSuccessTestRunner, MockDataGenerator, checkServerHealth } = require('./test-payment-success');
const { FrontendPaymentSuccessTestRunner, checkFrontendHealth } = require('./test-payment-success-frontend');

// Test configuration
const TEST_CONFIG = {
  backend: {
    baseUrl: 'http://localhost:4000',
    enabled: true,
    timeout: 30000
  },
  frontend: {
    baseUrl: 'http://localhost:4200',
    enabled: true,
    timeout: 30000,
    headless: false // Set to true for CI/CD
  },
  reporting: {
    detailed: true,
    saveResults: true,
    outputFile: 'payment-success-test-results.json'
  }
};

// Test scenarios configuration
const SCENARIO_CONFIG = {
  backend: {
    completePaymentFlow: true,
    paymentCreationOnly: true,
    paymentStatusCheck: true,
    bookingWithPayment: true,
    paymentDataStorage: true
  },
  frontend: {
    paymentSuccessPageLoad: true,
    paymentSuccessWithDetails: true,
    paymentSuccessPopup: true,
    navigationAfterSuccess: true,
    paymentSuccessWithBooking: true
  }
};

// Test runner class
class ComprehensivePaymentSuccessTestRunner {
  constructor(config = TEST_CONFIG) {
    this.config = config;
    this.backendResults = [];
    this.frontendResults = [];
    this.startTime = null;
    this.endTime = null;
  }

  /**
   * Run all tests (backend and frontend)
   */
  async runAllTests() {
    console.log('🧪 Comprehensive Payment Success Test Suite');
    console.log('============================================\n');
    
    this.startTime = new Date();
    
    try {
      // Run backend tests
      if (this.config.backend.enabled) {
        await this.runBackendTests();
      }
      
      // Run frontend tests
      if (this.config.frontend.enabled) {
        await this.runFrontendTests();
      }
      
      this.endTime = new Date();
      this.generateReport();
      
    } catch (error) {
      console.error('❌ Test suite execution failed:', error);
      throw error;
    }
  }

  /**
   * Run backend tests
   */
  async runBackendTests() {
    console.log('🔧 Backend Payment Success Tests');
    console.log('================================\n');
    
    // Check server health
    const serverHealthy = await checkServerHealth();
    if (!serverHealthy) {
      console.log('❌ Backend tests skipped - server not available\n');
      return;
    }
    
    // Run backend test scenarios
    const backendRunner = new PaymentSuccessTestRunner();
    await backendRunner.runAllTests();
    
    this.backendResults = backendRunner.results;
  }

  /**
   * Run frontend tests
   */
  async runFrontendTests() {
    console.log('🌐 Frontend Payment Success Tests');
    console.log('=================================\n');
    
    // Check frontend health
    const frontendHealthy = await checkFrontendHealth();
    if (!frontendHealthy) {
      console.log('❌ Frontend tests skipped - frontend not available\n');
      return;
    }
    
    // Run frontend test scenarios
    const frontendRunner = new FrontendPaymentSuccessTestRunner();
    await frontendRunner.runAllTests();
    
    this.frontendResults = frontendRunner.results;
  }

  /**
   * Generate comprehensive test report
   */
  generateReport() {
    console.log('\n📊 Comprehensive Test Report');
    console.log('============================\n');
    
    const duration = this.endTime - this.startTime;
    const totalBackendScenarios = this.backendResults.length;
    const totalFrontendScenarios = this.frontendResults.length;
    const passedBackendScenarios = this.backendResults.filter(r => r.success).length;
    const passedFrontendScenarios = this.frontendResults.filter(r => r.success).length;
    
    console.log(`⏱️  Test Duration: ${(duration / 1000).toFixed(2)} seconds`);
    console.log(`🔧 Backend Scenarios: ${passedBackendScenarios}/${totalBackendScenarios} passed`);
    console.log(`🌐 Frontend Scenarios: ${passedFrontendScenarios}/${totalFrontendScenarios} passed`);
    
    const totalScenarios = totalBackendScenarios + totalFrontendScenarios;
    const totalPassed = passedBackendScenarios + passedFrontendScenarios;
    const successRate = totalScenarios > 0 ? (totalPassed / totalScenarios) * 100 : 0;
    
    console.log(`📈 Overall Success Rate: ${successRate.toFixed(1)}%\n`);
    
    // Backend test details
    if (totalBackendScenarios > 0) {
      console.log('🔧 Backend Test Details:');
      this.backendResults.forEach(result => {
        const status = result.success ? '✅' : '❌';
        console.log(`   ${status} ${result.scenarioName}`);
      });
      console.log('');
    }
    
    // Frontend test details
    if (totalFrontendScenarios > 0) {
      console.log('🌐 Frontend Test Details:');
      this.frontendResults.forEach(result => {
        const status = result.success ? '✅' : '❌';
        console.log(`   ${status} ${result.scenarioName}`);
      });
      console.log('');
    }
    
    // Failed scenarios summary
    const failedBackend = this.backendResults.filter(r => !r.success);
    const failedFrontend = this.frontendResults.filter(r => !r.success);
    
    if (failedBackend.length > 0 || failedFrontend.length > 0) {
      console.log('❌ Failed Scenarios:');
      
      failedBackend.forEach(result => {
        console.log(`   🔧 ${result.scenarioName} (${result.scenarioKey})`);
      });
      
      failedFrontend.forEach(result => {
        console.log(`   🌐 ${result.scenarioName} (${result.scenarioKey})`);
      });
      console.log('');
    }
    
    // Save results if configured
    if (this.config.reporting.saveResults) {
      this.saveResults();
    }
  }

  /**
   * Save test results to file
   */
  saveResults() {
    const fs = require('fs');
    const path = require('path');
    
    const results = {
      timestamp: new Date().toISOString(),
      duration: this.endTime - this.startTime,
      config: this.config,
      backend: {
        total: this.backendResults.length,
        passed: this.backendResults.filter(r => r.success).length,
        results: this.backendResults
      },
      frontend: {
        total: this.frontendResults.length,
        passed: this.frontendResults.filter(r => r.success).length,
        results: this.frontendResults
      }
    };
    
    const outputPath = path.join(__dirname, this.config.reporting.outputFile);
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
    
    console.log(`💾 Test results saved to: ${outputPath}`);
  }

  /**
   * Run specific test scenarios
   */
  async runSpecificScenarios(scenarios) {
    console.log('🎯 Running Specific Test Scenarios');
    console.log('==================================\n');
    
    this.startTime = new Date();
    
    try {
      for (const scenario of scenarios) {
        await this.runScenario(scenario);
      }
      
      this.endTime = new Date();
      this.generateReport();
      
    } catch (error) {
      console.error('❌ Specific scenario execution failed:', error);
      throw error;
    }
  }

  /**
   * Run a specific test scenario
   */
  async runScenario(scenario) {
    console.log(`🎯 Running Scenario: ${scenario.name}`);
    
    if (scenario.type === 'backend') {
      const backendRunner = new PaymentSuccessTestRunner();
      await backendRunner.runScenario(scenario.key, scenario.data);
      this.backendResults.push(backendRunner.results[0]);
    } else if (scenario.type === 'frontend') {
      const frontendRunner = new FrontendPaymentSuccessTestRunner();
      await frontendRunner.runScenario(scenario.key, scenario.data);
      this.frontendResults.push(frontendRunner.results[0]);
    }
  }
}

// Mock data generator for comprehensive testing
class ComprehensiveMockDataGenerator {
  static generateCompletePaymentFlow() {
    const orderId = `CARLA_COMPREHENSIVE_${Date.now()}`;
    const paymentId = `PAY_COMPREHENSIVE_${Date.now()}`;
    
    return {
      payment: {
        orderId,
        amount: Math.floor(Math.random() * 500) + 50,
        currency: 'QAR',
        customerName: `Comprehensive Test Customer ${Date.now()}`,
        customerEmail: `comprehensive.test.${Date.now()}@example.com`,
        customerPhone: `+97450${Math.floor(Math.random() * 900000) + 100000}`,
        description: 'Comprehensive test payment'
      },
      booking: {
        customerName: `Comprehensive Test Customer ${Date.now()}`,
        customerEmail: `comprehensive.test.${Date.now()}@example.com`,
        customerPhone: `+97450${Math.floor(Math.random() * 900000) + 100000}`,
        address: `Comprehensive Test Address ${Date.now()}, Doha, Qatar`,
        serviceType: 'comprehensive_cleaning',
        cleaners: Math.floor(Math.random() * 3) + 1,
        hours: Math.floor(Math.random() * 4) + 1,
        materials: Math.random() > 0.5,
        total: Math.floor(Math.random() * 500) + 50,
        paymentOrderId: paymentId,
        paymentStatus: 'completed',
        isPaid: true,
        scheduledDate: new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        scheduledTime: `${Math.floor(Math.random() * 12) + 8}:${Math.floor(Math.random() * 4) * 15}`
      }
    };
  }
}

// Command line interface
function parseArguments() {
  const args = process.argv.slice(2);
  const options = {
    backend: true,
    frontend: true,
    specific: null,
    headless: false,
    detailed: true,
    saveResults: true
  };
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    switch (arg) {
      case '--backend-only':
        options.frontend = false;
        break;
      case '--frontend-only':
        options.backend = false;
        break;
      case '--headless':
        options.headless = true;
        break;
      case '--no-details':
        options.detailed = false;
        break;
      case '--no-save':
        options.saveResults = false;
        break;
      case '--specific':
        if (i + 1 < args.length) {
          options.specific = args[i + 1].split(',');
          i++;
        }
        break;
      case '--help':
        printHelp();
        process.exit(0);
        break;
    }
  }
  
  return options;
}

function printHelp() {
  console.log(`
🧪 Payment Success Test Suite - Help
====================================

Usage: node run-payment-success-tests.js [options]

Options:
  --backend-only        Run only backend tests
  --frontend-only       Run only frontend tests
  --headless           Run frontend tests in headless mode
  --no-details         Disable detailed output
  --no-save            Don't save results to file
  --specific <scenarios> Run specific scenarios (comma-separated)
  --help               Show this help message

Examples:
  node run-payment-success-tests.js
  node run-payment-success-tests.js --backend-only
  node run-payment-success-tests.js --frontend-only --headless
  node run-payment-success-tests.js --specific completePaymentFlow,paymentSuccessPageLoad

Prerequisites:
  - Backend server running on http://localhost:4000
  - Frontend server running on http://localhost:4200
  - Node.js and npm installed
  - Puppeteer installed for frontend tests
`);
}

// Main execution
async function main() {
  const options = parseArguments();
  
  // Update configuration based on command line options
  const config = {
    ...TEST_CONFIG,
    backend: { ...TEST_CONFIG.backend, enabled: options.backend },
    frontend: { 
      ...TEST_CONFIG.frontend, 
      enabled: options.frontend,
      headless: options.headless 
    },
    reporting: {
      ...TEST_CONFIG.reporting,
      detailed: options.detailed,
      saveResults: options.saveResults
    }
  };
  
  const testRunner = new ComprehensivePaymentSuccessTestRunner(config);
  
  if (options.specific) {
    // Run specific scenarios
    const scenarios = options.specific.map(scenarioKey => ({
      key: scenarioKey,
      name: `Specific Scenario: ${scenarioKey}`,
      type: 'backend' // Default to backend, could be enhanced to detect
    }));
    
    await testRunner.runSpecificScenarios(scenarios);
  } else {
    // Run all tests
    await testRunner.runAllTests();
  }
}

// Export for use in other files
module.exports = {
  ComprehensivePaymentSuccessTestRunner,
  ComprehensiveMockDataGenerator,
  TEST_CONFIG,
  SCENARIO_CONFIG
};

// Run if this file is executed directly
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Test suite execution failed:', error);
    process.exit(1);
  });
} 