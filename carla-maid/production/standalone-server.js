const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const FormData = require('form-data');

// Create Express app
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// SkipCash Configuration
const skipCashConfig = {
  production: {
    apiUrl: 'https://api.skipcash.app',
    clientId: '7242ee4f-ca43-44bb-804c-4f0c621bb54d',
    apiKey: '2ce8c700-f8e6-4cc5-b59a-0069f368815d',
    secretKey: 'fsrj/XE5skmcrfaG4Yqoc07VGuiHBWO7eCMfs6s7uEyumBOnVvhGhK8UTaViZ9v4U8dkaVtUMKpTfH21Dr7VQfVu3qWkiJ5UIuXRT9mGtoRbofYA/KsL7WNbEqNvcW313azXw+vqF1PyJclrjC5H2vfrDUetRTvGtyIAUZ0l6zV46pdZ9rl7S4gxAomvHesvVdPe6AMcON5/OiCY69K2YWhyLcoOdULYZ2FUvK4+lLadaH0yu4e5r/geLRwsX4I5ZMhqcZrSvbke76V1NtNnbO3tsPfrXsLiHGCLxilb3wrLpVg60zvPNXM6tsQvTZ7+T8Irn89kxkq/G328HjCNPAM9BZQIjMloMt0QgGzXGJMzMZ4dbUOzGhq0wZseKiMfN/RSld48SzCoF1Wy/C5M310wy+05OhNOkyXxfFnhOlKHjAT+3bfhKw9h+ACw9gaEpRL3tCjq9z6hbH8LELeQ3i7NEtB5XAGY+J2kVFdj/bPzdge/cwusfvUWUgokG+TGz0y0vWYNbCfRZE28H8975A==',
    webhookKey: '43ef9131-140e-4871-8586-94b8f69f32b2'
  },
  sandbox: {
    apiUrl: 'https://skipcashtest.azurewebsites.net',
    clientId: '3d8fecfa-f2c0-4fc8-a913-91634b306eec',
    apiKey: '288d604d-03b6-4c66-821e-0a82a3fd2cc8',
    secretKey: 'Og9vDBQbBFHg/dwxkQjFCcLYogMDq4hLOF0OPsuRDY+OrLp/BPWMoCvsf1EDW41N8QTqoJHFhpclF/+bMR8Gwjyy2n0ZBNKuk8TO6LSpA2+JTWRM3ODl3LuX1nSFHRVnHJ1h0+ojevQqA8U/FzgCu88S+HhdZ1zq1GeWvka9MM8y8arkLwo0oLCf4IPAcH6olU8EKWrgcIymL6spNmRYRqfiLEzFWIQAjNJa2PH/spkK8c0brTae9jzbSf7yw6DO6NV51dbC5Td+BqWEjOmDphtQ3XSfqaj5fIjkGjjd58tnP6uQELF08Q5uZqGno8fWxZi+B6Wz9Z6Zr3y7cr19VTpRA2+RGOSVNzdaMnc7EL6ryFxmXUg+dSU37gBffAzn8fAIe2KJJdGnsSUkM8Z82E6Yj2KPi/Tw/wrYZMwuXNROwlIilIt9tds8PCdlFgPD1wiH8q9om/kIcarLuoVXn71nF65BT3/PhAOEhKyrxLaiqwZg+8xZdbCHzFQNYefcYuDRzflWzPRp3oWX1L9bPw==',
    webhookKey: 'a269aaab-8381-4b63-8c83-f1e612494183'
  },
  isTestMode: true
};

const currentConfig = skipCashConfig.isTestMode ? skipCashConfig.sandbox : skipCashConfig.production;

// Google Form Configuration
const googleFormConfig = {
  formUrl: process.env.GOOGLE_FORM_URL || 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeouZn9dc038aSnDj40SGjGz2uWEbPqV17SAvUHqaW4483yew/formResponse',
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

// SkipCash API Routes - Production endpoints only

app.get('/api/skipcash/health', async (req, res) => {
  try {
    const testResponse = await axios.get(currentConfig.apiUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 5000
    });
    
    return res.json({ 
      success: true, 
      message: 'SkipCash API is accessible',
      mode: skipCashConfig.isTestMode ? 'sandbox' : 'production'
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      error: 'SkipCash API is not accessible',
      mode: skipCashConfig.isTestMode ? 'sandbox' : 'production'
    });
  }
});

