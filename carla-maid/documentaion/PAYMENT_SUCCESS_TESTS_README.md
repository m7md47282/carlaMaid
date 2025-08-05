# Payment Success Test Suite

Comprehensive test suite for Carla Maid payment success scenarios, covering both backend API testing and frontend component testing.

## 🎯 Overview

This test suite provides comprehensive mocking and testing capabilities for payment success scenarios in the Carla Maid application. It includes:

- **Backend API Testing**: Tests all payment-related endpoints
- **Frontend Component Testing**: Tests payment success pages and components
- **Mock Data Generation**: Generates realistic test data
- **Comprehensive Reporting**: Detailed test results and analytics

## 📋 Prerequisites

Before running the tests, ensure you have:

1. **Node.js** (version 16 or higher)
2. **npm** (version 8 or higher)
3. **Backend server** running on `http://localhost:4000`
4. **Frontend server** running on `http://localhost:4200`

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Navigate to the production directory
cd carla-maid/production

# Install test dependencies
npm install axios puppeteer
```

### 2. Start Your Servers

```bash
# Start backend server (in one terminal)
node standalone-server.js

# Start frontend server (in another terminal)
cd ../
ng serve
```

### 3. Run All Tests

```bash
# Run complete test suite
node run-payment-success-tests.js
```

## 📊 Test Scenarios

### Backend Test Scenarios

1. **Complete Payment Flow** (`completePaymentFlow`)
   - Creates payment
   - Checks payment status
   - Stores payment data
   - Creates booking with payment

2. **Payment Creation Only** (`paymentCreationOnly`)
   - Tests payment creation endpoint
   - Validates response structure

3. **Payment Status Check** (`paymentStatusCheck`)
   - Tests payment status verification
   - Validates status response

4. **Booking with Payment** (`bookingWithPayment`)
   - Tests booking creation with payment data
   - Validates booking response

5. **Payment Data Storage** (`paymentDataStorage`)
   - Tests payment data storage and retrieval
   - Validates data persistence

### Frontend Test Scenarios

1. **Payment Success Page Load** (`paymentSuccessPageLoad`)
   - Tests payment success page rendering
   - Validates UI components

2. **Payment Success with Details** (`paymentSuccessWithDetails`)
   - Tests payment details display
   - Validates order information

3. **Payment Success Popup** (`paymentSuccessPopup`)
   - Tests popup component functionality
   - Validates user interactions

4. **Navigation After Success** (`navigationAfterSuccess`)
   - Tests navigation buttons
   - Validates user flow

5. **Payment Success with Booking** (`paymentSuccessWithBooking`)
   - Tests complete booking flow
   - Validates booking creation

## 🛠️ Usage Options

### Run All Tests
```bash
node run-payment-success-tests.js
```

### Run Backend Tests Only
```bash
node run-payment-success-tests.js --backend-only
```

### Run Frontend Tests Only
```bash
node run-payment-success-tests.js --frontend-only
```

### Run Tests in Headless Mode
```bash
node run-payment-success-tests.js --headless
```

### Run Quick Tests (No Details, No Save)
```bash
node run-payment-success-tests.js --quick
```

### Run Specific Scenarios
```bash
node run-payment-success-tests.js --specific completePaymentFlow,paymentSuccessPageLoad
```

### Run Individual Test Files
```bash
# Backend tests only
node test-payment-success.js

# Frontend tests only
node test-payment-success-frontend.js
```

## 📁 File Structure

```
production/
├── run-payment-success-tests.js          # Main test runner
├── test-payment-success.js               # Backend tests
├── test-payment-success-frontend.js      # Frontend tests
├── package.test.json                     # Test dependencies
├── PAYMENT_SUCCESS_TESTS_README.md       # This file
└── payment-success-test-results.json     # Generated test results
```

## 🔧 Configuration

### Test Configuration

The test suite can be configured by modifying the `TEST_CONFIG` object in `run-payment-success-tests.js`:

```javascript
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
    headless: false
  },
  reporting: {
    detailed: true,
    saveResults: true,
    outputFile: 'payment-success-test-results.json'
  }
};
```

### Mock Data Configuration

Mock data can be customized in the test files:

- `test-payment-success.js`: Backend mock data
- `test-payment-success-frontend.js`: Frontend mock data

## 📈 Test Results

### Console Output

The test suite provides detailed console output including:

- Test progress indicators
- Success/failure status
- Error messages
- Performance metrics
- Summary statistics

### JSON Report

When `saveResults` is enabled, a JSON report is generated with:

- Timestamp and duration
- Configuration used
- Backend test results
- Frontend test results
- Success rates
- Detailed error information

### Example Output

```
🧪 Comprehensive Payment Success Test Suite
============================================

