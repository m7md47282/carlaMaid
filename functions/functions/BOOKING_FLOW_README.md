# Booking Flow & Database Integration

## Overview
This document describes the new booking flow that integrates Firebase Firestore database with the existing SkipCash payment system and Google Forms.

## Database Schema

### Bookings Collection
The `bookings` collection stores all booking information with the following structure:

```typescript
interface BookingRecord {
    orderId: string;           // Unique order identifier
    paymentId?: string;        // SkipCash payment ID
    transactionId?: string;    // SkipCash transaction ID
    isPaid: boolean;          // Payment status
    address: string;          // Service address
    customerName: string;     // Customer name
    customerEmail: string;    // Customer email
    customerPhone: string;    // Customer phone
    scheduledDate: string;    // Scheduled service date
    scheduledTime: string;    // Scheduled service time
    hours: number;            // Service duration
    materials: boolean;       // Materials included
    cleaners: number;         // Number of cleaners
    serviceType: string;      // Type of service
    total?: number;           // Service total cost
    paymentMethod?: string;   // Payment method
    createdAt: Timestamp;     // Creation timestamp
    updatedAt: Timestamp;     // Last update timestamp
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}
```

## New API Endpoints

### 1. Check Payment API
**Endpoint:** `POST /api/check-payment`

**Purpose:** Called by frontend after successful payment to complete the booking process.

**Request Body:**
```json
{
    "orderId": "ORDER_1234567890_abc123",
    "paymentId": "PAY_12345",
    "transactionId": "TXN_67890",
    "statusId": 2
}
```

**Response:**
```json
{
    "success": true,
    "message": "Payment successful and booking completed",
    "data": {
        "orderId": "ORDER_1234567890_abc123",
        "paymentId": "PAY_12345",
        "transactionId": "TXN_67890",
        "isPaid": true,
        "status": "paid_and_confirmed",
        "googleFormSubmitted": true
    }
}
```

## Complete Booking Flow

### Step 1: Create Booking
1. Frontend sends booking request to `/book` endpoint
2. Backend generates unique `orderId`
3. **NEW:** Booking information is saved to Firestore database
4. If payment is required:
   - SkipCash payment is created
   - Payment URL is returned to frontend
   - Frontend redirects user to payment page
5. If no payment required:
   - Booking is submitted directly to Google Form
   - Database status is updated to 'confirmed'

### Step 2: Payment Processing
1. User completes payment on SkipCash
2. SkipCash redirects to success/cancel URL with payment details
3. Frontend extracts payment information from URL parameters

### Step 3: Complete Booking (NEW)
1. Frontend calls `/api/check-payment` with:
   - `orderId` from the booking
   - `paymentId` from SkipCash
   - `transactionId` from SkipCash
   - `statusId` from SkipCash
2. Backend:
   - Retrieves booking from database using `orderId`
   - Updates payment information in database
   - Sets `isPaid` flag based on `statusId`
   - Submits complete booking to Google Form
   - Returns success response

## Database Operations

### Create Booking
```typescript
await databaseService.createBooking(bookingData);
```

### Retrieve Booking
```typescript
const booking = await databaseService.getBookingByOrderId(orderId);
```

### Update Payment Info
```typescript
await databaseService.updatePaymentInfo(orderId, paymentId, transactionId, isPaid);
```

### Update Status
```typescript
await databaseService.updateBookingStatus(orderId, 'confirmed');
```

## Frontend Integration

### After Successful Payment
The frontend should call the check payment API:

```typescript
// Extract payment details from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const orderId = urlParams.get('orderId');
const paymentId = urlParams.get('paymentId');
const transactionId = urlParams.get('transactionId');
const statusId = urlParams.get('statusId');

// Call backend to complete booking
const response = await fetch('/api/check-payment', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        orderId,
        paymentId,
        transactionId,
        statusId: parseInt(statusId)
    })
});

const result = await response.json();
if (result.success) {
    // Booking completed successfully
    console.log('Booking completed:', result.data);
} else {
    // Handle error
    console.error('Booking failed:', result.error);
}
```

## Benefits of New Flow

1. **Data Persistence:** All booking information is stored in Firestore
2. **Payment Tracking:** Payment IDs and transaction IDs are linked to bookings
3. **Status Management:** Clear booking status tracking throughout the process
4. **Data Integrity:** Complete booking information is available for Google Form submission
5. **Audit Trail:** Full history of booking creation and payment updates
6. **Scalability:** Database can handle multiple concurrent bookings efficiently

## Testing

### Database Connection Test
Run the test script to verify database connectivity:

```bash
cd functions/functions
node test-database.js
```

### API Testing
Test the new endpoints using tools like Postman or curl:

```bash
# Test check payment endpoint
curl -X POST http://localhost:5001/your-project/us-central1/checkPayment \
  -H "Content-Type: application/json" \
  -d '{
    "orderId": "TEST_ORDER_123",
    "paymentId": "TEST_PAY_123",
    "transactionId": "TEST_TXN_123",
    "statusId": 2
  }'
```

## Error Handling

The system includes comprehensive error handling:
- Database connection failures
- Missing booking records
- Invalid payment data
- Google Form submission failures
- Network timeouts

All errors are logged with structured data for debugging and monitoring.

## Security Considerations

1. **CORS Protection:** All endpoints include CORS middleware
2. **Input Validation:** All request parameters are validated
3. **Database Security:** Firestore security rules should be configured
4. **Payment Verification:** SkipCash signatures are verified for webhooks
5. **Rate Limiting:** Consider implementing rate limiting for production use
