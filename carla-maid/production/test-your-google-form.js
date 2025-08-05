const axios = require('axios');
const FormData = require('form-data');

// Your Google Form configuration
const testConfig = {
  formUrl: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeouZn9dc038aSnDj40SGjGz2uWEbPqV17SAvUHqaW4483yew/formResponse',
  formFields: {
    orderId: 'entry.1011936317',
    paymentId: 'entry.358076297',
    isPaid: 'entry.166685531',
    address: 'entry.1609292890',
    customerName: 'entry.1390915916',
    customerEmail: 'entry.1883668962',
    customerPhone: 'entry.994665389',
    scheduledDate: 'entry.2055873333',
    scheduledTime: 'entry.1510790817',
    hours: 'entry.1482962453',
    materials: 'entry.1942996151',
    cleaners: 'entry.1410396487',
    // Additional fields for Google Form requirements
    dlut: 'dlut',
    fvv: 'fvv',
    partialResponse: 'partialResponse',
    pageHistory: 'pageHistory',
    fbzx: 'fbzx',
    submissionTimestamp: 'submissionTimestamp'
  }
};

// Test data matching your form structure
const testBookingData = {
  orderId: 'TEST_BOOKING_123',
  paymentId: 'TEST_PAYMENT_456',
  isPaid: true,
  address: 'Test Address, Doha, Qatar',
  customerName: 'Test Customer',
  customerEmail: 'test@example.com',
  customerPhone: '+974 1234 5678',
  scheduledDate: '2024-01-15',
  scheduledTime: '10:00 AM',
  hours: 3,
  materials: true,
  cleaners: 2,
  submissionDate: new Date().toISOString()
};

async function testYourGoogleFormSubmission() {
  console.log('Testing your Google Form submission...');
  console.log('Form URL:', testConfig.formUrl);
  console.log('Test Data:', JSON.stringify(testBookingData, null, 2));

  try {
    // Create form data
    const formData = new FormData();
    
    // Add form fields based on your Google Form structure
    formData.append(testConfig.formFields.orderId, testBookingData.orderId);
    formData.append(testConfig.formFields.paymentId, testBookingData.paymentId);
    formData.append(testConfig.formFields.isPaid, testBookingData.isPaid ? 'true' : 'false');
    formData.append(testConfig.formFields.address, testBookingData.address);
    formData.append(testConfig.formFields.customerName, testBookingData.customerName);
    formData.append(testConfig.formFields.customerEmail, testBookingData.customerEmail);
    formData.append(testConfig.formFields.customerPhone, testBookingData.customerPhone);
    formData.append(testConfig.formFields.scheduledDate, testBookingData.scheduledDate);
    formData.append(testConfig.formFields.scheduledTime, testBookingData.scheduledTime);
    formData.append(testConfig.formFields.hours, testBookingData.hours.toString());
    formData.append(testConfig.formFields.materials, testBookingData.materials ? 'has materials' : 'no materials');
    formData.append(testConfig.formFields.cleaners, testBookingData.cleaners.toString());
    
    // Add minimal required Google Form fields
    formData.append('fvv', '1');
    formData.append('pageHistory', '0');

    // Submit to Google Form with minimal headers
    const response = await axios.post(testConfig.formUrl, formData, {
      headers: {
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

// Test backend API endpoint with your form structure
async function testBackendEndpoint() {
  console.log('\nTesting backend Google Form endpoint with your form structure...');
  
  try {
    const testData = {
      orderId: 'TEST_BOOKING_123',
      paymentId: 'TEST_PAYMENT_456',
      isPaid: true,
      address: 'Test Address, Doha, Qatar',
      customerName: 'Test Customer',
      customerEmail: 'test@example.com',
      customerPhone: '+974 1234 5678',
      scheduledDate: '2024-01-15',
      scheduledTime: '10:00 AM',
      hours: 3,
      materials: true,
      cleaners: 2,
      submissionDate: new Date().toISOString()
    };

    const response = await axios.post('http://localhost:4000/api/google-form/submit-booking', testData, {
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

// Test booking creation with Google Form integration
async function testBookingCreation() {
  console.log('\nTesting booking creation with Google Form integration...');
  
  try {
    const bookingData = {
      customer_name: 'Test Customer',
      customer_email: 'test@example.com',
      customer_phone: '+974 1234 5678',
      address: 'Test Address, Doha, Qatar',
      service_type: 'cleaning',
      cleaners: 2,
      hours: 3,
      materials: true,
      total: 150.00,
      payment_method: 'skipcash',
      scheduled_date: '2024-01-15',
      scheduled_time: '10:00 AM'
    };

    const response = await axios.post('http://localhost:4000/api/bookings/create', bookingData, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 10000
    });

    console.log('✅ Booking creation test successful!');
    console.log('Response:', response.data);
    
  } catch (error) {
    console.error('❌ Booking creation test failed:');
    console.error('Error:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
}

// Run tests
async function runTests() {
  console.log('🚀 Starting Your Google Form Integration Tests\n');
  
  // Test direct Google Form submission
  await testYourGoogleFormSubmission();
  
  // Test backend endpoint
  await testBackendEndpoint();
  
  // Test booking creation
  await testBookingCreation();
  
  console.log('\n📋 Test Summary:');
  console.log('1. Check your Google Form responses to verify data was received');
  console.log('2. If using backend endpoint, check server logs for any errors');
  console.log('3. Verify that all field mappings match your form structure');
  console.log('4. Test with real booking data through your application');
}

// Check if running directly
if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = { testYourGoogleFormSubmission, testBackendEndpoint, testBookingCreation }; 