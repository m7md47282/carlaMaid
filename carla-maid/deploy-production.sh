#!/bin/bash

# Carla Maid Production Deployment Script
# This script prepares your backend for cPanel deployment

echo "🚀 Preparing Carla Maid Backend for Production Deployment..."

# Create production directory
mkdir -p production
cd production

# Copy standalone server file
echo "📦 Copying server files..."
cp ../standalone-server.js ./standalone-server.js

# Copy production package.json
cp ../package.production.json ./package.json

# Copy PM2 configuration
cp ../ecosystem.config.js ./ecosystem.config.js

# Create logs directory
mkdir -p logs

# Create .env template
echo "🔑 Creating environment template..."
cat > .env << EOF
# SkipCash API Configuration
NODE_ENV=production
PORT=3000

# Production SkipCash API Keys
SKIPCASH_API_KEY=your_production_api_key_here
SKIPCASH_SECRET_KEY=your_production_secret_key_here

# Sandbox SkipCash API Keys
SKIPCASH_SANDBOX_API_KEY=your_sandbox_api_key_here
SKIPCASH_SANDBOX_SECRET_KEY=your_sandbox_secret_key_here
EOF

# Create README for deployment
echo "📝 Creating deployment README..."
cat > README.md << EOF
# Carla Maid Backend - Production Deployment

## 🚀 Quick Start

1. **Upload files** to your cPanel server
2. **Set environment variables** in cPanel Node.js manager
3. **Install dependencies**: \`npm install --production\`
4. **Start the application**: \`npm start\`

## 📋 Environment Variables

Set these in cPanel Node.js App Manager:

- \`NODE_ENV\`: production
- \`PORT\`: 3000
- \`SKIPCASH_API_KEY\`: Your production API key
- \`SKIPCASH_SECRET_KEY\`: Your production secret key
- \`SKIPCASH_SANDBOX_API_KEY\`: Your sandbox API key
- \`SKIPCASH_SANDBOX_SECRET_KEY\`: Your sandbox secret key

## 🔧 PM2 Management (Optional)

\`\`\`bash
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
\`\`\`

## 📊 API Endpoints

- Health Check: \`GET /api/health\`
- SkipCash Health: \`GET /api/skipcash/health\`
- Create Payment: \`POST /api/skipcash/payment/create\`
- Check Status: \`GET /api/payment/status-skip-cash/:orderId\`
- Payment Callback: \`POST /api/payment/callback\`
- Create Booking: \`POST /api/bookings/create\`
- Get Booking: \`GET /api/bookings/:orderId\`
- Update Status: \`PUT /api/bookings/:orderId/status\`
- Customer Bookings: \`GET /api/bookings/customer/:email\`
- Cancel Booking: \`PUT /api/bookings/:orderId/cancel\`

## 🔒 Security Notes

- Always use HTTPS in production
- Keep API keys secure
- Monitor application logs
- Set up SSL certificate

## 📞 Support

- SkipCash: support@skipcash.app
- Check logs in \`logs/\` directory
EOF

echo "✅ Production files prepared successfully!"
echo ""
echo "📁 Files created in 'production/' directory:"
echo "  - standalone-server.js (standalone backend server)"
echo "  - package.json (production dependencies)"
echo "  - ecosystem.config.js (PM2 configuration)"
echo "  - .env (environment template)"
echo "  - README.md (deployment guide)"
echo ""
echo "🚀 Next steps:"
echo "  1. Upload 'production/' folder to your cPanel server"
echo "  2. Set environment variables in cPanel"
echo "  3. Install dependencies: npm install --production"
echo "  4. Start the application"
echo ""
echo "📖 See CPANEL_DEPLOYMENT_GUIDE.md for detailed instructions" 