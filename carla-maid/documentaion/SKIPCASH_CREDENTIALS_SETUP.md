# SkipCash Credentials Setup Guide

## 🔑 **Required Credentials**

Based on the [SkipCash Integration Manual](https://skipcash.app/assets/doc/SkipCashIntegrationManual.pdf), you need the following credentials:

### **Sandbox Environment:**
1. **Client ID** - From Sandbox → Credentials page
2. **Key ID** - From Sandbox → Credentials page, column "Id"
3. **Key Secret** - From Sandbox → Credentials page, column "Secret Key"
4. **Webhook Key** - From Sandbox → Credentials page

### **Production Environment:**
1. **Client ID** - From Production → Credentials page
2. **Key ID** - From Production → Credentials page, column "Id"
3. **Key Secret** - From Production → Credentials page, column "Secret Key"
4. **Webhook Key** - From Production → Credentials page

## 📋 **How to Get Credentials**

### **Step 1: Access SkipCash Merchant Portal**
1. Go to the SkipCash Merchant Portal
2. Login with your merchant account
3. Navigate to the Sandbox environment

### **Step 2: Enable Online Payments**
1. Go to **Online Payments** page
2. Click **"Enable Sandbox"** for testing
3. Click **"Enable Production"** for live payments

### **Step 3: Generate Private Keys**
1. Go to **Sandbox → Credentials** page
2. Click **"Generate New Key"** or similar button
3. Note down the following values:
   - **Client ID**
   - **Key ID** (column "Id")
   - **Key Secret** (column "Secret Key")
   - **Webhook Key**

### **Step 4: Update Configuration**

Update your server configuration with the correct credentials:

```javascript
// In standalone-server.js
const skipCashConfig = {
  production: {
    apiUrl: 'https://api.skipcash.app',
    clientId: 'YOUR_PRODUCTION_CLIENT_ID',
    keyId: 'YOUR_PRODUCTION_KEY_ID',
    secretKey: 'YOUR_PRODUCTION_KEY_SECRET',
    webhookKey: 'YOUR_PRODUCTION_WEBHOOK_KEY'
  },
  sandbox: {
    apiUrl: 'https://skipcashtest.azurewebsites.net',
    clientId: 'YOUR_SANDBOX_CLIENT_ID',
    keyId: 'YOUR_SANDBOX_KEY_ID',
    secretKey: 'YOUR_SANDBOX_KEY_SECRET',
    webhookKey: 'YOUR_SANDBOX_WEBHOOK_KEY'
  },
  isTestMode: true
};
```

## 🔧 **API Implementation**

### **Correct API Endpoint:**
- **URL**: `https://skipcashtest.azurewebsites.net/api/v1/payments`
- **Method**: POST
- **Authorization**: HMAC-SHA256 signature

### **Request Format:**
```json
{
  "uid": "unique-identifier",
  "keyId": "your-key-id",
  "amount": "100.00",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "123456789",
  "email": "john@example.com",
  "street": "123 Main St",
  "city": "Doha",
  "state": "QA",
  "country": "QA",
  "postalCode": "12345",
  "transactionId": "your-order-id",
  "custom1": "optional-custom-field"
}
```

### **Authorization Header:**
The signature is calculated using HMAC-SHA256 with the Key Secret:
1. Combine all non-empty fields in order: `Uid=value,KeyId=value,Amount=value,...`
2. Calculate HMAC-SHA256 hash
3. Convert to base64
4. Send as Authorization header

## 🧪 **Testing**

### **Test Payment Creation:**
```bash
curl -X POST http://localhost:4000/api/skipcash/test-payment
```

### **Test API Configuration:**
```bash
curl http://localhost:4000/api/skipcash/test
```

## 📞 **Support**

- **Email**: support@skipcash.com
- **Documentation**: [SkipCash Integration Manual](https://skipcash.app/assets/doc/SkipCashIntegrationManual.pdf)

## ⚠️ **Important Notes**

1. **Never expose Key Secret** in frontend code
2. **Always calculate signatures on backend**
3. **Use HTTPS in production**
4. **Test thoroughly in sandbox before going live**
5. **Keep credentials secure and never commit to Git**

## 🔄 **Next Steps**

1. **Get your credentials** from SkipCash Merchant Portal
2. **Update the configuration** with your actual credentials
3. **Test the payment flow** in sandbox
4. **Deploy to production** when ready 