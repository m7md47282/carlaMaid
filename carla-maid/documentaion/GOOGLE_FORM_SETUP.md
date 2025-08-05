# Google Form Integration Setup Guide

This guide will help you set up Google Form integration to automatically save booking data from your Carla Maid application.

## Prerequisites

- A Google account
- Access to Google Forms
- Your Carla Maid application running

## Step 1: Create a Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click "Create a new form"
3. Name your form "Carla Maid Bookings" or similar
4. Add the following fields to your form:

### Required Fields

| Field Type | Field Name | Description |
|------------|------------|-------------|
| Short answer | Customer Name | Customer's full name |
| Short answer | Customer Email | Customer's email address |
| Short answer | Customer Phone | Customer's phone number |
| Paragraph | Address | Service address |
| Short answer | Service Type | Type of service (cleaning, etc.) |
| Short answer | Number of Cleaners | Number of cleaners needed |
| Short answer | Hours | Number of hours |
| Multiple choice | Materials Included | Yes/No for materials |
| Short answer | Total Amount | Total booking amount |
| Short answer | Payment Method | Payment method used |
| Multiple choice | Is Paid | Yes/No for payment status |
| Short answer | Payment Status | Payment status details |
| Short answer | Payment Order ID | Payment order ID |
| Short answer | Scheduled Date | Scheduled service date |
| Short answer | Scheduled Time | Scheduled service time |
| Short answer | Booking ID | Unique booking identifier |
| Short answer | Submission Date | Date when booking was submitted |

## Step 2: Get Form Field IDs

1. In your Google Form, click the three dots menu (⋮) in the top right
2. Select "Get pre-filled link"
3. Fill in any field with test data
4. Click "Get link"
5. Copy the URL from your browser
6. The URL will contain field IDs like `entry.1234567890`

### Example URL Structure:
```
https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse?entry.1234567890=Test&entry.1234567891=test@example.com&...
```

## Step 3: Update Configuration

1. Open `carla-maid/production/standalone-server.js`
2. Find the `googleFormConfig` section (around line 50)
3. Update the configuration with your actual values:

```javascript
const googleFormConfig = {
  formUrl: 'https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/formResponse',
  formFields: {
    customerName: 'entry.1234567890', // Replace with your actual field ID
    customerEmail: 'entry.1234567891',
    customerPhone: 'entry.1234567892',
    address: 'entry.1234567893',
    serviceType: 'entry.1234567894',
    cleaners: 'entry.1234567895',
    hours: 'entry.1234567896',
    materials: 'entry.1234567897',
    total: 'entry.1234567898',
    paymentMethod: 'entry.1234567899',
    isPaid: 'entry.1234567900',
    paymentStatus: 'entry.1234567901',
    paymentOrderId: 'entry.1234567902',
    scheduledDate: 'entry.1234567903',
    scheduledTime: 'entry.1234567904',
    bookingId: 'entry.1234567905',
    submissionDate: 'entry.1234567906'
  }
};
```

## Step 4: Environment Variables (Optional)

You can also set the Google Form URL using environment variables:

```bash
export GOOGLE_FORM_URL="https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"
```

## Step 5: Install Dependencies

Make sure the required dependencies are installed:

```bash
cd carla-maid/production
npm install form-data
```

## Step 6: Test the Integration

1. Start your backend server:
   ```bash
   cd carla-maid/production
   npm start
   ```

2. Create a test booking through your application

3. Check your Google Form responses to verify data is being saved

## Step 7: View Form Responses

1. In your Google Form, click "Responses" tab
2. Click the green spreadsheet icon to create a Google Sheets response sheet
3. All booking data will automatically appear in the spreadsheet

## Troubleshooting

### Common Issues

1. **Form not receiving data**: Check that field IDs are correct
2. **Missing fields**: Ensure all required fields are added to the form
3. **CORS errors**: Google Forms may have CORS restrictions, but the backend handles this
4. **Network errors**: Check your internet connection and form URL

### Debug Steps

1. Check server logs for Google Form submission errors
2. Verify form URL is accessible
3. Test form submission manually
4. Check field IDs match your form

## Data Flow

1. Customer creates booking in your application
2. Backend creates booking record
3. Backend automatically submits data to Google Form
4. Data appears in Google Form responses
5. Data is also saved to Google Sheets (if configured)

## Security Notes

- Google Form URLs are public by design
- Form data is stored on Google's servers
- Consider data privacy requirements for your region
- Form responses are visible to anyone with the form link

## Customization

You can customize the form fields and data structure by:

1. Adding new fields to your Google Form
2. Updating the `formFields` configuration
3. Modifying the data transformation in the backend
4. Adding validation rules

## Support

If you encounter issues:

1. Check the server logs for error messages
2. Verify your Google Form configuration
3. Test with a simple form submission
4. Ensure all dependencies are installed

## Example Form Structure

Here's a recommended form structure:

```
Carla Maid Booking Form
├── Customer Information
│   ├── Customer Name (Short answer)
│   ├── Customer Email (Short answer)
│   └── Customer Phone (Short answer)
├── Service Details
│   ├── Address (Paragraph)
│   ├── Service Type (Short answer)
│   ├── Number of Cleaners (Short answer)
│   ├── Hours (Short answer)
│   └── Materials Included (Multiple choice: Yes/No)
├── Payment Information
│   ├── Total Amount (Short answer)
│   ├── Payment Method (Short answer)
│   ├── Is Paid (Multiple choice: Yes/No)
│   ├── Payment Status (Short answer)
│   └── Payment Order ID (Short answer)
├── Scheduling
│   ├── Scheduled Date (Short answer)
│   └── Scheduled Time (Short answer)
└── System Information
    ├── Booking ID (Short answer)
    └── Submission Date (Short answer)
```

This setup will automatically capture all booking data and store it in your Google Form for easy management and analysis. 