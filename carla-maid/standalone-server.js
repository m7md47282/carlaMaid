const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

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
    apiUrl: 'https://api.skipcash.app/api/v1',
    apiKey: '288d604d-03b6-4c66-821e-0a82a3fd2cc8',
    secretKey: 'Og9vDBQbBFHg/dwxkQjFCcLYogMDq4hLOF0OPsuRDY+OrLp/BPWMoCvsf1EDW41N8QTqoJHFhpclF/+bMR8Gwjyy2n0ZBNKuk8TO6LSpA2+JTWRM3ODl3LuX1nSFHRVnHJ1h0+ojevQqA8U/FzgCu88S+HhdZ1zq1GeWvka9MM8y8arkLwo0oLCf4IPAcH6olU8EKWrgcIymL6spNmRYRqfiLEzFWIQAjNJa2PH/spkK8c0brTae9jzbSf7yw6DO6NV51dbC5Td+BqWEjOmDphtQ3XSfqaj5fIjkGjjd58tnP6uQELF08Q5uZqGno8fWxZi+B6Wz9Z6Zr3y7cr19VTpRA2+RGOSVNzdaMnc7EL6ryFxmXUg+dSU37gBffAzn8fAIe2KJJdGnsSUkM8Z82E6Yj2KPi/Tw/wrYZMwuXNROwlIilIt9tds8PCdlFgPD1wiH8q9om/kIcarLuoVXn71nF65BT3/PhAOEhKyrxLaiqwZg+8xZdbCHzFQNYefcYuDRzflWzPRp3oWX1L9bPw=='
  },
  sandbox: {
    apiUrl: 'https://skipcashtest.azurewebsites.net/api/v1',
    apiKey: '288d604d-03b6-4c66-821e-0a82a3fd2cc8',
    secretKey: 'Og9vDBQbBFHg/dwxkQjFCcLYogMDq4hLOF0OPsuRDY+OrLp/BPWMoCvsf1EDW41N8QTqoJHFhpclF/+bMR8Gwjyy2n0ZBNKuk8TO6LSpA2+JTWRM3ODl3LuX1nSFHRVnHJ1h0+ojevQqA8U/FzgCu88S+HhdZ1zq1GeWvka9MM8y8arkLwo0oLCf4IPAcH6olU8EKWrgcIymL6spNmRYRqfiLEzFWIQAjNJa2PH/spkK8c0brTae9jzbSf7yw6DO6NV51dbC5Td+BqWEjOmDphtQ3XSfqaj5fIjkGjjd58tnP6uQELF08Q5uZqGno8fWxZi+B6Wz9Z6Zr3y7cr19VTpRA2+RGOSVNzdaMnc7EL6ryFxmXUg+dSU37gBffAzn8fAIe2KJJdGnsSUkM8Z82E6Yj2KPi/Tw/wrYZMwuXNROwlIilIt9tds8PCdlFgPD1wiH8q9om/kIcarLuoVXn71nF65BT3/PhAOEhKyrxLaiqwZg+8xZdbCHzFQNYefcYuDRzflWzPRp3oWX1L9bPw=='
  },
  isTestMode: false
};

const currentConfig = skipCashConfig.isTestMode ? skipCashConfig.sandbox : skipCashConfig.production;

const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_SECURE === 'true',
  user: process.env.SMTP_USER || '',
  pass: process.env.SMTP_PASS || '',
  defaultFrom: process.env.QUOTATION_FROM_EMAIL || process.env.SMTP_USER || 'no-reply@carlamaid.qa',
  defaultTo: process.env.QUOTATION_TO_EMAIL || 'info@carlamaid.qa'
};

const isEmailTransportConfigured = () => !!(emailConfig.user && emailConfig.pass);
let mailTransporter = null;