app.post('/api/skipcash/webhook', async (req, res) => {
  try {
    console.log('Received webhook data:', req.body);
    const callbackData = req.body;

    // Verify the callback signature
    const isValidSignature = verifyCallbackSignature(callbackData, skipCashConfig.secretKey);
    if (!isValidSignature) {
      return res.status(400).json({
        success: false,
        error: 'Invalid signature'
      });
    }

    // Process the callback data
    console.log('Received valid webhook data:', callbackData);

    // Respond with success
    return res.json({
      success: true,
      message: 'Webhook processed successfully'
    });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to process webhook'
    });
  }
});

// Create payment endpoint
app.post('/api/skipcash/payment/create', async (req, res) => {
  try {
    const {
      amount,
      currency = 'QAR',
      customerName,
      customerEmail,
      customerPhone,
      description,
      returnUrl,
      cancelUrl,
      orderId
    } = req.body;

    // Validate required fields
    if (!amount || !customerName || !customerEmail || !returnUrl || !cancelUrl) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: amount, customerName, customerEmail, returnUrl, cancelUrl'
      });
    }

    const paymentData = {
      amount: parseFloat(amount),
      currency,
      customer_name: customerName,
      customer_email: customerEmail,
      customer_phone: customerPhone,
      description,
      return_url: returnUrl,
      cancel_url: cancelUrl,
      order_id: orderId || `CARLA_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`,
      test_mode: skipCashConfig.isTestMode
    };

    // Calculate HMAC-SHA256 signature for authorization header
    const calculateSignature = (data, secretKey) => {
      const crypto = require('crypto');
      const hmac = crypto.createHmac('sha256', secretKey);
      hmac.update(data);
      return hmac.digest('base64');
    };

    // Build signature data according to SkipCash documentation
    const buildSignatureData = (paymentData) => {
      const fields = [
        'uid', 'keyId', 'amount', 'firstName', 'lastName', 
        'phone', 'email', 'street', 'city', 'state', 
        'country', 'postalCode', 'transactionId', 'custom1'
      ];
      
      const signatureParts = [];
      for (const field of fields) {
        if (paymentData[field] && paymentData[field] !== '') {
          signatureParts.push(`${field.charAt(0).toUpperCase() + field.slice(1)}=${paymentData[field]}`);
        }
      }
      
      return signatureParts.join(',');
    };

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(paymentData.customer_email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address format. Please provide a valid email address.'
      });
    }

    // Format payment data according to SkipCash API specification
    const formattedPaymentData = {
      uid: paymentData.order_id || `CARLA_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`,
      keyId: currentConfig.apiKey,
      amount: paymentData.amount.toString(),
      firstName: paymentData.customer_name.split(' ')[0] || paymentData.customer_name,
      lastName: paymentData.customer_name.split(' ').slice(1).join(' ') || 'Customer',
      phone: paymentData.customer_phone || '',
      email: paymentData.customer_email,
      street: 'Test Street',
      city: 'Test City',
      state: 'QA',
      country: 'QA',
      postalCode: '00000',
      transactionId: paymentData.order_id,
      custom1: paymentData.description || ''
    };

    // Build signature data
    const signatureData = buildSignatureData(formattedPaymentData);

    // Calculate signature
    const signature = calculateSignature(signatureData, currentConfig.secretKey);

    // Make request to correct SkipCash endpoint
    let response = null;
    try {
      response = await axios.post(`${currentConfig.apiUrl}/api/v1/payments`, formattedPaymentData, {
        headers: {
          'Authorization': signature,
          'Content-Type': 'application/json'
        },
        timeout: 10000
      });
      
      if (response.status == 200) {
        return res.json({
          success: true,
          data: {
            paymentUrl: response.data.resultObj.payUrl,
            payUrl: response.data.resultObj.payUrl,
            id: response.data.resultObj.id,
            created: response.data.resultObj.created,
            amount: response.data.resultObj.amount,
            currency: response.data.resultObj.currency,
          }
        });
      } else {
        return res.status(400).json({
          success: false,
          error: response.data.error || 'Payment creation failed'
        });
      }

    } catch (error) {
      return res.status(error.response?.status || 500).json({
        success: false,
        error: error.response?.data?.errorMessage || error.response?.data?.error || error.message || 'Payment creation failed',
        details: {
          status: error.response?.status,
          statusText: error.response?.statusText,
          validationErrors: error.response?.data?.validationErrors,
          hasError: error.response?.data?.hasError,
          hasValidationError: error.response?.data?.hasValidationError
        },
        skipCashError: error.response?.data
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to create payment'
    });
  }
});

