#!/usr/bin/env node

const { PaymentSuccessTestRunner, MockDataGenerator, checkServerHealth } = require('./test-payment-success');

// Backend-only test configuration
const BACKEND_TEST_CONFIG = {
  baseUrl: 'http://localhost:4000',
  enabled: true,
  timeout: 30000
};

// Test runner class for backend-only tests
class BackendOnlyTestRunner {
  constructor() {
    this.results = [];
    this.startTime = null;
    this.endTime = null;
  }

  /**
   * Run all backend tests
   */
  async runAllTests() {
    console.log('🧪 Backend Payment Success Tests');
    console.log('==================================\n');
    
    this.startTime = new Date();
    
    try {
      await this.runBackendTests();
      this.endTime = new Date();
      this.generateReport();
    } catch (error) {
      console.error('❌ Backend test execution failed:', error);
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
    
    this.results = backendRunner.results;
  }

  /**
   * Generate test report
   */
  generateReport() {
    console.log('\n📊 Backend Test Report');
    console.log('=======================\n');
    
    const duration = this.endTime - this.startTime;
    const totalScenarios = this.results.length;
    const passedScenarios = this.results.filter(r => r.success).length;
    const failedScenarios = totalScenarios - passedScenarios;
    
    console.log(`⏱️  Test Duration: ${(duration / 1000).toFixed(2)} seconds`);
    console.log(`🔧 Backend Scenarios: ${passedScenarios}/${totalScenarios} passed`);
    
    const successRate = totalScenarios > 0 ? (passedScenarios / totalScenarios) * 100 : 0;
    console.log(`📈 Success Rate: ${successRate.toFixed(1)}%\n`);
    
    // Backend test details
    if (totalScenarios > 0) {
      console.log('🔧 Backend Test Details:');
      this.results.forEach(result => {
        const status = result.success ? '✅' : '❌';
        console.log(`   ${status} ${result.scenarioName}`);
      });
      console.log('');
    }
    
    // Failed scenarios summary
    const failedBackend = this.results.filter(r => !r.success);
    
    if (failedBackend.length > 0) {
      console.log('❌ Failed Scenarios:');
      failedBackend.forEach(result => {
        console.log(`   🔧 ${result.scenarioName} (${result.scenarioKey})`);
      });
      console.log('');
    }
    
    if (passedScenarios > 0) {
      console.log('✅ Passed Scenarios:');
      this.results.filter(r => r.success).forEach(result => {
        console.log(`   🔧 ${result.scenarioName} (${result.scenarioKey})`);
      });
      console.log('');
    }
  }

  /**
   * Run specific backend scenarios
   */
  async runSpecificScenarios(scenarios) {
    console.log('🎯 Running Specific Backend Scenarios');
    console.log('=====================================\n');
    
    this.startTime = new Date();
    
    try {
      const backendRunner = new PaymentSuccessTestRunner();
      
      for (const scenario of scenarios) {
        await backendRunner.runScenario(scenario.key, scenario.data);
        this.results.push(backendRunner.results[backendRunner.results.length - 1]);
      }
      
      this.endTime = new Date();
      this.generateReport();
      
    } catch (error) {
      console.error('❌ Specific scenario execution failed:', error);
      throw error;
    }
  }
}

// Command line interface
function parseArguments() {
  const args = process.argv.slice(2);
  const options = {
    specific: null,
    detailed: true
  };
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    switch (arg) {
      case '--specific':
        if (i + 1 < args.length) {
          options.specific = args[i + 1].split(',');
          i++;
        }
        break;
      case '--no-details':
        options.detailed = false;
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
🧪 Backend Payment Success Tests - Help
========================================

Usage: node run-backend-tests-only.js [options]

Options:
  --specific <scenarios> Run specific scenarios (comma-separated)
  --no-details         Disable detailed output
  --help               Show this help message

Examples:
  node run-backend-tests-only.js
  node run-backend-tests-only.js --specific completePaymentFlow,paymentCreationOnly

Prerequisites:
  - Backend server running on http://localhost:4000
  - Node.js and npm installed
  - axios installed
`);
}

// Main execution
async function main() {
  const options = parseArguments();
  
  const testRunner = new BackendOnlyTestRunner();
  
  if (options.specific) {
    // Run specific scenarios
    const scenarios = options.specific.map(scenarioKey => ({
      key: scenarioKey,
      name: `Specific Scenario: ${scenarioKey}`,
      type: 'backend'
    }));
    
    await testRunner.runSpecificScenarios(scenarios);
  } else {
    // Run all backend tests
    await testRunner.runAllTests();
  }
}

// Export for use in other files
module.exports = {
  BackendOnlyTestRunner,
  BACKEND_TEST_CONFIG
};

// Run if this file is executed directly
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Backend test execution failed:', error);
    process.exit(1);
  });
} 