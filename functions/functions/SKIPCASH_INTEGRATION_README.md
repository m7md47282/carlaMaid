# SkipCash Integration Documentation

This document provides comprehensive information about the SkipCash payment gateway integration in the CarlaMaid Firebase Functions backend.

## Overview

The SkipCash integration allows customers to make secure payments for cleaning services through the CarlaMaid platform. The integration follows the official [SkipCash Node.js documentation](https://dev.skipcash.app/doc/api-integration/nodejs/) and implements all required security measures.

## Architecture

```
Frontend (Angular) → Firebase Functions → SkipCash API → Payment Processing
```

## Configuration

### Environment Setup

The SkipCash configuration is managed in `src/config.ts` with separate settings for sandbox and production environments:

```typescript
export const skipCashConfig: SkipCashConfig = {
    isTestMode: false, // Set to true for sandbox testing
    
    production: {
        apiUrl: 'https://api.skipcash.app',
        clientId: 'your-production-client-id',
        apiKey: 'your-production-api-key',
        secretKey: 'your-production-secret-key',
        webhookKey: 'your-production-webhook-key'
    },
    
    sandbox: {
        apiUrl: 'https://skipcashtest.azurewebsites.net',
        clientId: 'your-sandbox-client-id',
        apiKey: 'your-sandbox-api-key',
        secretKey: 'your-sandbox-secret-key',
        webhookKey: 'your-sandbox-webhook-key'
    }
};
```

### Required Credentials

- **Client ID**: Unique identifier for your merchant account
- **API Key**: Public key for API authentication
- **Secret Key**: Private key for signature generation
- **Webhook Key**: Key for webhook signature verification

## API Endpoints

### 1. Create Payment (`/book`)

**Method**: POST  
**Purpose**: Creates a new booking and initiates payment through SkipCash

**Request Body**:
```json
{
    "customer_name": "John Doe",
    "customer_email": "john@example.com",
    "customer_phone": "77777777",
    "address": "123 Main St, Doha",
    "service_type": "Cleaning Service",
    "cleaners": 1,
    "hours": 4,
    "materials": true,
    "total": 160,
    "payment_method": "pay_now",
    "scheduled_date": "2025-08-27T21:00:00.000Z",
    "scheduled_time": "08:30 am - 12:30 pm (Morning)"
}
```

**Response**:
```json
{
    "success": true,
    "message": "Payment created successfully",
    "requiresRedirect": true,
    "redirectUrl": "https://skipcash.app/pay/...",
    "data": {
        "orderId": "CARLA_1755546679290_FFEU4C3KFNK",
        "paymentUrl": "https://skipcash.app/pay/...",
        "paymentData": { ... }
    }
}
```

### 2. Payment Success Callback (`/api/booking/success`)

**Method**: GET  
**Purpose**: Handles successful payment returns from SkipCash

**Query Parameters**:
- `orderId`: The order ID from the original booking
- `status`: Payment status (success/paid)
- `paymentId`: SkipCash payment ID
- `transactionId`: SkipCash transaction ID

### 3. Payment Cancel Callback (`/api/booking/cancel`)

**Method**: GET  
**Purpose**: Handles cancelled payment returns from SkipCash

**Query Parameters**:
- `orderId`: The order ID from the original booking
- `status`: Payment status (cancelled/canceled)

### 4. SkipCash Webhook (`/api/skipcash/webhook`)

**Method**: POST  
**Purpose**: Receives payment status updates from SkipCash

**Headers**:
- `Authorization`: HMAC-SHA256 signature for webhook verification

**Body**:
```json
{
    "PaymentId": "payment-id",
    "Amount": "160.00",
    "StatusId": 2,
    "TransactionId": "transaction-id",
    "Custom1": "Cleaning Service - 4 hours"
}
```

## Payment Flow

### 1. Booking Creation
1. Customer submits booking form
2. System generates unique order ID (format: `CARLA_{timestamp}_{random}`)
3. Booking is saved to database
4. If payment is required (`payment_method: "pay_now"`), SkipCash payment is initiated

### 2. Payment Processing
1. Payment data is formatted according to SkipCash API specification
2. HMAC-SHA256 signature is generated using secret key
3. Payment request is sent to SkipCash API
4. Customer is redirected to SkipCash payment page

### 3. Payment Completion
1. Customer completes payment on SkipCash
2. SkipCash redirects to success/cancel URL
3. System processes the callback and updates booking status
4. Google Form is updated with payment information

### 4. Webhook Processing
1. SkipCash sends webhook with payment status
2. System verifies webhook signature
3. Payment status is updated in database
4. Google Form is updated accordingly

## Security Features

### Signature Generation

The system generates HMAC-SHA256 signatures for all API requests to SkipCash:

```typescript
const signatureData = `Uid=${uid},KeyId=${keyId},Amount=${amount},...`;
const hmac = crypto.createHmac('sha256', secretKey);
hmac.update(signatureData);
const signature = hmac.digest('base64');
```

### Webhook Verification

All incoming webhooks are verified using the webhook key to ensure authenticity:

```typescript
const isValidSignature = skipCashService.verifyWebhookSignature(webhookData, authHeader);
```

### Required Fields Validation

The system validates all required fields before processing payments:
- Customer name, email, phone
- Service details and pricing
- Address information
- Scheduled date and time

## Testing

### Test Script

Use the provided test script to verify your SkipCash integration:

```bash
cd functions/functions
node test-skipcash.js
```

**Note**: Update the test script with your actual credentials before running.

### Test Cards

SkipCash provides test cards for sandbox testing. Refer to their documentation for available test card numbers.

### Sandbox vs Production

- **Sandbox**: Use for development and testing
- **Production**: Use for live transactions

Toggle between environments by setting `isTestMode` in the configuration.

## Error Handling

### Common Error Scenarios

1. **Missing Required Fields**: Returns 400 with specific field names
2. **Invalid Signature**: Returns 401 for webhook verification failures
3. **SkipCash API Errors**: Returns 500 with error details from SkipCash
4. **Database Errors**: Returns 500 with internal error message

### Error Response Format

```json
{
    "success": false,
    "error": "Error description",
    "details": "Additional error information"
}
```

## Monitoring and Logging

### Firebase Functions Logs

All payment operations are logged with structured data for easy monitoring:

```typescript
logger.info('Creating SkipCash payment', {
    orderId: paymentData.order_id,
    amount: paymentData.amount,
    customerEmail: paymentData.customer_email
});
```

### Health Check Endpoint

Monitor the SkipCash service health:

```bash
GET /skipcash/health
```

Response includes configuration status and service health information.

## Deployment

### Firebase Functions Deployment

```bash
cd functions
npm run deploy
```

### Environment Configuration

Ensure your production credentials are properly configured before deploying to production.

### CORS Configuration

The API endpoints are configured to accept requests from the CarlaMaid frontend domain.

## Troubleshooting

### Common Issues

1. **Signature Mismatch**: Verify your secret key and signature generation logic
2. **Missing Fields**: Ensure all required fields are present in the request
3. **Webhook Failures**: Check webhook key configuration and signature verification
4. **Payment Redirect Issues**: Verify return URL configuration

### Debug Mode

Enable detailed logging by setting appropriate log levels in Firebase Functions configuration.

### Support

For SkipCash-specific issues, refer to their official documentation and support channels.

## Compliance and Security

- All payment data is transmitted over HTTPS
- Sensitive credentials are stored securely in Firebase Functions configuration
- Webhook signatures are verified for all incoming requests
- Customer data is handled according to privacy regulations

## Version History

- **v1.0.0**: Initial SkipCash integration
- **v1.1.0**: Enhanced error handling and logging
- **v1.2.0**: Improved signature generation and validation
- **v1.3.0**: Added comprehensive testing and documentation

## References

- [SkipCash Official Documentation](https://dev.skipcash.app/doc/api-integration/nodejs/)
- [Firebase Functions Documentation](https://firebase.google.com/docs/functions)
- [Node.js Crypto Module](https://nodejs.org/api/crypto.html)

---

For additional support or questions about this integration, please refer to the SkipCash documentation or contact the development team.


