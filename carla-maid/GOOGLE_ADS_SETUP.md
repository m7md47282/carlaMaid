# Google Ads Tracking Setup Guide for CarlaMaid

## What's Been Implemented

### 1. Google Tag Manager (GTM) Installation ✅
- **GTM ID**: `GTM-KWNZVD3J`
- **Location**: Added to `src/index.html`
- **Status**: Ready for Google Ads conversion tracking

### 2. Analytics Service ✅
- **File**: `src/app/shared/services/analytics.service.ts`
- **Features**:
  - Form submission tracking
  - Phone call tracking
  - Booking completion tracking
  - Button click tracking
  - Scroll depth tracking
  - Page view tracking
  - Custom event tracking

### 3. Page Tracking Service ✅
- **File**: `src/app/shared/services/page-tracking.service.ts`
- **Features**:
  - Automatic page view tracking
  - Scroll depth tracking (25%, 50%, 75%, 90%)
  - Time on page tracking

### 4. Tracking Directives ✅
- **Phone Tracking**: `src/app/shared/directives/phone-track.directive.ts`
- **Button Tracking**: `src/app/shared/directives/button-track.directive.ts`

### 5. Component Integration ✅
- **Book Now Component**: Tracks form submissions and booking completions
- **Contact Us Component**: Tracks contact form submissions
- **App Component**: Initializes page tracking service

## Google Ads Conversion Tracking Setup

### Step 1: Create Conversion Actions in Google Ads

1. **Go to Google Ads** → **Tools & Settings** → **Conversions**
2. **Click "New conversion action"**
3. **Create these conversion actions**:

#### Booking Conversion
- **Name**: "Booking Completed"
- **Category**: "Purchase/Sale"
- **Value**: "Use different values for each conversion"
- **Count**: "One"
- **Click-through conversion window**: 30 days
- **View-through conversion window**: 1 day

#### Contact Form Conversion
- **Name**: "Contact Form Submitted"
- **Category**: "Submit lead form"
- **Value**: "Use the same value for each conversion" ($10)
- **Count**: "One"
- **Click-through conversion window**: 30 days
- **View-through conversion window**: 1 day

#### Phone Call Conversion
- **Name**: "Phone Call"
- **Category**: "Phone calls"
- **Value**: "Use the same value for each conversion" ($15)
- **Count**: "One"
- **Click-through conversion window**: 30 days
- **View-through conversion window**: 1 day

### Step 2: Set Up Google Tag Manager Triggers

1. **Go to Google Tag Manager** → **Triggers** → **New**
2. **Create these triggers**:

#### Booking Conversion Trigger
- **Name**: "Booking Completed"
- **Type**: "Custom Event"
- **Event name**: `booking_complete`

#### Contact Form Trigger
- **Name**: "Contact Form Submitted"
- **Type**: "Custom Event"
- **Event name**: `form_submit`

#### Phone Call Trigger
- **Name**: "Phone Call Clicked"
- **Type**: "Custom Event"
- **Event name**: `phone_call`

### Step 3: Set Up Google Ads Tags in GTM

1. **Go to Google Tag Manager** → **Tags** → **New**
2. **Create these tags**:

#### Google Ads Conversion Tracking Tag
- **Name**: "Google Ads - Booking Conversion"
- **Type**: "Google Ads Conversion Tracking"
- **Conversion ID**: [Your Google Ads Conversion ID]
- **Conversion Label**: [Your Conversion Label]
- **Trigger**: "Booking Completed"
- **Value**: `{{Event Value}}`

#### Repeat for Contact Form and Phone Call conversions

### Step 4: Add Tracking to HTML Templates

#### Phone Number Tracking
Add to phone numbers in your templates:
```html
<a href="tel:974-71236660" appPhoneTrack="974-71236660">974-71236660</a>
```

#### Button Tracking
Add to important buttons:
```html
<button appButtonTrack="book_now" buttonLocation="hero_section">Book Now</button>
<button appButtonTrack="contact_us" buttonLocation="header">Contact Us</button>
```

### Step 5: Test Your Implementation

1. **Use Google Tag Manager Preview Mode**
2. **Test each conversion action**:
   - Submit a booking form
   - Submit a contact form
   - Click a phone number
   - Click tracked buttons

3. **Verify in Google Ads**:
   - Go to **Tools & Settings** → **Conversions**
   - Check if conversions are being recorded

## Remarketing Setup

### Step 1: Create Remarketing Audiences

1. **Go to Google Ads** → **Tools & Settings** → **Audience Manager**
2. **Create these audiences**:

#### Website Visitors
- **Name**: "All Website Visitors"
- **Type**: "Website visitors"
- **Membership duration**: 30 days

#### Booking Page Visitors
- **Name**: "Booking Page Visitors"
- **Type**: "Website visitors"
- **Page**: Contains "book-now"
- **Membership duration**: 30 days

#### Contact Page Visitors
- **Name**: "Contact Page Visitors"
- **Type**: "Website visitors"
- **Page**: Contains "contact-us"
- **Membership duration**: 30 days

### Step 2: Create Remarketing Campaigns

1. **Create Display Campaign** → **Remarketing**
2. **Target your audiences**:
   - All Website Visitors (awareness)
   - Booking Page Visitors (consideration)
   - Contact Page Visitors (conversion)

## Enhanced Ecommerce (Future)

If you add online booking with payment:

1. **Enable Enhanced Ecommerce in Google Analytics**
2. **Track these events**:
   - `add_to_cart`
   - `begin_checkout`
   - `purchase`

## Call Tracking Setup

### Option 1: Google Ads Call Tracking
1. **Go to Google Ads** → **Tools & Settings** → **Call tracking**
2. **Set up call extensions**
3. **Use dynamic phone numbers**

### Option 2: Third-party Call Tracking
Consider services like:
- CallRail
- CallTrackingMetrics
- Marchex

## Performance Monitoring

### Key Metrics to Track:
1. **Conversion Rate**: Bookings / Clicks
2. **Cost per Conversion**: Ad spend / Conversions
3. **Return on Ad Spend (ROAS)**: Revenue / Ad spend
4. **Click-through Rate (CTR)**: Clicks / Impressions

### Regular Tasks:
1. **Weekly**: Check conversion tracking
2. **Monthly**: Review audience performance
3. **Quarterly**: Optimize campaigns based on data

## Troubleshooting

### Common Issues:
1. **Conversions not tracking**: Check GTM triggers and tags
2. **Wrong conversion values**: Verify event parameters
3. **Duplicate conversions**: Check conversion counting settings

### Debug Tools:
1. **Google Tag Manager Preview Mode**
2. **Google Ads Conversion Tracking Debugger**
3. **Browser Developer Tools** → **Network Tab**

## Next Steps

1. **Set up Google Analytics 4** (if not already done)
2. **Create custom audiences** based on user behavior
3. **Implement dynamic remarketing** for personalized ads
4. **Set up automated bidding** strategies
5. **Create A/B tests** for landing pages

## Support

For technical issues:
- Check GTM debug mode
- Verify conversion IDs and labels
- Test in incognito mode
- Contact Google Ads support

---

**Note**: This implementation provides comprehensive tracking for Google Ads campaigns. All conversion events are automatically sent to Google Tag Manager and can be configured to track in Google Ads for conversion optimization and remarketing. 