// Check payment status endpoint
app.get('/api/payment/status-skip-cash/:orderId', async (req, res) => {
  try {
    const { orderId } = req.params;

    if (!orderId) {
      return res.status(400).json({
        success: false,
        error: 'Order ID is required'
      });
    }

    const response = await axios.get(`${currentConfig.apiUrl}/payment/status/${orderId}`, {
      headers: {
        'Authorization': `Bearer ${currentConfig.apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.data.success) {
      return res.json({
        success: true,
        data: response.data
      });
    } else {
      return res.status(400).json({
        success: false,
        error: response.data.error || 'Failed to check payment status'
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to check payment status'
    });
  }
});

// Payment callback endpoint
app.post('/api/payment/callback', async (req, res) => {
  try {
    const callbackData = req.body;
    
    // Verify callback signature
    const isValidSignature = verifyCallbackSignature(callbackData, currentConfig.secretKey);
    
    if (!isValidSignature) {
      return res.status(400).json({
        success: false,
        error: 'Invalid callback signature'
      });
    }

    // Process the callback
    const { order_id, status, transaction_id, amount, currency } = callbackData;

    // Here you can add logic to update your database
    // For example, update order status in your database
    
    // Send success response to SkipCash
    return res.json({
      success: true,
      message: 'Callback processed successfully'
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to process callback'
    });
  }
});

// Booking endpoints
app.post('/api/bookings/create', async (req, res) => {
  try {
    const {
      customer_name,
      customer_email,
      customer_phone,
      address,
      service_type,
      cleaners,
      hours,
      materials,
      total,
      payment_method,
      scheduled_date,
      scheduled_time
    } = req.body;

    // Validate required fields
    if (!customer_name || !customer_email || !customer_phone || !address || !total) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: customer_name, customer_email, customer_phone, address, total'
      });
    }

    // Generate booking ID
    const bookingId = `CARLA_BOOKING_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`.toUpperCase();

    // Create booking object
    const booking = {
      id: bookingId,
      customerName: customer_name,
      customerEmail: customer_email,
      customerPhone: customer_phone,
      address: address,
      serviceType: service_type || 'cleaning',
      cleaners: parseInt(cleaners) || 1,
      hours: parseInt(hours) || 1,
      materials: Boolean(materials),
      total: parseFloat(total),
      paymentMethod: payment_method || 'pay_later',
      status: 'pending',
      createdAt: new Date().toISOString(),
      scheduledDate: scheduled_date,
      scheduledTime: scheduled_time
    };

    // Submit booking data to Google Form
    try {
      const googleFormData = {
        customerName: booking.customerName,
        customerEmail: booking.customerEmail,
        customerPhone: booking.customerPhone,
        address: booking.address,
        serviceType: booking.serviceType,
        cleaners: booking.cleaners,
        hours: booking.hours,
        materials: booking.materials,
        total: booking.total,
        paymentMethod: booking.paymentMethod,
        isPaid: false,
        paymentStatus: '',
        paymentOrderId: '',
        scheduledDate: booking.scheduledDate,
        scheduledTime: booking.scheduledTime,
        bookingId: booking.id,
        submissionDate: booking.createdAt
      };

      // Create form data for Google Form submission
      const formData = new FormData();
      
      // Add form fields based on your Google Form structure
      formData.append(googleFormConfig.formFields.orderId, googleFormData.bookingId);
      formData.append(googleFormConfig.formFields.paymentId, '');
      formData.append(googleFormConfig.formFields.isPaid, 'false');
      formData.append(googleFormConfig.formFields.address, googleFormData.address);
      formData.append(googleFormConfig.formFields.customerName, googleFormData.customerName);
      formData.append(googleFormConfig.formFields.customerEmail, googleFormData.customerEmail);
      formData.append(googleFormConfig.formFields.customerPhone, googleFormData.customerPhone);
      formData.append(googleFormConfig.formFields.scheduledDate, googleFormData.scheduledDate || '');
      formData.append(googleFormConfig.formFields.scheduledTime, googleFormData.scheduledTime || '');
      formData.append(googleFormConfig.formFields.hours, googleFormData.hours.toString());
      formData.append(googleFormConfig.formFields.materials, googleFormData.materials ? 'has materials' : 'no materials');
      formData.append(googleFormConfig.formFields.cleaners, googleFormData.cleaners.toString());
      
      // Add minimal required Google Form fields
      formData.append('fvv', '1');
      formData.append('pageHistory', '0');

      // Submit to Google Form with minimal headers
      let response = await axios.post(googleFormConfig.formUrl, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        timeout: 10000
      });

    } catch (formError) {
      console.error('Google Form submission error during booking creation:', formError);
      // Don't fail the booking if Google Form submission fails
    }

    return res.json({
      success: true,
      orderId: bookingId,
      order: booking,
      message: 'Booking created successfully'
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to create booking'
    });
  }
});

// Create booking with payment information
app.post('/api/bookings/create-with-payment', async (req, res) => {
  try {
    const {
      customer_name,
      customer_email,
      customer_phone,
      address,
      service_type,
      cleaners,
      hours,
      materials,
      total,
      payment_method,
      payment_order_id,
      payment_status,
      is_paid,
      scheduled_date,
      scheduled_time
    } = req.body;

    // Validate required fields
    if (!customer_name || !customer_email || !customer_phone || !address || !total) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: customer_name, customer_email, customer_phone, address, total'
      });
    }

    // Generate booking ID
    const bookingId = `CARLA_BOOKING_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`.toUpperCase();

    // Create booking object
    const booking = {
      id: bookingId,
      customerName: customer_name,
      customerEmail: customer_email,
      customerPhone: customer_phone,
      address: address,
      serviceType: service_type || 'cleaning',
      cleaners: parseInt(cleaners) || 1,
      hours: parseInt(hours) || 1,
      materials: Boolean(materials),
      total: parseFloat(total),
      paymentMethod: payment_method || 'skipcash',
      paymentOrderId: payment_order_id || '',
      paymentStatus: payment_status || '',
      isPaid: Boolean(is_paid),
      status: 'confirmed',
      createdAt: new Date().toISOString(),
      scheduledDate: scheduled_date,
      scheduledTime: scheduled_time
    };

    // Submit booking data to Google Form
    try {
      const googleFormData = {
        customerName: booking.customerName,
        customerEmail: booking.customerEmail,
        customerPhone: booking.customerPhone,
        address: booking.address,
        serviceType: booking.serviceType,
        cleaners: booking.cleaners,
        hours: booking.hours,
        materials: booking.materials,
        total: booking.total,
        paymentMethod: booking.paymentMethod,
        isPaid: booking.isPaid,
        paymentStatus: booking.paymentStatus,
        paymentOrderId: booking.paymentOrderId,
        scheduledDate: booking.scheduledDate,
        scheduledTime: booking.scheduledTime,
        bookingId: booking.id,
        submissionDate: booking.createdAt
      };

      // Create form data for Google Form submission
      const formData = new FormData();
      
      // Add form fields based on your Google Form structure
      formData.append(googleFormConfig.formFields.orderId, googleFormData.bookingId);
      formData.append(googleFormConfig.formFields.paymentId, googleFormData.paymentOrderId);
      formData.append(googleFormConfig.formFields.isPaid, googleFormData.isPaid ? 'true' : 'false');
      formData.append(googleFormConfig.formFields.address, googleFormData.address);
      formData.append(googleFormConfig.formFields.customerName, googleFormData.customerName);
      formData.append(googleFormConfig.formFields.customerEmail, googleFormData.customerEmail);
      formData.append(googleFormConfig.formFields.customerPhone, googleFormData.customerPhone);
      formData.append(googleFormConfig.formFields.scheduledDate, googleFormData.scheduledDate || '');
      formData.append(googleFormConfig.formFields.scheduledTime, googleFormData.scheduledTime || '');
      formData.append(googleFormConfig.formFields.hours, googleFormData.hours.toString());
      formData.append(googleFormConfig.formFields.materials, googleFormData.materials ? 'has materials' : 'no materials');
      formData.append(googleFormConfig.formFields.cleaners, googleFormData.cleaners.toString());
      
      // Add minimal required Google Form fields
      formData.append('fvv', '1');
      formData.append('pageHistory', '0');

      // Submit to Google Form with minimal headers
      await axios.post(googleFormConfig.formUrl, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        timeout: 10000
      });

      console.log('Paid booking data submitted to Google Form:', {
        bookingId: booking.id,
        customerEmail: booking.customerEmail,
        isPaid: booking.isPaid,
        timestamp: new Date().toISOString()
      });

    } catch (formError) {
      console.error('Google Form submission error during paid booking creation:', formError);
      // Don't fail the booking if Google Form submission fails
    }

    return res.json({
      success: true,
      orderId: bookingId,
      order: booking,
      message: 'Booking with payment created successfully'
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to create booking with payment'
    });
  }
});

// Get booking by ID
app.get('/api/bookings/:orderId', async (req, res) => {
  try {
    const { orderId } = req.params;

    if (!orderId) {
      return res.status(400).json({
        success: false,
        error: 'Order ID is required'
      });
    }

    // Here you would typically fetch from database
    // For now, return error since no database is configured
    return res.status(404).json({
      success: false,
      error: 'Booking not found. Database not configured in production.'
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to get booking'
    });
  }
});

// Update booking status
app.put('/api/bookings/:orderId/status', async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!orderId || !status) {
      return res.status(400).json({
        success: false,
        error: 'Order ID and status are required'
      });
    }

    // Validate status
    const validStatuses = ['pending', 'confirmed', 'completed', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid status. Must be one of: pending, confirmed, completed, cancelled'
      });
    }

    // Here you would typically update in database
    // For now, return success

    return res.json({
      success: true,
      orderId: orderId,
      message: 'Booking status updated successfully'
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to update booking status'
    });
  }
});

// Get customer bookings
app.get('/api/bookings/customer/:customerEmail', async (req, res) => {
  try {
    const { customerEmail } = req.params;

    if (!customerEmail) {
      return res.status(400).json({
        success: false,
        error: 'Customer email is required'
      });
    }

    // Here you would typically fetch from database
    // For now, return error since no database is configured
    return res.status(404).json({
      success: false,
      error: 'No bookings found. Database not configured in production.'
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to get customer bookings'
    });
  }
});

// Cancel booking
app.put('/api/bookings/:orderId/cancel', async (req, res) => {
  try {
    const { orderId } = req.params;

    if (!orderId) {
      return res.status(400).json({
        success: false,
        error: 'Order ID is required'
      });
    }

    // Here you would typically update in database
    // For now, return success

    return res.json({
      success: true,
      orderId: orderId,
      message: 'Booking cancelled successfully'
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to cancel booking'
    });
  }
});

// Store booking data for payment processing
app.post('/api/bookings/store-payment-data', async (req, res) => {
  try {
    const {
      paymentOrderId,
      bookingData,
      paymentAmount
    } = req.body;

    // Validate required fields
    if (!paymentOrderId || !bookingData || !paymentAmount) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: paymentOrderId, bookingData, paymentAmount'
      });
    }

    // Store booking data with payment order ID
    // In a real application, you would store this in a database
    // For now, we'll store it in memory (this will be lost on server restart)
    const paymentDataStore = global.paymentDataStore || new Map();
    global.paymentDataStore = paymentDataStore;

    paymentDataStore.set(paymentOrderId, {
      bookingData,
      paymentAmount,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
    });

    console.log('Payment data stored for order:', paymentOrderId);

    return res.json({
      success: true,
      message: 'Payment data stored successfully'
    });

  } catch (error) {
    console.error('Store payment data error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to store payment data'
    });
  }
});

// Retrieve booking data for payment processing
app.get('/api/bookings/payment-data/:paymentOrderId', async (req, res) => {
  try {
    const { paymentOrderId } = req.params;

    if (!paymentOrderId) {
      return res.status(400).json({
        success: false,
        error: 'Payment order ID is required'
      });
    }

    // Retrieve booking data from storage
    const paymentDataStore = global.paymentDataStore || new Map();
    const paymentData = paymentDataStore.get(paymentOrderId);

    if (!paymentData) {
      return res.status(404).json({
        success: false,
        error: 'Payment data not found'
      });
    }

    // Check if data has expired
    if (new Date(paymentData.expiresAt) < new Date()) {
      paymentDataStore.delete(paymentOrderId);
      return res.status(410).json({
        success: false,
        error: 'Payment data has expired'
      });
    }

    return res.json({
      success: true,
      data: paymentData
    });

  } catch (error) {
    console.error('Retrieve payment data error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to retrieve payment data'
    });
  }
});

// Clean up expired payment data
app.delete('/api/bookings/payment-data/:paymentOrderId', async (req, res) => {
  try {
    const { paymentOrderId } = req.params;

    if (!paymentOrderId) {
      return res.status(400).json({
        success: false,
        error: 'Payment order ID is required'
      });
    }

    // Remove payment data from storage
    const paymentDataStore = global.paymentDataStore || new Map();
    const deleted = paymentDataStore.delete(paymentOrderId);

    if (deleted) {
      console.log('Payment data cleaned up for order:', paymentOrderId);
      return res.json({
        success: true,
        message: 'Payment data cleaned up successfully'
      });
    } else {
      return res.status(404).json({
        success: false,
        error: 'Payment data not found'
      });
    }

  } catch (error) {
    console.error('Clean up payment data error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to clean up payment data'
    });
  }
});

// Google Form submission endpoint
app.post('/api/google-form/submit-booking', async (req, res) => {
  try {
    const {
      customerName,
      customerEmail,
      customerPhone,
      address,
      serviceType,
      cleaners,
      hours,
      materials,
      total,
      paymentMethod,
      isPaid,
      paymentStatus,
      paymentOrderId,
      scheduledDate,
      scheduledTime,
      orderId,
      submissionDate
    } = req.body;

    // Validate required fields
    if (!customerName || !customerEmail || !customerPhone || !address || !orderId) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: customerName, customerEmail, customerPhone, address, orderId'
      });
    }

    // Create form data for Google Form submission
    const formData = new FormData();
    
    // Add form fields based on your Google Form structure
    formData.append(googleFormConfig.formFields.orderId, orderId || '');
    formData.append(googleFormConfig.formFields.paymentId, paymentOrderId || '');
    formData.append(googleFormConfig.formFields.isPaid, isPaid ? 'true' : 'false');
    formData.append(googleFormConfig.formFields.address, address || '');
    formData.append(googleFormConfig.formFields.customerName, customerName || '');
    formData.append(googleFormConfig.formFields.customerEmail, customerEmail || '');
    formData.append(googleFormConfig.formFields.customerPhone, customerPhone || '');
    formData.append(googleFormConfig.formFields.scheduledDate, scheduledDate || '');
    formData.append(googleFormConfig.formFields.scheduledTime, scheduledTime || '');
    formData.append(googleFormConfig.formFields.hours, hours?.toString() || '1');
    formData.append(googleFormConfig.formFields.materials, materials ? 'has materials' : 'no materials');
    formData.append(googleFormConfig.formFields.cleaners, cleaners?.toString() || '1');
    
    // Add minimal required Google Form fields
    formData.append('fvv', '1');
    formData.append('pageHistory', '0');

    // Submit to Google Form with minimal headers
    try {
      const response = await axios.post(googleFormConfig.formUrl, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        timeout: 10000
      });

      // Google Forms always returns a 200 status even if there's an error
      // We need to check the response content to determine success
      if (response.status === 200) {
        console.log('Google Form submission successful:', {
          orderId,
          customerEmail,
          timestamp: new Date().toISOString()
        });

        return res.json({
          success: true,
          message: 'Booking data submitted to Google Form successfully'
        });
      } else {
        throw new Error('Google Form submission failed');
      }

    } catch (formError) {
      console.error('Google Form submission error:', formError);
      
      // Even if Google Form fails, we don't want to fail the booking
      // So we return success but log the error
      return res.json({
        success: true,
        message: 'Booking created successfully, but Google Form submission may have failed',
        warning: 'Google Form submission error logged'
      });
    }

  } catch (error) {
    console.error('Google Form endpoint error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to submit booking data to Google Form'
    });
  }
});

// Helper function to verify callback signature
function verifyCallbackSignature(callbackData, secretKey) {
  try {
    if (!callbackData || !callbackData.signature || !callbackData.timestamp) {
      return false;
    }

    // Verify timestamp (5 minutes tolerance)
    const currentTime = Math.floor(Date.now() / 1000);
    const callbackTime = parseInt(callbackData.timestamp);
    const timeTolerance = 300; // 5 minutes
    
    if (Math.abs(currentTime - callbackTime) > timeTolerance) {
      return false;
    }

    // Create payload for verification
    const payloadToVerify = createVerificationPayload(callbackData);
    
    // Generate expected signature
    const expectedSignature = crypto
      .createHmac('sha256', secretKey)
      .update(payloadToVerify)
      .digest('base64');
    
    // Compare signatures
    return callbackData.signature === expectedSignature;
    
  } catch (error) {
    return false;
  }
}

// Helper function to create verification payload
function createVerificationPayload(callbackData) {
  const sortedKeys = Object.keys(callbackData)
    .filter(key => key !== 'signature' && key !== 'timestamp')
    .sort();
  
  return sortedKeys.map(key => `${key}=${callbackData[key]}`).join('&');
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Carla Maid Backend API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Carla Maid Backend API listening on http://localhost:${PORT}`);
  console.log(`SkipCash API endpoints available at http://localhost:${PORT}/api/skipcash`);
  console.log(`Booking API endpoints available at http://localhost:${PORT}/api/bookings`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app; 