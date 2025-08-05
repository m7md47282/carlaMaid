const express = require('express');
const axios = require('axios');
const crypto = require('crypto');

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
    apiKey: '288d604d-03b6-4c66-821e-0a82a3fd2cc8',
    secretKey: 'Og9vDBQbBFHg/dwxkQjFCcLYogMDq4hLOF0OPsuRDY+OrLp/BPWMoCvsf1EDW41N8QTqoJHFhpclF/+bMR8Gwjyy2n0ZBNKuk8TO6LSpA2+JTWRM3ODl3LuX1nSFHRVnHJ1h0+ojevQqA8U/FzgCu88S+HhdZ1zq1GeWvka9MM8y8arkLwo0oLCf4IPAcH6olU8EKWrgcIymL6spNmRYRqfiLEzFWIQAjNJa2PH/spkK8c0brTae9jzbSf7yw6DO6NV51dbC5Td+BqWEjOmDphtQ3XSfqaj5fIjkGjjd58tnP6uQELF08Q5uZqGno8fWxZi+B6Wz9Z6Zr3y7cr19VTpRA2+RGOSVNzdaMnc7EL6ryFxmXUg+dSU37gBffAzn8fAIe2KJJdGnsSUkM8Z82E6Yj2KPi/Tw/wrYZMwuXNROwlIilIt9tds8PCdlFgPD1wiH8q9om/kIcarLuoVXn71nF65BT3/PhAOEhKyrxLaiqwZg+8xZdbCHzFQNYefcYuDRzflWzPRp3oWX1L9bPw=='
  },
  sandbox: {
    apiUrl: 'https://skipcashtest.azurewebsites.net',
    apiKey: '288d604d-03b6-4c66-821e-0a82a3fd2cc8',
    secretKey: 'Og9vDBQbBFHg/dwxkQjFCcLYogMDq4hLOF0OPsuRDY+OrLp/BPWMoCvsf1EDW41N8QTqoJHFhpclF/+bMR8Gwjyy2n0ZBNKuk8TO6LSpA2+JTWRM3ODl3LuX1nSFHRVnHJ1h0+ojevQqA8U/FzgCu88S+HhdZ1zq1GeWvka9MM8y8arkLwo0oLCf4IPAcH6olU8EKWrgcIymL6spNmRYRqfiLEzFWIQAjNJa2PH/spkK8c0brTae9jzbSf7yw6DO6NV51dbC5Td+BqWEjOmDphtQ3XSfqaj5fIjkGjjd58tnP6uQELF08Q5uZqGno8fWxZi+B6Wz9Z6Zr3y7cr19VTpRA2+RGOSVNzdaMnc7EL6ryFxmXUg+dSU37gBffAzn8fAIe2KJJdGnsSUkM8Z82E6Yj2KPi/Tw/wrYZMwuXNROwlIilIt9tds8PCdlFgPD1wiH8q9om/kIcarLuoVXn71nF65BT3/PhAOEhKyrxLaiqwZg+8xZdbCHzFQNYefcYuDRzflWzPRp3oWX1L9bPw=='
  },
  isTestMode: true
};

const currentConfig = skipCashConfig.isTestMode ? skipCashConfig.sandbox : skipCashConfig.production;

// Debug: Log configuration
console.log('SkipCash Configuration:', {
  isTestMode: skipCashConfig.isTestMode,
  apiUrl: currentConfig.apiUrl,
  apiKey: currentConfig.apiKey ? `${currentConfig.apiKey.substring(0, 10)}...` : 'NOT SET',
  secretKey: currentConfig.secretKey ? `${currentConfig.secretKey.substring(0, 10)}...` : 'NOT SET'
});

