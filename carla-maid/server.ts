import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import axios from 'axios';
import crypto from 'crypto';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  const environment = {
    SKIPCASH_API_KEY: '288d604d-03b6-4c66-821e-0a82a3fd2cc8',
    SKIPCASH_SECRET_KEY: 'Og9vDBQbBFHg/dwxkQjFCcLYogMDq4hLOF0OPsuRDY+OrLp/BPWMoCvsf1EDW41N8QTqoJHFhpclF/+bMR8Gwjyy2n0ZBNKuk8TO6LSpA2+JTWRM3ODl3LuX1nSFHRVnHJ1h0+ojevQqA8U/FzgCu88S+HhdZ1zq1GeWvka9MM8y8arkLwo0oLCf4IPAcH6olU8EKWrgcIymL6spNmRYRqfiLEzFWIQAjNJa2PH/spkK8c0brTae9jzbSf7yw6DO6NV51dbC5Td+BqWEjOmDphtQ3XSfqaj5fIjkGjjd58tnP6uQELF08Q5uZqGno8fWxZi+B6Wz9Z6Zr3y7cr19VTpRA2+RGOSVNzdaMnc7EL6ryFxmXUg+dSU37gBffAzn8fAIe2KJJdGnsSUkM8Z82E6Yj2KPi/Tw/wrYZMwuXNROwlIilIt9tds8PCdlFgPD1wiH8q9om/kIcarLuoVXn71nF65BT3/PhAOEhKyrxLaiqwZg+8xZdbCHzFQNYefcYuDRzflWzPRp3oWX1L9bPw==',
    SKIPCASH_SANDBOX_API_KEY: '288d604d-03b6-4c66-821e-0a82a3fd2cc8',
    SKIPCASH_SANDBOX_SECRET_KEY: 'Og9vDBQbBFHg/dwxkQjFCcLYogMDq4hLOF0OPsuRDY+OrLp/BPWMoCvsf1EDW41N8QTqoJHFhpclF/+bMR8Gwjyy2n0ZBNKuk8TO6LSpA2+JTWRM3ODl3LuX1nSFHRVnHJ1h0+ojevQqA8U/FzgCu88S+HhdZ1zq1GeWvka9MM8y8arkLwo0oLCf4IPAcH6olU8EKWrgcIymL6spNmRYRqfiLEzFWIQAjNJa2PH/spkK8c0brTae9jzbSf7yw6DO6NV51dbC5Td+BqWEjOmDphtQ3XSfqaj5fIjkGjjd58tnP6uQELF08Q5uZqGno8fWxZi+B6Wz9Z6Zr3y7cr19VTpRA2+RGOSVNzdaMnc7EL6ryFxmXUg+dSU37gBffAzn8fAIe2KJJdGnsSUkM8Z82E6Yj2KPi/Tw/wrYZMwuXNROwlIilIt9tds8PCdlFgPD1wiH8q9om/kIcarLuoVXn71nF65BT3/PhAOEhKyrxLaiqwZg+8xZdbCHzFQNYefcYuDRzflWzPRp3oWX1L9bPw==',
    NODE_ENV: 'development',
    PORT: 4000
  }

  // Middleware
  server.use(express.json({ limit: '10mb' }));
  server.use(express.urlencoded({ extended: true, limit: '10mb' }));
  
  // CORS middleware
  server.use((req, res, next) => {
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
      apiKey: environment['SKIPCASH_API_KEY'] || '',
      secretKey: environment['SKIPCASH_SECRET_KEY'] || ''
    },
    sandbox: {
      apiUrl: 'https://skipcashtest.azurewebsites.net',
      apiKey: environment['SKIPCASH_SANDBOX_API_KEY'] || '',
      secretKey: environment['SKIPCASH_SANDBOX_SECRET_KEY'] || ''
    },
    isTestMode: false
  };

  const currentConfig = skipCashConfig.isTestMode ? skipCashConfig.sandbox : skipCashConfig.production;

  // SkipCash API Routes
  server.get('/api/skipcash/test', async (req, res) => {
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

  server.get('/api/skipcash/health', async (req, res) => {
    try {
      console.log('Environment:', process.env['NODE_ENV']);
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
        } catch (error: any) {
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
      let lastError: any = null;
      
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
        } catch (error: any) {
          lastError = error;
          console.log(`Health check failed at ${endpoint}:`, error.response?.status || error.message);
          continue;
        }
      }
      
      // If all endpoints failed, return error
      console.error('All SkipCash health check endpoints failed:', lastError);
      return res.status(500).json({ 
        success: false, 
        error: 'SkipCash health check failed - no valid endpoints found',
        mode: 'production',
        details: lastError?.response?.data || lastError?.message
      });
    } catch (error) {
      console.error('SkipCash health check error:', error);
      return res.status(500).json({ success: false, error: 'SkipCash health check failed' });
    }
  });

  // Create payment endpoint
  server.post('/api/skipcash/payment/create', async (req, res) => {
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

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(customerEmail)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid email address format. Please provide a valid email address.'
        });
      }

      // Format payment data according to SkipCash API specification
      const finalOrderId = orderId || `CARLA_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
      
      const formattedPaymentData = {
        uid: finalOrderId,
        keyId: currentConfig.apiKey, // Use the API Key as Key ID from configuration
        amount: parseFloat(amount).toString(),
        firstName: customerName.split(' ')[0] || customerName,
        lastName: customerName.split(' ').slice(1).join(' ') || 'Customer',
        phone: customerPhone || '',
        email: customerEmail,
        street: 'Test Street', // Required field
        city: 'Test City', // Required field
        state: 'QA', // Required field (ISO country code)
        country: 'QA', // Required field (ISO country code)
        postalCode: '00000', // Required field
        transactionId: orderId,
        custom1: description || '',
        // Pass full redirect URLs along with the payment so SkipCash can return to our system
        // Include both camelCase and snake_case to maximize compatibility
        returnUrl: returnUrl,
        cancelUrl: cancelUrl,
        return_url: returnUrl,
        cancel_url: cancelUrl
      };

      // Build signature data
      const signatureData = `Uid=${formattedPaymentData.uid},KeyId=${formattedPaymentData.keyId},Amount=${formattedPaymentData.amount},FirstName=${formattedPaymentData.firstName},Phone=${formattedPaymentData.phone},Email=${formattedPaymentData.email},Street=${formattedPaymentData.street},City=${formattedPaymentData.city},State=${formattedPaymentData.state},Country=${formattedPaymentData.country},PostalCode=${formattedPaymentData.postalCode},TransactionId=${formattedPaymentData.transactionId},Custom1=${formattedPaymentData.custom1}`;
      console.log('Signature data:', signatureData);

      // Calculate signature using HMAC-SHA256
      const crypto = require('crypto');
      const signature = crypto.createHmac('sha256', currentConfig.secretKey).update(signatureData).digest('base64');
      console.log('Calculated signature:', signature);

      // Make request to correct SkipCash endpoint
      let response: any = null;
      try {
        console.log('Making request to SkipCash API with correct format');
        console.log('Payment data:', formattedPaymentData);
        
        response = await axios.post(`${currentConfig.apiUrl}/api/v1/payments`, formattedPaymentData, {
          headers: {
            'Authorization': signature,
            'Content-Type': 'application/json'
          },
          timeout: 10000
        });
        
        console.log('SkipCash payment creation successful:', response.data);
      } catch (error: any) {
        console.error('SkipCash payment creation failed:', {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
          message: error.message,
          signatureData: signatureData,
          signature: signature
        });
        throw error;
      }

      console.log('===============================================SkipCash payment creation response:', response);

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
  server.get('/api/payment/status-skip-cash/:orderId', async (req, res) => {
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

  // SkipCash Webhook endpoint for real-time payment updates
  server.post('/api/skipcash/webhook', async (req, res) => {
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

  // Payment callback endpoint
  server.post('/api/payment/callback', async (req, res) => {
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

  // WooCommerce integration endpoint
  server.post('/api/woocommerce/skipcash-callback', async (req, res) => {
    try {
      const callbackData = req.body;
      
      // Verify WooCommerce callback
      const isValidCallback = verifyWooCommerceCallback(callbackData);
      
      if (!isValidCallback) {
        console.error('Invalid WooCommerce callback');
        return res.status(400).json({
          success: false,
          error: 'Invalid WooCommerce callback'
        });
      }

      // Process WooCommerce order
      const { order_id, status, payment_method } = callbackData;
      
      console.log('WooCommerce SkipCash callback received:', {
        orderId: order_id,
        status,
        paymentMethod: payment_method
      });

      // Update WooCommerce order status
      // This would typically involve calling WooCommerce API
      
      return res.json({
        success: true,
        message: 'WooCommerce callback processed successfully'
      });

    } catch (error) {
      console.error('WooCommerce callback error:', error);
      return res.status(500).json({
        success: false,
        error: 'Failed to process WooCommerce callback'
      });
    }
  });

  // Booking endpoints
  server.post('/api/bookings/create', async (req, res) => {
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
  server.get('/api/bookings/:orderId', async (req, res) => {
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
  server.put('/api/bookings/:orderId/status', async (req, res) => {
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
  server.get('/api/bookings/customer/:customerEmail', async (req, res) => {
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
  server.put('/api/bookings/:orderId/cancel', async (req, res) => {
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
  function verifyCallbackSignature(callbackData: any, secretKey: string): boolean {
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
  function createVerificationPayload(callbackData: any): string {
    const sortedKeys = Object.keys(callbackData)
      .filter(key => key !== 'signature' && key !== 'timestamp')
      .sort();
    
    return sortedKeys.map(key => `${key}=${callbackData[key]}`).join('&');
  }

  // Helper function to verify WooCommerce callback
  function verifyWooCommerceCallback(callbackData: any): boolean {
    // Add WooCommerce-specific verification logic here
    // This would typically involve verifying the callback with WooCommerce
    return true; // Placeholder
  }

  // Helper function to verify webhook signature
  function verifyWebhookSignature(webhookData: any, authorizationHeader: string, secretKey: string): boolean {
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

  // Helper function to map SkipCash StatusId to payment status
  function mapSkipCashStatus(statusId: number): string {
    const statusMap: Record<number, string> = {
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

  // Helper function to update booking status
  async function updateBookingStatus(orderId: string, status: string, amount?: string): Promise<void> {
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

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Serve static files from /browser
  server.get('**', express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html',
  }));

  // All regular routes use the Angular engine
  server.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
    console.log(`SkipCash API endpoints available at http://localhost:${port}/api/skipcash`);
  });
}

run();
