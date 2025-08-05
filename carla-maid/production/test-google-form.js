const axios = require('axios');
const FormData = require('form-data');

// Test configuration - Update these with your actual values
const testConfig = {
  formUrl: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse',
  formFields: {
    customerName: 'entry.1234567890',
    customerEmail: 'entry.1234567891',
    customerPhone: 'entry.1234567892',
    address: 'entry.1234567893',
    serviceType: 'entry.1234567894',
    cleaners: 'entry.1234567895',
    hours: 'entry.1234567896',
    materials: 'entry.1234567897',
    total: 'entry.1234567898',
    paymentMethod: 'entry.1234567899',
    isPaid: 'entry.1234567900',
    paymentStatus: 'entry.1234567901',
    paymentOrderId: 'entry.1234567902',
    scheduledDate: 'entry.1234567903',
    scheduledTime: 'entry.1234567904',
    bookingId: 'entry.1234567905',
    submissionDate: 'entry.1234567906'
  }
};

// Test data
const testBookingData = {
  customerName: 'Test Customer',
  customerEmail: 'test@example.com',
  customerPhone: '+974 1234 5678',
  address: 'Test Address, Doha, Qatar',
  serviceType: 'cleaning',
  cleaners: 2,
  hours: 3,
  materials: true,
  total: 150.00,
  paymentMethod: 'skipcash',
  isPaid: true,
  paymentStatus: 'completed',
  paymentOrderId: 'TEST_PAYMENT_123',
  scheduledDate: '2024-01-15',
  scheduledTime: '10:00 AM',
  bookingId: 'TEST_BOOKING_123',
  submissionDate: new Date().toISOString()
};

async function testGoogleFormSubmission() {
  console.log('Testing Google Form submission...');
  console.log('Form URL:', testConfig.formUrl);
  console.log('Test Data:', JSON.stringify(testBookingData, null, 2));

  try {
    // Create form data
    const formData = new FormData();
    
    // Add form fields
    formData.append(testConfig.formFields.customerName, testBookingData.customerName);
    formData.append(testConfig.formFields.customerEmail, testBookingData.customerEmail);
    formData.append(testConfig.formFields.customerPhone, testBookingData.customerPhone);
    formData.append(testConfig.formFields.address, testBookingData.address);
    formData.append(testConfig.formFields.serviceType, testBookingData.serviceType);
    formData.append(testConfig.formFields.cleaners, testBookingData.cleaners.toString());
    formData.append(testConfig.formFields.hours, testBookingData.hours.toString());
    formData.append(testConfig.formFields.materials, testBookingData.materials ? 'Yes' : 'No');
    formData.append(testConfig.formFields.total, testBookingData.total.toString());
    formData.append(testConfig.formFields.paymentMethod, testBookingData.paymentMethod);
    formData.append(testConfig.formFields.isPaid, testBookingData.isPaid ? 'Yes' : 'No');
    formData.append(testConfig.formFields.paymentStatus, testBookingData.paymentStatus);
    formData.append(testConfig.formFields.paymentOrderId, testBookingData.paymentOrderId);
    formData.append(testConfig.formFields.scheduledDate, testBookingData.scheduledDate);
    formData.append(testConfig.formFields.scheduledTime, testBookingData.scheduledTime);
    formData.append(testConfig.formFields.bookingId, testBookingData.bookingId);
    formData.append(testConfig.formFields.submissionDate, testBookingData.submissionDate);

    // Submit to Google Form
    const response = await axios.post(testConfig.formUrl, formData, {
      headers: {
        ...formData.getHeaders(),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      timeout: 10000
    });

    console.log('✅ Google Form submission successful!');
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    
    // Note: Google Forms always returns 200 even if there's an error
    // Check your Google Form responses to verify data was received
    
  } catch (error) {
    console.error('❌ Google Form submission failed:');
    console.error('Error:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
}

// Test backend API endpoint
async function testBackendEndpoint() {
  console.log('\nTesting backend Google Form endpoint...');
  
  try {
    const response = await axios.post('http://localhost:4000/api/google-form/submit-booking', testBookingData, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 10000
    });

    console.log('✅ Backend endpoint test successful!');
    console.log('Response:', response.data);
    
  } catch (error) {
    console.error('❌ Backend endpoint test failed:');
    console.error('Error:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
}

// Run tests
async function runTests() {
  console.log('🚀 Starting Google Form Integration Tests\n');
  
  // Test direct Google Form submission
  await testGoogleFormSubmission();
  
  // Test backend endpoint
  await testBackendEndpoint();
  
  console.log('\n📋 Test Summary:');
  console.log('1. Check your Google Form responses to verify data was received');
  console.log('2. If using backend endpoint, check server logs for any errors');
  console.log('3. Update field IDs in the configuration if needed');
}

// Check if running directly
if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = { testGoogleFormSubmission, testBackendEndpoint }; 