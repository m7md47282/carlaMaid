# SkipCash Backend Integration Setup

## ✅ **Backend Server Setup Complete**

Your `server.ts` has been configured with full SkipCash integration including:

### 🔧 **API Endpoints Available:**

1. **Health Check**: `GET /api/skipcash/health`
2. **Create Payment**: `POST /api/skipcash/payment/create`
3. **Check Payment Status**: `GET /api/payment/status-skip-cash/:orderId`
4. **Payment Callback**: `POST /api/payment/callback`
5. **WooCommerce Callback**: `POST /api/woocommerce/skipcash-callback`

### 🔑 **Environment Variables Required:**

Create a `.env` file in the root directory with:

```bash
# Production SkipCash API Keys
SKIPCASH_API_KEY=your_production_api_key_here
SKIPCASH_SECRET_KEY=your_production_secret_key_here

# Sandbox/Test SkipCash API Keys
SKIPCASH_SANDBOX_API_KEY=your_sandbox_api_key_here
SKIPCASH_SANDBOX_SECRET_KEY=your_sandbox_secret_key_here

# Environment
NODE_ENV=development

# Server Port
PORT=4000
```

### 🚀 **How to Start the Backend:**

```bash
# Install dependencies (if not already done)
npm install

# Start the server
npm run serve:ssr:carla-maid
```

The server will start on `http://localhost:4000`

### 📋 **API Usage Examples:**

#### 1. Create Payment
```bash
curl -X POST http://localhost:4000/api/skipcash/payment/create \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 100,
    "currency": "QAR",
    "customerName": "John Doe",
    "customerEmail": "john@example.com",
    "customerPhone": "+97412345678",
    "description": "Cleaning service",
    "returnUrl": "http://localhost:4200/book-now/success",
    "cancelUrl": "http://localhost:4200/book-now/cancel"
  }'
```

#### 2. Check Payment Status
```bash
curl http://localhost:4000/api/payment/status-skip-cash/CARLA_1234567890_abc123
```

#### 3. Health Check
```bash
curl http://localhost:4000/api/skipcash/health
```

### 🔒 **Security Features:**

- ✅ CORS enabled for cross-origin requests
- ✅ Request body parsing with size limits
- ✅ Callback signature verification
- ✅ Timestamp validation (5-minute tolerance)
- ✅ HMAC-SHA256 signature verification

### 🔄 **Integration with Frontend:**

Your Angular frontend is already configured to use these endpoints:

- **Payment Service**: Uses `/api/skipcash/payment/create`
- **Status Checking**: Uses `/api/payment/status-skip-cash/:orderId`
- **Callbacks**: Handled at `/api/payment/callback`

### 🧪 **Testing:**

1. **Start the backend server**
2. **Start your Angular frontend** (`ng serve`)
3. **Test payment flow** through the book-now page
4. **Check server logs** for API calls and callbacks

### 📞 **SkipCash Support:**

- **Email**: support@skipcash.app
- **Sandbox URL**: https://skipcashtest.azurewebsites.net/
- **Production URL**: https://api.skipcash.app

### 🚨 **Important Notes:**

1. **API Keys**: Get your API keys from SkipCash support
2. **Sandbox Mode**: Set `NODE_ENV=development` for testing
3. **Production**: Set `NODE_ENV=production` for live payments
4. **Callbacks**: Ensure your callback URLs are accessible from SkipCash servers
5. **HTTPS**: Use HTTPS in production for security

### 🔧 **Troubleshooting:**

- **CORS Issues**: Backend includes CORS headers
- **API Errors**: Check SkipCash API documentation
- **Callback Issues**: Verify signature verification
- **Environment Variables**: Ensure all required keys are set

Your SkipCash backend integration is now ready! 🎉 