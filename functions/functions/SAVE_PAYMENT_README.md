# Save Payment to Google Form - Implementation Guide

## Overview

The `savePayment` function has been implemented to save booking information to Google Forms when payments are completed. This integration ensures that all payment and booking data is automatically captured in your Google Form for tracking and management purposes.

## Function Details

**Endpoint:** `/savePayment`  
**Method:** POST  
**Purpose:** Save payment and booking information to Google Form

## Request Format

```json
{
  "orderId": "string",
  "transactionId": "string", 
  "statusId": "string",
  "bookingInfo": {
    "customerName": "string",
    "customerEmail": "string",
    "customerPhone": "string",
    "address": "string",
    "scheduledDate": "string",
    "scheduledTime": "string",
    "hours": "number",
    "materials": "boolean",
    "cleaners": "number"
  }
}
```

### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderId` | string | ✅ | Unique order identifier |
| `transactionId` | string | ✅ | Payment transaction ID from SkipCash |
| `statusId` | string | ✅ | Payment status ID (2 = paid, 4 = failed, etc.) |
| `bookingInfo.customerName` | string | ✅ | Customer's full name |
| `bookingInfo.customerEmail` | string | ✅ | Customer's email address |
| `bookingInfo.customerPhone` | string | ✅ | Customer's phone number |
| `bookingInfo.address` | string | ✅ | Service address |
| `bookingInfo.scheduledDate` | string | ✅ | Scheduled service date (YYYY-MM-DD) |
| `bookingInfo.scheduledTime` | string | ✅ | Scheduled service time (HH:MM) |
| `bookingInfo.hours` | number | ✅ | Number of service hours |
| `bookingInfo.materials` | boolean | ✅ | Whether customer provides materials |
| `bookingInfo.cleaners` | number | ✅ | Number of cleaners requested |

## Response Format

### Success Response (200)
```json
{
  "success": true,
  "message": "Payment and booking info saved successfully",
  "data": {
    "orderId": "CARLA_1234567890_ABC123",
    "transactionId": "TXN_1234567890_ABC123",
    "statusId": "2",
    "isPaid": true,
    "googleFormSubmitted": true
  }
}
```

### Error Responses

#### Bad Request (400)
```json
{
  "success": false,
  "error": "Missing required fields: orderId, transactionId, statusId, and bookingInfo are required"
}
```

#### Method Not Allowed (405)
```json
{
  "success": false,
  "error": "Method not allowed",
  "allowedMethods": ["POST"]
}
```

#### Internal Server Error (500)
```json
{
  "success": false,
  "error": "Failed to save booking info to Google Form",
  "details": "Error details here"
}
```

## Frontend Integration

The frontend Angular service already includes the `savePayment` method:

```typescript
savePayment({orderId, transactionId, statusId, bookingInfo}: {
  orderId: string, 
  transactionId: string, 
  statusId: string, 
  bookingInfo: any
}): Observable<BackendPaymentResponse> {
  if(orderId && transactionId && statusId) {
    const apiUrl = `${this.backendApiUrl}/payment/save-booking`;
    return this.http.post<BackendPaymentResponse>(apiUrl, { 
      orderId, 
      transactionId, 
      statusId, 
      bookingInfo 
    });
  } else {
    return throwError(() => new Error('Invalid payment data'));
  }
}
```

## Testing

### Local Testing

1. Start the Firebase Functions emulator:
   ```bash
   cd functions/functions
   npm run serve
   ```

2. Run the test script:
   ```bash
   node test-save-payment.js
   ```

### Test Scenarios

The test script covers:
- ✅ Successful payment with complete booking info
- ✅ Successful payment with minimal booking info  
- ✅ Failed payment (still saves to form but marks as unpaid)
- ✅ Invalid data validation
- ✅ Wrong HTTP method validation

## Google Form Integration

The function automatically:
1. Maps the booking data to Google Form field IDs
2. Submits the data via POST request
3. Handles timeouts and retries
4. Logs all operations for debugging

## Configuration

Google Form configuration is in `src/config.ts`:

```typescript
export const googleFormConfig: GoogleFormConfig = {
  formUrl: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeouZn9dc038aSnDj40SGjGz2uWEbPqV17SAvUHqaW4483yew/formResponse',
  formFields: {
    orderId: 'entry.1011936317',
    paymentId: 'entry.358076297',
    isPaid: 'entry.166685531',
    // ... other fields
  },
  timeout: 10,
  retryAttempts: 3
};
```

## Deployment

### Local Development
- Uses Firebase Functions emulator
- Base URL: `http://127.0.0.1:5001/carlamaid-9/us-central1`

### Production
- Deploy to Firebase Functions
- Base URL: `https://us-central1-carlamaid-9.cloudfunctions.net/`

## Monitoring

### Logs
All operations are logged with structured data:
- Payment submission attempts
- Google Form responses
- Error details
- Success confirmations

### Health Checks
Monitor the `/health` endpoint to ensure the service is running:
```bash
curl https://us-central1-carlamaid-9.cloudfunctions.net/health
```

## Troubleshooting

### Common Issues

1. **Google Form submission fails**
   - Check form URL and field IDs in config
   - Verify form is accessible
   - Check timeout settings

2. **Missing required fields**
   - Ensure all required fields are provided
   - Validate data types (especially numbers)

3. **CORS issues**
   - CORS middleware is already configured
   - Check if frontend domain is allowed

### Debug Steps

1. Check Firebase Functions logs:
   ```bash
   firebase functions:log
   ```

2. Verify Google Form configuration
3. Test with the provided test script
4. Check network requests in browser dev tools

## Security Considerations

- Input validation on all fields
- CORS protection enabled
- Method validation (POST only)
- Error handling without exposing internal details
- Logging for audit trails

## Next Steps

1. Test the integration with real payment scenarios
2. Monitor Google Form submissions
3. Set up alerts for failed submissions
4. Consider implementing retry logic for failed submissions
5. Add analytics tracking for successful submissions
