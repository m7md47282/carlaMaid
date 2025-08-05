# SkipCash Sandbox Integration Setup

## ✅ **SkipCash Sandbox Environment**

**Sandbox URL:** `https://skipcashtest.azurewebsites.net/`

This is the official SkipCash test environment for development and testing.

## 🔧 **Updated Configuration**

### 1. Environment Configuration
Your Angular environment is now configured to use the sandbox:

```typescript
// src/environments/environment.ts
skipCash: {
    // Production API URL
    apiUrl: 'https://api.skipcash.app',
    // Sandbox/Test API URL
    sandboxApiUrl: 'https://skipcashtest.azurewebsites.net',
    // Use sandbox for development/testing
    isTestMode: true,
    // ... other config
}
```

### 2. Payment Service Updates
The payment service now automatically uses the correct API URL based on test mode.

## 🧪 **Testing with SkipCash Sandbox**

### Step 1: Get Sandbox Credentials
Contact SkipCash support to get your sandbox API credentials:
- **Email:** support@skipcash.app
- **Subject:** "Sandbox API Credentials Request"
- **Include:** Your business details and intended use

### Step 2: Test Payment Flow
1. **Create a test booking** in your Angular app
2. **Verify WooCommerce order creation**
3. **Test SkipCash payment redirect**
4. **Check payment callback handling**

### Step 3: Test Endpoints

#### Test SkipCash Sandbox API:
```bash
# Test payment creation
curl -X POST "https://skipcashtest.azurewebsites.net/payment/create" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_SANDBOX_API_KEY" \
  -d '{
    "amount": 100,
    "currency": "QAR",
    "order_id": "TEST_ORDER_001",
    "customer_name": "Test Customer",
    "customer_email": "test@example.com",
    "customer_phone": "123456789",
    "description": "Test payment",
    "return_url": "http://localhost:4200/book-now/success",
    "cancel_url": "http://localhost:4200/book-now/cancel"
  }'
```

#### Test WooCommerce API:
```bash
# Test products endpoint
curl -X GET "https://carlamaid.qa/wp-json/wc/v3/products?consumer_key=YOUR_KEY&consumer_secret=YOUR_SECRET"
```

## 📋 **Sandbox Features**

### What's Available in Sandbox:
- ✅ **Test payments** without real money
- ✅ **Full payment flow** simulation
- ✅ **Callback testing** for order status updates
- ✅ **Error handling** testing
- ✅ **Integration testing** with WooCommerce

### Sandbox Limitations:
- ❌ **No real money** transactions
- ❌ **Limited transaction history**
- ❌ **Test data only**

## 🔄 **Production vs Sandbox**

| Feature | Sandbox | Production |
|---------|---------|------------|
| API URL | `https://skipcashtest.azurewebsites.net` | `https://api.skipcash.app` |
| Payments | Test only | Real money |
| Callbacks | Test mode | Live mode |
| Credentials | Sandbox keys | Production keys |

## 🚀 **Next Steps**

### 1. **Get Sandbox Credentials**
- Contact SkipCash: support@skipcash.app
- Request sandbox API credentials
- Test the integration

### 2. **Test Complete Flow**
```bash
# Test your Angular app
ng serve

# Test booking flow
1. Fill booking form
2. Select "Pay Now"
3. Verify WooCommerce order creation
4. Check SkipCash redirect
5. Test payment completion
```

### 3. **Verify WooCommerce Integration**
- Ensure WooCommerce REST API is working
- Test order creation from Angular app
- Verify order status updates

### 4. **Production Deployment**
When ready for production:
1. **Change `isTestMode` to `false`**
2. **Use production API credentials**
3. **Update callback URLs to production domain**
4. **Test with real payments**

## 🛠 **Troubleshooting Sandbox**

### Issue 1: "Invalid API Key" in Sandbox
**Solution:**
- Ensure you're using sandbox credentials
- Verify the API key is for test environment
- Check with SkipCash support

### Issue 2: Payment Not Redirecting
**Solution:**
- Check return/cancel URLs are accessible
- Verify sandbox API is responding
- Test with curl first

### Issue 3: Callback Not Working
**Solution:**
- Ensure callback URL is publicly accessible
- Check server can receive POST requests
- Verify signature verification

## 📞 **Support**

### SkipCash Support:
- **Email:** support@skipcash.app
- **Sandbox URL:** https://skipcashtest.azurewebsites.net/
- **Documentation:** Contact for API docs

### Testing Checklist:
- [ ] Sandbox API credentials received
- [ ] WooCommerce REST API working
- [ ] SkipCash plugin installed
- [ ] Test payment flow completed
- [ ] Callback handling verified
- [ ] Error scenarios tested

---

**Note:** The sandbox environment is perfect for testing your integration before going live. Make sure to thoroughly test all scenarios before switching to production. 