🔧 Backend Payment Success Tests
================================

📋 Running Scenario: Complete Payment Flow Test
   Key: completePaymentFlow
   Steps: 4

   🔄 Step 1: Create Payment
      ✅ Step 1 passed
   🔄 Step 2: Check Payment Status
      ✅ Step 2 passed
   🔄 Step 3: Store Payment Data
      ✅ Step 3 passed
   🔄 Step 4: Create Booking with Payment
      ✅ Step 4 passed

   ✅ Scenario PASSED

📊 Comprehensive Test Report
============================

⏱️  Test Duration: 12.34 seconds
🔧 Backend Scenarios: 5/5 passed
🌐 Frontend Scenarios: 5/5 passed
📈 Overall Success Rate: 100.0%
```

## 🐛 Troubleshooting

### Common Issues

1. **Server Not Running**
   ```
   ❌ Server is not running or not accessible
   Please start the server with: node standalone-server.js
   ```
   **Solution**: Start the backend server on port 4000

2. **Frontend Not Accessible**
   ```
   ❌ Frontend is not accessible
   Please start the Angular dev server with: ng serve
   ```
   **Solution**: Start the Angular development server on port 4200

3. **Puppeteer Installation Issues**
   ```
   Error: Cannot find module 'puppeteer'
   ```
   **Solution**: Install puppeteer with `npm install puppeteer`

4. **Timeout Errors**
   ```
   ❌ Step failed: timeout
   ```
   **Solution**: Increase timeout values in configuration or check server performance

### Debug Mode

For debugging, you can run tests with more verbose output:

```bash
# Enable detailed logging
DEBUG=* node run-payment-success-tests.js
```

### Manual Testing

For manual verification, you can test individual endpoints:

```bash
# Test backend health
curl http://localhost:4000/api/health

# Test payment creation
curl -X POST http://localhost:4000/api/skipcash/payment/create \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 150.00,
    "currency": "QAR",
    "customerName": "Test Customer",
    "customerEmail": "test@example.com",
    "customerPhone": "+97450123456",
    "description": "Test payment",
    "returnUrl": "http://localhost:4200/payment/success",
    "cancelUrl": "http://localhost:4200/payment/cancel"
  }'
```

## 🔄 Continuous Integration

### GitHub Actions Example

```yaml
name: Payment Success Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: |
        cd carla-maid/production
        npm install axios puppeteer
        
    - name: Start backend server
      run: |
        cd carla-maid/production
        node standalone-server.js &
        sleep 10
        
    - name: Start frontend server
      run: |
        cd carla-maid
        npm install
        ng serve &
        sleep 30
        
    - name: Run tests
      run: |
        cd carla-maid/production
        node run-payment-success-tests.js --headless
        
    - name: Upload test results
      uses: actions/upload-artifact@v3
      with:
        name: test-results
        path: carla-maid/production/payment-success-test-results.json
```

## 📝 Customization

### Adding New Test Scenarios

1. **Backend Tests**: Add to `TEST_SCENARIOS` in `test-payment-success.js`
2. **Frontend Tests**: Add to `FRONTEND_TEST_SCENARIOS` in `test-payment-success-frontend.js`

### Custom Mock Data

Extend the `MockDataGenerator` classes to create custom test data:

```javascript
// In test-payment-success.js
class MockDataGenerator {
  static generateCustomPaymentRequest() {
    return {
      amount: 250.00,
      currency: 'QAR',
      customerName: 'Custom Test Customer',
      customerEmail: 'custom.test@example.com',
      // ... other fields
    };
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add your test scenarios
4. Run the test suite
5. Submit a pull request

## 📄 License

This test suite is licensed under the MIT License.

## 🆘 Support

For issues and questions:

1. Check the troubleshooting section
2. Review the test logs
3. Create an issue in the repository
4. Contact the development team

---

**Happy Testing! 🧪✨** 