// SkipCash API Routes
app.get('/api/skipcash/test', async (req, res) => {
  try {
    console.log('SkipCash Configuration:', {
      isTestMode: skipCashConfig.isTestMode,
      apiUrl: currentConfig.apiUrl,
      apiKey: currentConfig.apiKey ? 'SET' : 'NOT SET',
      secretKey: currentConfig.secretKey ? 'SET' : 'NOT SET'
    });
    
    res.json({ 
      success: true, 
      config: {
        isTestMode: skipCashConfig.isTestMode,
        apiUrl: currentConfig.apiUrl,
        apiKeySet: !!currentConfig.apiKey,
        secretKeySet: !!currentConfig.secretKey
      }
    });
  } catch (error) {
    console.error('SkipCash test error:', error);
    res.status(500).json({ success: false, error: 'SkipCash test failed' });
  }
});

app.get('/api/skipcash/health', async (req, res) => {
  try {
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Making request to:', `${currentConfig.apiUrl}/health`);
    console.log('With API key:', currentConfig.apiKey ? 'SET' : 'NOT SET');
    
    // For sandbox environment, health check endpoints might not exist
    // Instead, we'll test the API by making a minimal request
    if (skipCashConfig.isTestMode) {
      console.log('Sandbox mode detected - testing API connectivity instead of health check');
      
      // Try to test the API with a minimal request
      try {
        const testResponse = await axios.get(`${currentConfig.apiUrl}`, {
          headers: {
            'Authorization': `Bearer ${currentConfig.apiKey}`,
            'Content-Type': 'application/json'
          },
          timeout: 5000
        });
        
        return res.json({ 
          success: true, 
          message: 'SkipCash sandbox API is accessible',
          mode: 'sandbox',
          data: testResponse.data || { status: 'connected' }
        });
      } catch (error) {
        // If even the base URL fails, the API might be down
        console.error('SkipCash sandbox API connectivity test failed:', error.message);
        return res.status(500).json({ 
          success: false, 
          error: 'SkipCash sandbox API is not accessible',
          mode: 'sandbox',
          details: error.message
        });
      }
    }
    
    // For production, try health endpoints
    const healthEndpoints = [
      '/health',
      '/api/health',
      '/status',
      '/api/status'
    ];
    
    let response = null;
    let lastError = null;
    
    for (const endpoint of healthEndpoints) {
      try {
        response = await axios.get(`${currentConfig.apiUrl}${endpoint}`, {
          headers: {
            'Authorization': `Bearer ${currentConfig.apiKey}`,
            'Content-Type': 'application/json'
          },
          timeout: 5000
        });
        
        console.log(`SkipCash health check successful at ${endpoint}:`, response.data);
        return res.json({ 
          success: true, 
          data: response.data,
          endpoint: endpoint,
          mode: 'production'
        });
      } catch (error) {
        lastError = error;
        console.log(`Health check failed at ${endpoint}:`, error.response?.status || error.message);
        continue;
      }
    }
    
    // If all endpoints failed, return error
    console.error('All SkipCash health check endpoints failed:', lastError);
    res.status(500).json({ 
      success: false, 
      error: 'SkipCash health check failed - no valid endpoints found',
      mode: 'production',
      details: lastError?.response?.data || lastError?.message
    });
  } catch (error) {
    console.error('SkipCash health check error:', error);
    res.status(500).json({ success: false, error: 'SkipCash health check failed' });
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

          // Try different payment creation endpoints that might exist
      const paymentEndpoints = [
        '/payment/create',
        '/api/payment/create',
        '/payments/create',
        '/api/payments/create',
        '/create-payment',
        '/api/create-payment'
      ];
      
      let response = null;
      let lastError = null;
      
      for (const endpoint of paymentEndpoints) {
        try {
          console.log(`Trying payment creation at: ${currentConfig.apiUrl}${endpoint}`);
          response = await axios.post(`${currentConfig.apiUrl}${endpoint}`, paymentData, {
            headers: {
              'Authorization': `Bearer ${currentConfig.apiKey}`,
              'Content-Type': 'application/json'
            },
            timeout: 10000 // 10 second timeout for payment creation
          });
          
          console.log(`Payment creation successful at ${endpoint}:`, response.data);
          break; // Success, exit the loop
        } catch (error) {
          lastError = error;
          console.log(`Payment creation failed at ${endpoint}:`, error.response?.status || error.message);
          continue;
        }
      }
      
      if (!response) {
        console.error('All payment creation endpoints failed:', lastError);
        return res.status(500).json({
          success: false,
          error: 'Payment creation failed - no valid endpoints found',
          details: lastError?.response?.data || lastError?.message
        });
      }

    if (response.data.success) {
      return res.json({
        success: true,
        paymentUrl: response.data.payment_url,
        orderId: response.data.order_id,
        data: response.data
      });
    } else {
      return res.status(400).json({
        success: false,
        error: response.data.error || 'Payment creation failed'
      });
    }
  } catch (error) {
    console.error('SkipCash payment creation error:', error);
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
    console.error('SkipCash payment status check error:', error);
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
      console.error('Invalid callback signature');
      return res.status(400).json({
        success: false,
        error: 'Invalid callback signature'
      });
    }

    // Process the callback
    const { order_id, status, transaction_id, amount, currency } = callbackData;
    
    console.log('Payment callback received:', {
      orderId: order_id,
      status,
      transactionId: transaction_id,
      amount,
      currency
    });

    // Track successful payment if status is completed
    if (status === 'completed' && order_id) {
      // Log payment success for analytics
      console.log('Payment completed via callback:', {
        orderId: order_id,
        amount: amount,
        currency: currency || 'QAR',
        transactionId: transaction_id,
        paymentGateway: 'skipcash',
        serviceType: 'cleaning_service',
        conversionType: 'payment_completion',
        marketingChannel: 'website_direct'
      });

      // Here you can add additional tracking logic
      // For example, send to analytics service or external tracking system
    }

    // Here you can add logic to update your database
    // For example, update order status in your database
    
    // Send success response to SkipCash
    return res.json({
      success: true,
      message: 'Callback processed successfully'
    });

  } catch (error) {
    console.error('Payment callback error:', error);
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

    console.log('Booking created:', booking);

    // Here you would typically save to a database
    // For now, we'll just return the booking

    return res.json({
      success: true,
      orderId: bookingId,
      order: booking,
      message: 'Booking created successfully'
    });

  } catch (error) {
    console.error('Booking creation error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to create booking'
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
    // For now, return a mock booking
    const mockBooking = {
      id: orderId,
      customerName: 'Test Customer',
      customerEmail: 'test@example.com',
      customerPhone: '12345678',
      address: 'Test Address',
      serviceType: 'cleaning',
      cleaners: 1,
      hours: 2,
      materials: false,
      total: 70,
      paymentMethod: 'skipcash',
      status: 'pending',
      createdAt: new Date().toISOString(),
      scheduledDate: '2024-01-15',
      scheduledTime: '10:00'
    };

    return res.json({
      success: true,
      order: mockBooking
    });

  } catch (error) {
    console.error('Get booking error:', error);
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

    console.log('Updating booking status:', { orderId, status });

    // Here you would typically update in database
    // For now, return success

    return res.json({
      success: true,
      orderId: orderId,
      message: 'Booking status updated successfully'
    });

  } catch (error) {
    console.error('Update booking status error:', error);
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
    // For now, return mock bookings
    const mockBookings = [
      {
        id: 'CARLA_BOOKING_1234567890_ABC123',
        customerName: 'Test Customer',
        customerEmail: customerEmail,
        customerPhone: '12345678',
        address: 'Test Address',
        serviceType: 'cleaning',
        cleaners: 1,
        hours: 2,
        materials: false,
        total: 70,
        paymentMethod: 'skipcash',
        status: 'pending',
        createdAt: new Date().toISOString(),
        scheduledDate: '2024-01-15',
        scheduledTime: '10:00'
      }
    ];

    return res.json({
      success: true,
      bookings: mockBookings
    });

  } catch (error) {
    console.error('Get customer bookings error:', error);
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

    console.log('Cancelling booking:', orderId);

    // Here you would typically update in database
    // For now, return success

    return res.json({
      success: true,
      orderId: orderId,
      message: 'Booking cancelled successfully'
    });

  } catch (error) {
    console.error('Cancel booking error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to cancel booking'
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
    console.error('Signature verification error:', error);
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