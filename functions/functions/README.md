# CarlaMaid Firebase Functions API

This Firebase Functions project provides the backend API for the CarlaMaid cleaning service application.

## Overview

The API handles booking creation with two payment flows:
1. **Paid Bookings**: Creates payment through SkipCash and redirects to payment gateway
2. **Unpaid Bookings**: Directly submits to Google Form for manual processing

## API Endpoints

### 1. Health Check
- **GET** `/health` - API health status

### 2. API Information
- **GET** `/api/info` - API documentation and available endpoints

### 3. Booking Creation
- **POST** `/book` - Create a new booking

#### Request Body (Booking)
```json
{
  "customer_name": "John Doe",
  "customer_email": "john@example.com",
  "customer_phone": "+97412345678",
  "address": "123 Main St, Doha",
  "service_type": "regular_cleaning",
  "cleaners": 2,
  "hours": 4,
  "materials": true,
  "total": 150.00,
  "payment_method": "pay_now",
  "scheduled_date": "2024-01-15",
  "scheduled_time": "09:00"
}
```

#### Payment Flow Logic

**If `payment_method` is "pay_now" and `total` > 0:**
1. Creates payment through SkipCash API
2. Returns payment URL for customer redirect
3. Customer completes payment on SkipCash
4. SkipCash sends webhook notification
5. Webhook updates Google Form with `isPaid: true`

**If `payment_method` is not "pay_now" or `total` is 0:**
1. Directly submits booking to Google Form
2. Sets `isPaid: false`
3. Returns confirmation immediately

### 4. Payment Callbacks
- **GET** `/api/booking/success?orderId={orderId}` - Handle successful payment return
- **GET** `/api/booking/cancel?orderId={orderId}` - Handle cancelled payment return

### 5. SkipCash Webhook
- **POST** `/api/skipcash/webhook` - Handle payment notifications from SkipCash

## Configuration

The API uses configuration from `config.ts` for:
- Google Form settings
- SkipCash API credentials
- Environment-specific configurations

## Services

### GoogleFormService
- Handles form submissions to Google Forms
- Supports both booking creation and payment status updates
- Includes retry logic and error handling

### SkipCashService
- Manages payment creation through SkipCash
- Handles webhook signature verification
- Supports both sandbox and production environments

## Error Handling

All endpoints include comprehensive error handling:
- Input validation
- Service-level error handling
- Proper HTTP status codes
- Detailed error logging

## Logging

Uses Firebase Functions logger for:
- Request tracking
- Error monitoring
- Payment flow debugging
- Performance metrics

## Development

### Prerequisites
- Node.js 18+
- Firebase CLI
- TypeScript

### Setup
1. Install dependencies: `npm install`
2. Configure environment variables
3. Deploy: `firebase deploy --only functions`

### Testing
- Health check: `curl https://your-function-url/health`
- API info: `curl https://your-function-url/api/info`

## Security

- CORS enabled for cross-origin requests
- Webhook signature verification for SkipCash
- Input validation and sanitization
- Proper error handling to prevent information leakage

## Deployment

The functions are deployed to Firebase Functions and can be accessed via the configured domain.
