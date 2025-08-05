# Your Google Form Integration

## Your Google Form Details

**Form URL:** `https://docs.google.com/forms/u/0/d/e/1FAIpQLSeouZn9dc038aSnDj40SGjGz2uWEbPqV17SAvUHqaW4483yew/formResponse`

## Field Mappings

Based on your curl command, here are the field mappings for your Google Form:

| Field | Entry ID | Description | Data Type |
|-------|----------|-------------|-----------|
| Order ID | `entry.1011936317` | Unique booking identifier | Text |
| Payment ID | `entry.358076297` | Payment order ID | Text |
| Is Paid | `entry.166685531` | Payment status (true/false) | Boolean |
| Address | `entry.1609292890` | Service address | Text |
| Customer Name | `entry.1390915916` | Customer's full name | Text |
| Customer Email | `entry.1883668962` | Customer's email address | Text |
| Customer Phone | `entry.994665389` | Customer's phone number | Text |
| Scheduled Date | `entry.2055873333` | Service date | Date |
| Scheduled Time | `entry.1510790817` | Service time | Time |
| Hours | `entry.1482962453` | Number of hours | Number |
| Materials | `entry.1942996151` | Materials included | Text |
| Cleaners | `entry.1410396487` | Number of cleaners | Number |

## Required Google Form Fields

Your form also requires these additional fields for proper submission:

| Field | Value | Description |
|-------|-------|-------------|
| `dlut` | Current timestamp | Form timestamp |
| `fvv` | `1` | Form validation |
| `partialResponse` | `[null,null,"3689697000725477937"]` | Form response data |
| `pageHistory` | `0` | Page history |
| `fbzx` | `3689697000725477937` | Form identifier |
| `submissionTimestamp` | Current timestamp | Submission timestamp |

## Data Flow

### 1. Regular Booking (No Payment)
```
Customer creates booking
         ↓
Data saved to Google Form with:
- orderId: [booking_id]
- paymentId: [empty]
- isPaid: false
- All other booking details
```

### 2. Paid Booking
```
Customer creates booking with payment
         ↓
Data saved to Google Form with:
- orderId: [booking_id]
- paymentId: [payment_order_id]
- isPaid: true
- All other booking details
```

## Configuration

The system is already configured with your Google Form details in `standalone-server.js`:

```javascript
const googleFormConfig = {
  formUrl: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeouZn9dc038aSnDj40SGjGz2uWEbPqV17SAvUHqaW4483yew/formResponse',
  formFields: {
    orderId: 'entry.1011936317',
    paymentId: 'entry.358076297',
    isPaid: 'entry.166685531',
    address: 'entry.1609292890',
    customerName: 'entry.1390915916',
    customerEmail: 'entry.1883668962',
    customerPhone: 'entry.994665389',
    scheduledDate: 'entry.2055873333',
    scheduledTime: 'entry.1510790817',
    hours: 'entry.1482962453',
    materials: 'entry.1942996151',
    cleaners: 'entry.1410396487',
    // Additional required fields...
  }
};
```

## Testing

### 1. Test Direct Form Submission
```bash
cd carla-maid/production
node test-your-google-form.js
```

### 2. Test Backend Integration
```bash
# Start your backend server
npm start

# In another terminal, test the integration
node test-your-google-form.js
```

### 3. Test Through Application
1. Go to your booking form
2. Fill out the form
3. Complete a booking (with or without payment)
4. Check your Google Form responses

## Expected Data in Google Form

### Regular Booking Example:
```
Order ID: CARLA_BOOKING_1234567890_ABC123
Payment ID: [empty]
Is Paid: false
Address: 123 Main St, Doha, Qatar
Customer Name: John Doe
Customer Email: john@example.com
Customer Phone: +974 1234 5678
Scheduled Date: 2024-01-15
Scheduled Time: 10:00 AM
Hours: 3
Materials: has materials
Cleaners: 2
```

### Paid Booking Example:
```
Order ID: CARLA_BOOKING_1234567890_ABC123
Payment ID: CARLA_PAYMENT_1234567890_XYZ789
Is Paid: true
Address: 123 Main St, Doha, Qatar
Customer Name: John Doe
Customer Email: john@example.com
Customer Phone: +974 1234 5678
Scheduled Date: 2024-01-15
Scheduled Time: 10:00 AM
Hours: 3
Materials: has materials
Cleaners: 2
```

## Troubleshooting

### Common Issues:

1. **Form not receiving data**
   - Check that all required fields are being sent
   - Verify the form URL is correct
   - Check network connectivity

2. **Missing fields in responses**
   - Ensure all field IDs match your form
   - Check that data is being formatted correctly
   - Verify required Google Form fields are included

3. **Payment data not showing**
   - Check that payment order ID is being passed correctly
   - Verify payment status is being set properly
   - Ensure payment data persistence is working

### Debug Steps:

1. **Check server logs** for Google Form submission errors
2. **Test direct form submission** using the test script
3. **Verify field mappings** match your form exactly
4. **Check Google Form responses** to see what data is received
5. **Test with real booking data** through your application

## Monitoring

### Logs to Watch:
- Google Form submission success/failure
- Field mapping errors
- Payment data retrieval issues
- Booking creation with Google Form integration

### Success Indicators:
- Data appears in Google Form responses
- All required fields are populated
- Payment status is correctly reflected
- No errors in server logs

## Next Steps

1. **Test the integration** using the provided test script
2. **Create a real booking** through your application
3. **Check your Google Form responses** to verify data
4. **Set up Google Sheets** for better data management
5. **Monitor the integration** for any issues

Your Google Form integration is now configured and ready to receive booking data automatically! 