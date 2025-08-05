# Skip Cash Payment Gateway Integration Guide

## Overview

This guide provides step-by-step instructions for setting up the Skip Cash payment gateway integration in the Carla Maid website.

## 🚀 **What's Been Implemented**

### 1. **Payment Service** ✅
- **File**: `src/app/shared/services/payment.service.ts`
- **Features**:
  - Create payment orders with Skip Cash
  - Check payment status
  - Handle payment callbacks
  - Generate unique order IDs
  - Validate payment amounts
  - Format amounts for display

### 2. **Book Now Component Integration** ✅
- **File**: `src/app/book-now/book-now.component.ts`
- **Features**:
  - Payment option selection (Pay Now / Pay Later)
  - Payment processing with loading states
  - Error handling for payment failures
  - Analytics tracking for payment events

### 3. **Payment Success & Cancel Pages** ✅
- **Success Page**: `src/app/book-now/payment-success/payment-success.component.ts`
- **Cancel Page**: `src/app/book-now/payment-cancel/payment-cancel.component.ts`
- **Features**:
  - Beautiful UI for payment results
  - Payment status verification
  - Order details display
  - Navigation options

### 4. **Environment Configuration** ✅
- **Files**: `src/environments/environment.ts` & `src/environments/environment.prod.ts`
- **Configuration**:
  - Skip Cash API URL
  - API Keys
  - Return/Cancel URLs
  - Callback URLs

### 5. **Translations** ✅
- **Files**: `public/i18n/en.json` & `public/i18n/ar.json`
- **Features**:
  - Payment processing messages
  - Success/Cancel page content
  - Error messages
  - Bilingual support (English/Arabic)

## 🔧 **Setup Instructions**

### Step 1: Get Skip Cash API Credentials

1. **Register with Skip Cash**:
   - Visit [Skip Cash Developer Portal](https://dev.skipcash.app)
   - Create a merchant account
   - Complete the verification process

2. **Get API Credentials**:
   - API Key
   - Secret Key
   - API Base URL

### Step 2: Update Environment Configuration

Update the environment files with your actual Skip Cash credentials:

```typescript
// src/environments/environment.ts & environment.prod.ts
export const environment = {
  // ... existing config
  skipCash: {
    apiUrl: 'https://api.skipcash.app', // Replace with actual API URL
    apiKey: 'your-actual-api-key', // Replace with your API key
    secretKey: 'your-actual-secret-key', // Replace with your secret key
    returnUrl: 'https://carlamaid.qa/book-now/success',
    cancelUrl: 'https://carlamaid.qa/book-now/cancel',
    callbackUrl: 'https://carlamaid.qa/api/payment/callback'
  }
};
```

### Step 3: Configure Skip Cash Webhook

1. **Set up Webhook URL**:
   - URL: `https://carlamaid.qa/api/payment/callback`
   - Events: `payment.completed`, `payment.failed`, `payment.cancelled`

2. **Verify Webhook Signature**:
   - Implement signature verification in `PaymentService.verifyCallbackSignature()`
   - Follow Skip Cash security documentation

### Step 4: Test the Integration

1. **Development Testing**:
   ```bash
   npm start
   ```
   - Navigate to `/book-now`
   - Fill out the form
   - Select "Pay Now"
   - Test payment flow

2. **Production Testing**:
   - Deploy to production
   - Test with real payment methods
   - Verify webhook callbacks

## 🔒 **Security Considerations**

### 1. **API Key Security**
- Store API keys in environment variables
- Never commit API keys to version control
- Use different keys for development/production

### 2. **Webhook Security**
- Implement signature verification
- Validate all webhook data
- Handle webhook failures gracefully

### 3. **Payment Validation**
- Validate payment amounts
- Check payment status before confirming
- Log all payment events

## 📊 **Analytics Integration**

The integration includes comprehensive analytics tracking:

- **Payment Initiation**: Track when users start payment
- **Payment Success**: Track successful payments
- **Payment Cancellation**: Track cancelled payments
- **Payment Errors**: Track payment failures

## 🛠 **API Endpoints**

### Payment Creation
```typescript
POST /v1/payments/create
{
  "amount": 280,
  "currency": "QAR",
  "order_id": "CARLA_1234567890_ABC123",
  "customer_name": "John Doe",
  "customer_email": "john@example.com",
  "customer_phone": "12345678",
  "description": "Cleaning Service - 2 cleaner(s), 4 hour(s)",
  "return_url": "https://carlamaid.qa/book-now/success",
  "cancel_url": "https://carlamaid.qa/book-now/cancel",
  "callback_url": "https://carlamaid.qa/api/payment/callback"
}
```

### Payment Status Check
```typescript
GET /v1/payments/status/{orderId}
```

## 🔄 **Payment Flow**

1. **User fills booking form**
2. **User selects "Pay Now"**
3. **System creates payment order**
4. **User redirected to Skip Cash**
5. **User completes payment**
6. **Skip Cash redirects to success/cancel page**
7. **System verifies payment status**
8. **Booking confirmed**

## 📱 **Responsive Design**

All payment pages are fully responsive:
- Mobile-friendly design
- Touch-optimized buttons
- Clear payment status indicators
- Loading states and error handling

## 🌐 **Bilingual Support**

Complete bilingual support for:
- Payment processing messages
- Success/cancel page content
- Error messages
- Form labels and buttons

## 🚨 **Error Handling**

Comprehensive error handling for:
- Network failures
- Invalid payment amounts
- API errors
- Webhook failures
- Payment timeouts

## 📈 **Monitoring & Logging**

- Payment success/failure rates
- Average payment processing time
- Error tracking and alerting
- User journey analytics

## 🔧 **Troubleshooting**

### Common Issues:

1. **Payment Creation Fails**:
   - Check API credentials
   - Verify API URL
   - Check network connectivity

2. **Webhook Not Receiving**:
   - Verify webhook URL
   - Check server accessibility
   - Validate webhook signature

3. **Payment Status Not Updating**:
   - Check payment status API
   - Verify order ID format
   - Check API response format

## 📞 **Support**

For technical support:
- Check Skip Cash documentation
- Review server logs
- Test with Skip Cash sandbox
- Contact Skip Cash support

## 🔄 **Updates & Maintenance**

- Regularly update API endpoints
- Monitor for security updates
- Test payment flow monthly
- Update translations as needed

---

**Note**: This integration follows Skip Cash's official API documentation. Always refer to the latest Skip Cash documentation for any API changes or updates. 