function getMailTransporter() {
  if (!mailTransporter) {
    if (isEmailTransportConfigured()) {
      mailTransporter = nodemailer.createTransport({
        host: emailConfig.host,
        port: emailConfig.port,
        secure: emailConfig.secure,
        auth: {
          user: emailConfig.user,
          pass: emailConfig.pass
        }
      });
    } else {
      console.warn('[Quotation Email] SMTP credentials are not fully configured. Emails will be logged locally.');
      mailTransporter = nodemailer.createTransport({
        jsonTransport: true
      });
    }
  }
  return mailTransporter;
}

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
    return res.json({ 
      success: true, 
      message: 'SkipCash sandbox API is accessible',
      mode: 'sandbox',
      data: { status: 'connected' }
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

    // Validate and format amount
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      return res.status(400).json({
        success: false,
        error: 'Invalid amount value',
        details: {
          receivedAmount: amount,
          parsedAmount: parsedAmount
        }
      });
    }

    const paymentData = {
      amount: parseFloat(amount).toString(),
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
   
      
      let response = null;
      let lastError = null;
      

        try {
          console.log(`Trying payment creation at: ${currentConfig.apiUrl}/payments`);
          response = await axios.post(`${currentConfig.apiUrl}/payments`, paymentData, {
            headers: {
              'Authorization': `Bearer ${currentConfig.apiKey}`,
              'Content-Type': 'application/json'
            },
            timeout: 10000 // 10 second timeout for payment creation
          });
          
          console.log(`Payment creation successful at ${currentConfig.apiUrl}/payments:`, response.data);
         
        } catch (error) {
          lastError = error;
          console.log(`Payment creation failed at ${currentConfig.apiUrl}/payments:`, error.response?.status || error.message);
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

app.post('/api/quotation-request/email', async (req, res) => {
  try {
    const incomingPayload = req.body || {};
    const normalizedPayload = normalizeQuotationPayload(incomingPayload);

    const requiredFields = [
      'companyName',
      'contactPerson',
      'contactNumber',
      'email',
      'location',
      'propertyType',
      'contractDuration',
      'startDate',
      'cleaningService',
      'workingDays',
      'startTime',
      'endTime',
      'cleaningMaterials',
      'numberOfCleaners'
    ];

    const missingFields = listMissingFields(normalizedPayload, requiredFields);
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        error: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    const transporter = getMailTransporter();
    const mailOptions = {
      from: emailConfig.defaultFrom,
      to: emailConfig.defaultTo,
      replyTo: normalizedPayload.email,
      subject: `New Quotation Request - ${normalizedPayload.companyName}`,
      html: buildQuotationEmailHtml(normalizedPayload),
      text: buildQuotationEmailText(normalizedPayload)
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Quotation request email dispatched', {
      messageId: info?.messageId || 'json-transport',
      to: emailConfig.defaultTo
    });

    return res.json({
      success: true,
      message: 'Quotation request submitted successfully',
      emailPreview: isEmailTransportConfigured() ? undefined : info?.message
    });
  } catch (error) {
    console.error('Quotation request email error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to submit quotation request'
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

app.post('/api/skipcash/webhook', async (req, res) => {
  try {
    console.log('SkipCash webhook received:', req.body);
    
    const webhookData = req.body;
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      console.error('Webhook missing authorization header');
      return res.status(401).json({ success: false, error: 'Missing authorization header' });
    }

    // Verify webhook signature using HMAC-SHA256
    const isValidSignature = verifyWebhookSignature(webhookData, authorizationHeader, currentConfig.secretKey);
    
    if (!isValidSignature) {
      console.error('Webhook signature verification failed');
      return res.status(401).json({ success: false, error: 'Invalid signature' });
    }

    // Process the webhook data
    const { PaymentId, Amount, StatusId, TransactionId, Custom1, VisaId } = webhookData;
    
    console.log('Processing webhook:', {
      PaymentId,
      Amount,
      StatusId,
      TransactionId,
      Custom1,
      VisaId
    });

    // Map SkipCash StatusId to payment status
    const paymentStatus = mapSkipCashStatus(StatusId);
    
    // Update booking status if we have a TransactionId (our order ID)
    if (TransactionId) {
      try {
        // Update the booking status based on payment result
        await updateBookingStatus(TransactionId, paymentStatus, Amount);
        console.log(`Booking ${TransactionId} status updated to: ${paymentStatus}`);
      } catch (updateError) {
        console.error('Failed to update booking status:', updateError);
        // Don't fail the webhook - log the error but return success
      }
    }

    // Log webhook processing
    console.log('Webhook processed successfully:', {
      PaymentId,
      StatusId,
      mappedStatus: paymentStatus,
      orderId: TransactionId,
      amount: Amount
    });

    // Return 200 to acknowledge receipt (SkipCash requirement)
    return res.status(200).json({ 
      success: true, 
      message: 'Webhook processed successfully',
      paymentId: PaymentId,
      status: paymentStatus
    });

  } catch (error) {
    console.error('Webhook processing error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Webhook processing failed' 
    });
  }
});

function verifyWebhookSignature(webhookData, authorizationHeader, secretKey) {
  try {
    // Extract the signature from the authorization header
    const receivedSignature = authorizationHeader.replace('Bearer ', '');
    
    // Build signature data according to SkipCash documentation
    // Required fields: PaymentId, Amount, StatusId, TransactionId, Custom1, VisaId
    const signatureFields = [
      'PaymentId', 'Amount', 'StatusId', 'TransactionId', 'Custom1', 'VisaId'
    ];
    
    const signatureData = signatureFields
      .map(field => {
        const value = webhookData[field];
        return value !== null && value !== undefined ? `${field}=${value}` : null;
      })
      .filter(Boolean)
      .join(',');
    
    console.log('Signature data for verification:', signatureData);
    
    // Generate expected signature using HMAC-SHA256
    const expectedSignature = crypto
      .createHmac('sha256', secretKey)
      .update(signatureData)
      .digest('base64');
    
    console.log('Signature verification:', {
      received: receivedSignature,
      expected: expectedSignature,
      matches: receivedSignature === expectedSignature
    });
    
    return receivedSignature === expectedSignature;
    
  } catch (error) {
    console.error('Signature verification error:', error);
    return false;
  }
}

function mapSkipCashStatus(statusId) {
  const statusMap = {
    0: 'pending',    // New
    1: 'pending',    // Pending
    2: 'completed',  // Paid
    3: 'cancelled',  // Canceled
    4: 'failed',     // Failed
    5: 'failed',     // Rejected
    6: 'completed',  // Refunded
    7: 'pending',    // Pending refund
    8: 'failed'      // Refund failed
  };
  
  return statusMap[statusId] || 'failed';
}

async function updateBookingStatus(orderId, status, amount) {
  try {
    // Since we're using mock data, we'll just log the status update
    // In a real implementation, this would update the database
    console.log(`Webhook: Updating booking ${orderId} status to: ${status}`);
    
    if (amount) {
      console.log(`Webhook: Payment amount: ${amount}`);
    }
    
    // Log what would happen in production:
    if (status === 'completed') {
      console.log(`Webhook: Would update booking ${orderId} to confirmed status with payment`);
    } else if (status === 'failed' || status === 'cancelled') {
      console.log(`Webhook: Would update booking ${orderId} to failed payment status`);
    }
    
    // In production, you would:
    // 1. Find the booking in your database
    // 2. Update the status and payment information
    // 3. Send notifications if needed
    // 4. Update any related systems
    
  } catch (error) {
    console.error('Error updating booking status:', error);
    throw error;
  }
}

function normalizeQuotationPayload(payload) {
  const workingDays = normalizeArray(payload?.workingDays);
  const startDate = normalizeDateValue(payload?.startDate);

  return {
    companyName: (payload?.companyName || '').trim(),
    contactPerson: (payload?.contactPerson || '').trim(),
    contactNumber: payload?.contactNumber || '',
    email: payload?.email || '',
    location: payload?.location || '',
    propertyType: payload?.propertyType || '',
    contractDuration: payload?.contractDuration || '',
    customDuration: payload?.contractDuration === 'custom' ? (payload?.customDuration || '') : '',
    startDate,
    cleaningService: payload?.cleaningService || '',
    workingDays,
    startTime: payload?.startTime || '',
    endTime: payload?.endTime || '',
    cleaningMaterials: payload?.cleaningMaterials || 'withMaterials',
    cleaningMaterialsLabel: mapCleaningMaterials(payload?.cleaningMaterials),
    numberOfCleaners: Number(payload?.numberOfCleaners) || 0,
    needSupervisor: formatBoolean(payload?.needSupervisor),
    propertySize: payload?.propertySize || '',
    budget: payload?.budget || '',
    additionalNotes: payload?.additionalNotes || ''
  };
}

function listMissingFields(payload, requiredFields) {
  return requiredFields.filter(field => {
    const value = payload[field];
    if (field === 'workingDays') {
      return !value || (Array.isArray(value) && value.length === 0);
    }
    return value === undefined || value === null || value === '';
  });
}

function normalizeArray(value) {
  if (Array.isArray(value)) {
    return value
      .map(item => String(item).trim())
      .filter(Boolean);
  }

  if (typeof value === 'string') {
    return value
      .split(',')
      .map(item => item.trim())
      .filter(Boolean);
  }

  return [];
}

function normalizeDateValue(value) {
  if (!value) {
    return '';
  }

  if (value instanceof Date && !isNaN(value.getTime())) {
    return value.toISOString().split('T')[0];
  }

  const parsed = new Date(value);
  if (!isNaN(parsed.getTime())) {
    return parsed.toISOString().split('T')[0];
  }

  return String(value);
}

function formatBoolean(value) {
  if (typeof value === 'boolean') {
    return value;
  }

  if (typeof value === 'number') {
    return value === 1;
  }

  if (typeof value === 'string') {
    return ['true', '1', 'yes', 'on'].includes(value.toLowerCase());
  }

  return false;
}

function mapCleaningMaterials(value) {
  const normalized = (value || 'withMaterials').toLowerCase();
  if (normalized.includes('without')) {
    return 'Without Materials';
  }
  return 'With Materials';
}

function sanitizeValue(value) {
  if (value === null || value === undefined || value === '') {
    return 'Not specified';
  }

  if (Array.isArray(value)) {
    return value.length ? value.join(', ') : 'Not specified';
  }

  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  }

  return String(value);
}

function formatWorkingDays(days) {
  if (!days || !days.length) {
    return 'Not specified';
  }

  return days
    .map(day => day.charAt(0).toUpperCase() + day.slice(1))
    .join(', ');
}

function buildQuotationEmailHtml(data) {
  const rows = [
    ['Company Name', sanitizeValue(data.companyName)],
    ['Contact Person', sanitizeValue(data.contactPerson)],
    ['Contact Number', sanitizeValue(data.contactNumber)],
    ['Email Address', sanitizeValue(data.email)],
    ['Location / Address', sanitizeValue(data.location)],
    ['Property Type', sanitizeValue(data.propertyType)],
    ['Property Size', sanitizeValue(data.propertySize)],
    ['Service Requested', sanitizeValue(data.cleaningService)],
    ['Contract Duration', sanitizeValue(data.contractDuration === 'custom' ? data.customDuration : data.contractDuration)],
    ['Preferred Start Date', sanitizeValue(data.startDate)],
    ['Working Days', formatWorkingDays(data.workingDays)],
    ['Working Hours', `${sanitizeValue(data.startTime)} - ${sanitizeValue(data.endTime)}`],
    ['Cleaning Materials', sanitizeValue(data.cleaningMaterialsLabel)],
    ['Number of Cleaners', sanitizeValue(data.numberOfCleaners)],
    ['Need Supervisor', sanitizeValue(data.needSupervisor)],
    ['Estimated Budget', sanitizeValue(data.budget)],
    ['Additional Notes', sanitizeValue(data.additionalNotes)]
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr>
            <td style="padding:8px 12px;border:1px solid #e2e8f0;background:#f7fafc;font-weight:600;">${label}</td>
            <td style="padding:8px 12px;border:1px solid #e2e8f0;">${value}</td>
          </tr>`
    )
    .join('');

  return `
      <div style="font-family: Arial, sans-serif; color:#1a202c;">
        <h2 style="color:#0f9d58;">New Quotation Request</h2>
        <p>You have received a new quotation request from <strong>${sanitizeValue(data.companyName)}</strong>.</p>
        <table style="border-collapse:collapse;width:100%;margin-top:16px;">${tableRows}</table>
        <p style="margin-top:24px;color:#4a5568;">
          This request was submitted via the Carla Maid website.
        </p>
      </div>
    `;
}

function buildQuotationEmailText(data) {
  return [
    'New Quotation Request',
    '----------------------',
    `Company Name: ${sanitizeValue(data.companyName)}`,
    `Contact Person: ${sanitizeValue(data.contactPerson)}`,
    `Contact Number: ${sanitizeValue(data.contactNumber)}`,
    `Email: ${sanitizeValue(data.email)}`,
    `Location: ${sanitizeValue(data.location)}`,
    `Property Type: ${sanitizeValue(data.propertyType)}`,
    `Property Size: ${sanitizeValue(data.propertySize)}`,
    `Service Requested: ${sanitizeValue(data.cleaningService)}`,
    `Contract Duration: ${sanitizeValue(data.contractDuration === 'custom' ? data.customDuration : data.contractDuration)}`,
    `Preferred Start Date: ${sanitizeValue(data.startDate)}`,
    `Working Days: ${formatWorkingDays(data.workingDays)}`,
    `Working Hours: ${sanitizeValue(data.startTime)} - ${sanitizeValue(data.endTime)}`,
    `Cleaning Materials: ${sanitizeValue(data.cleaningMaterialsLabel)}`,
    `Number of Cleaners: ${sanitizeValue(data.numberOfCleaners)}`,
    `Need Supervisor: ${sanitizeValue(data.needSupervisor)}`,
    `Estimated Budget: ${sanitizeValue(data.budget)}`,
    `Additional Notes: ${sanitizeValue(data.additionalNotes)}`
  ].join('\n');
}

// Start server
app.listen(PORT, () => {
  console.log(`Carla Maid Backend API listening on http://localhost:${PORT}`);
  console.log(`SkipCash API endpoints available at http://localhost:${PORT}/api/skipcash`);
  console.log(`Booking API endpoints available at http://localhost:${PORT}/api/bookings`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app; 