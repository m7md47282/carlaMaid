# Production Deployment Checklist - Payment Integration

## Pre-Deployment Checks

### ✅ Environment Configuration
- [ ] Environment set to `production: true`
- [ ] Backend API URL points to production domain
- [ ] SkipCash production credentials configured
- [ ] Webhook URLs point to production endpoints
- [ ] Return/Cancel URLs use production domain

### ✅ Security Configuration
- [ ] SkipCash production API keys configured
- [ ] Webhook keys updated for production
- [ ] CORS headers configured for production domains
- [ ] SSL certificates valid for all domains
- [ ] Environment variables properly set

### ✅ Backend Configuration
- [ ] `isTestMode: false` in SkipCash config
- [ ] Production API endpoints configured
- [ ] Webhook verification enabled
- [ ] Error logging configured
- [ ] Health check endpoints working

## Deployment Steps

### 1. Frontend Build
```bash
# Build production version
npm run build:prod

# Verify build output
ls -la dist/carla-maid/
```

### 2. Backend Deployment
```bash
# Start production backend
npm run backend:prod

# Verify backend is running
curl https://api.carlamaid.qa/api/skipcash/health
```

### 3. Domain Configuration
- [ ] DNS records point to production servers
- [ ] SSL certificates installed and valid
- [ ] CDN configuration updated
- [ ] Load balancer configured (if applicable)

### 4. SkipCash Configuration
- [ ] Webhook URL updated in SkipCash dashboard
- [ ] Production API credentials verified
- [ ] Test payment processed successfully
- [ ] Webhook received and processed

## Post-Deployment Verification

### ✅ Payment Flow Testing
- [ ] Booking form loads correctly
- [ ] Payment creation succeeds
- [ ] Redirect to SkipCash works
- [ ] Payment success page loads
- [ ] Payment cancel page loads
- [ ] Webhook processing works

### ✅ API Endpoints
- [ ] `/api/skipcash/health` - Health check
- [ ] `/api/skipcash/payment/create` - Payment creation
- [ ] `/api/payment/status-skip-cash/:orderId` - Status check
- [ ] `/api/payment/callback` - Payment callback

### ✅ Error Handling
- [ ] Invalid payment data handled gracefully
- [ ] Network errors handled properly
- [ ] SkipCash API errors logged
- [ ] User-friendly error messages displayed

### ✅ Monitoring & Logging
- [ ] Payment attempts logged
- [ ] Payment results tracked
- [ ] Webhook processing logged
- [ ] Error conditions captured
- [ ] Performance metrics available

## Production Monitoring

### Daily Checks
- [ ] Payment success rate > 95%
- [ ] Error rate < 5%
- [ ] API response times < 2 seconds
- [ ] Webhook processing success rate > 99%

### Weekly Checks
- [ ] Review error logs
- [ ] Check payment analytics
- [ ] Verify webhook reliability
- [ ] Monitor API performance

### Monthly Checks
- [ ] Security audit
- [ ] Performance optimization
- [ ] Backup verification
- [ ] Compliance review

## Rollback Plan

### Emergency Rollback
1. Stop production backend
2. Revert to previous version
3. Restart services
4. Verify functionality

### Data Recovery
1. Restore from latest backup
2. Verify data integrity
3. Check payment statuses
4. Update customer records

## Support Contacts

### Technical Support
- **Backend Issues**: Backend team
- **Frontend Issues**: Frontend team
- **SkipCash Issues**: SkipCash support
- **Infrastructure**: DevOps team

### Emergency Contacts
- **System Admin**: [Contact Info]
- **Payment Team**: [Contact Info]
- **SkipCash Support**: [Contact Info]

---

**Deployment Date**: [Date]
**Deployed By**: [Name]
**Status**: [Status]
**Notes**: [Any issues or observations]
