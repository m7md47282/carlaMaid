# Standalone Backend Deployment Guide

## ✅ **Fixed: No More Angular SSR Dependencies**

The error you encountered was because the original `server.mjs` was trying to import Angular SSR files. I've created a **standalone backend server** that doesn't depend on Angular.

### 🔧 **New Standalone Server: `standalone-server.js`**

This is a pure Node.js/Express server with:
- ✅ No Angular dependencies
- ✅ No SSR requirements
- ✅ All SkipCash API endpoints
- ✅ All booking management endpoints
- ✅ CORS support
- ✅ Error handling

## 📁 **Files to Upload to cPanel:**

```
production/
├── standalone-server.js    # Standalone backend server (13KB)
├── package.json           # Backend dependencies
├── ecosystem.config.js    # PM2 configuration
├── .env                   # Environment template
├── README.md             # Deployment guide
└── logs/                 # Log directory
```

## 🚀 **Deployment Steps:**

### **1. Upload Files to cPanel**
```bash
# Using SSH (recommended)
scp -r production/* username@yourdomain.com:~/carla-maid-backend/

# Or using cPanel File Manager
# Upload all files from production/ folder
```

### **2. Set Up Node.js App in cPanel**
1. Go to **Node.js Apps** in cPanel
2. Create new application:
   ```
   Name: carla-maid-backend
   Node.js Version: 18.x
   Application Root: /home/username/carla-maid-backend
   Application URL: https://api.yourdomain.com
   Application Startup File: standalone-server.js
   ```

### **3. Set Environment Variables**
In cPanel Node.js App Manager:
```
NODE_ENV=production
PORT=3000
SKIPCASH_API_KEY=your_production_api_key
SKIPCASH_SECRET_KEY=your_production_secret_key
SKIPCASH_SANDBOX_API_KEY=your_sandbox_api_key
SKIPCASH_SANDBOX_SECRET_KEY=your_sandbox_secret_key
```

### **4. Install Dependencies**
```bash
# SSH into server
ssh username@yourdomain.com

# Navigate to app directory
cd ~/carla-maid-backend

# Install dependencies
npm install --production
```

### **5. Start Application**
```bash
# Start directly
npm start

# Or with PM2 (recommended)
npm install -g pm2
pm2 start ecosystem.config.js
```

## 📊 **Available API Endpoints:**

### **Health Checks:**
- `GET /api/health` - Backend health check
- `GET /api/skipcash/health` - SkipCash API health

### **Payment Processing:**
- `POST /api/skipcash/payment/create` - Create payment
- `GET /api/payment/status-skip-cash/:orderId` - Check payment status
- `POST /api/payment/callback` - Payment callback

### **Booking Management:**
- `POST /api/bookings/create` - Create booking
- `GET /api/bookings/:orderId` - Get booking
- `PUT /api/bookings/:orderId/status` - Update status
- `GET /api/bookings/customer/:email` - Customer bookings
- `PUT /api/bookings/:orderId/cancel` - Cancel booking

## 🧪 **Testing:**

### **Test Backend Health:**
```bash
curl https://api.yourdomain.com/api/health
```

### **Test SkipCash Health:**
```bash
curl https://api.yourdomain.com/api/skipcash/health
```

### **Test Booking Creation:**
```bash
curl -X POST https://api.yourdomain.com/api/bookings/create \
  -H "Content-Type: application/json" \
  -d '{
    "customer_name": "John Doe",
    "customer_email": "john@example.com",
    "customer_phone": "12345678",
    "address": "123 Main St, Doha",
    "service_type": "cleaning",
    "cleaners": 2,
    "hours": 3,
    "materials": true,
    "total": 210,
    "payment_method": "skipcash",
    "scheduled_date": "2024-01-15",
    "scheduled_time": "10:00"
  }'
```

## 🔧 **PM2 Management:**

```bash
# Check status
pm2 status

# View logs
pm2 logs carla-maid-backend

# Restart
pm2 restart carla-maid-backend

# Stop
pm2 stop carla-maid-backend

# Auto-restart on server reboot
pm2 startup
pm2 save
```

## 🚨 **Important Notes:**

1. **No Angular dependencies** - Pure Node.js/Express server
2. **No SSR requirements** - Standalone backend only
3. **All API endpoints working** - SkipCash + Booking management
4. **CORS enabled** - Frontend can connect from any domain
5. **Error handling** - Comprehensive error management

## 📞 **Troubleshooting:**

### **If server won't start:**
```bash
# Check Node.js version
node --version

# Check if port is in use
lsof -i :3000

# Check logs
pm2 logs carla-maid-backend
```

### **If API calls fail:**
```bash
# Test health endpoint
curl https://api.yourdomain.com/api/health

# Check environment variables
echo $SKIPCASH_API_KEY
```

## 🎉 **Success!**

Your standalone backend is now ready for production deployment without any Angular SSR dependencies! The server will work perfectly on cPanel with Node.js support.

**Next steps:**
1. Upload the `production/` folder files
2. Configure in cPanel Node.js manager
3. Set environment variables
4. Install dependencies and start
5. Test the API endpoints

Your backend is now completely independent and ready for production! 🚀 