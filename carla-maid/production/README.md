# Carla Maid Backend - Production Deployment

## 🚀 Quick Start

1. **Upload files** to your cPanel server
2. **Set environment variables** in cPanel Node.js manager
3. **Install dependencies**: `npm install --production`
4. **Start the application**: `npm start`

## 📋 Environment Variables

Set these in cPanel Node.js App Manager:

- `NODE_ENV`: production
- `PORT`: 3000
- `SKIPCASH_API_KEY`: Your production API key
- `SKIPCASH_SECRET_KEY`: Your production secret key
- `SKIPCASH_SANDBOX_API_KEY`: Your sandbox API key
- `SKIPCASH_SANDBOX_SECRET_KEY`: Your sandbox secret key

## 🔧 PM2 Management (Optional)

```bash
# Install PM2 globally
npm install -g pm2

# Start with PM2
npm run start:pm2

# Check status
npm run status:pm2

# View logs
npm run logs:pm2

# Restart
npm run restart:pm2
```

## 📊 API Endpoints

- Health Check: `GET /api/health`
- SkipCash Health: `GET /api/skipcash/health`
- Create Payment: `POST /api/skipcash/payment/create`
- Check Status: `GET /api/payment/status-skip-cash/:orderId`
- Payment Callback: `POST /api/payment/callback`
- Create Booking: `POST /api/bookings/create`
- Get Booking: `GET /api/bookings/:orderId`
- Update Status: `PUT /api/bookings/:orderId/status`
- Customer Bookings: `GET /api/bookings/customer/:email`
- Cancel Booking: `PUT /api/bookings/:orderId/cancel`

## 🔒 Security Notes

- Always use HTTPS in production
- Keep API keys secure
- Monitor application logs
- Set up SSL certificate

## 📞 Support

- SkipCash: support@skipcash.app
- Check logs in `logs/` directory
