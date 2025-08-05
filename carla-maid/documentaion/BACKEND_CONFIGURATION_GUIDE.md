# Backend Configuration Guide

## ✅ **Backend is Now Configured and Running!**

Your standalone backend is successfully configured and running on `http://localhost:4000`.

## 🔧 **Current Status:**

### ✅ **Working Endpoints:**
- `GET /api/health` - ✅ Backend health check
- `POST /api/bookings/create` - ✅ Booking creation
- `GET /api/bookings/:orderId` - ✅ Get booking
- `PUT /api/bookings/:orderId/status` - ✅ Update status
- `GET /api/bookings/customer/:email` - ✅ Customer bookings
- `PUT /api/bookings/:orderId/cancel` - ✅ Cancel booking

### ⚠️ **SkipCash Endpoints (Need API Keys):**
- `GET /api/skipcash/health` - ⚠️ Needs API keys
- `POST /api/skipcash/payment/create` - ⚠️ Needs API keys
- `GET /api/payment/status-skip-cash/:orderId` - ⚠️ Needs API keys

## 🚀 **How to Start the Backend:**

### **Option 1: Using the Startup Script**
```bash
./start-backend.sh
```

### **Option 2: Manual Start**
```bash
# Set environment variables
export NODE_ENV="development"
export PORT="4000"
export SKIPCASH_SANDBOX_API_KEY="your_sandbox_api_key"
export SKIPCASH_SANDBOX_SECRET_KEY="your_sandbox_secret_key"

# Start the server
node standalone-server.js
```

## 📋 **Configuration Steps:**

### **1. Get SkipCash API Keys**
- Contact SkipCash support to get your API keys
- You'll need both sandbox and production keys

### **2. Update the Startup Script**
Edit `start-backend.sh` and replace:
```bash
export SKIPCASH_SANDBOX_API_KEY="your_sandbox_api_key_here"
export SKIPCASH_SANDBOX_SECRET_KEY="your_sandbox_secret_key_here"
```

With your actual API keys:
```bash
export SKIPCASH_SANDBOX_API_KEY="sk_test_abc123..."
export SKIPCASH_SANDBOX_SECRET_KEY="sk_secret_xyz789..."
```

### **3. Test the Configuration**
```bash
# Test backend health
curl http://localhost:4000/api/health

# Test booking creation
curl -X POST http://localhost:4000/api/bookings/create \
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

# Test SkipCash health (after setting API keys)
curl http://localhost:4000/api/skipcash/health
```

## 🎯 **Frontend Integration:**

Your frontend is **already configured** to work with this backend:

### **Development Environment:**
```typescript
// src/environments/environment.ts
backendApiUrl: 'http://localhost:4000/api'
```

### **Production Environment:**
```typescript
// src/environments/environment.prod.ts
backendApiUrl: 'https://carlamaid.qa/api'
```

## 📊 **API Endpoints Summary:**

| Endpoint | Method | Description | Status |
|----------|--------|-------------|--------|
| `/api/health` | GET | Backend health check | ✅ Working |
| `/api/bookings/create` | POST | Create booking | ✅ Working |
| `/api/bookings/:orderId` | GET | Get booking | ✅ Working |
| `/api/bookings/:orderId/status` | PUT | Update status | ✅ Working |
| `/api/bookings/customer/:email` | GET | Customer bookings | ✅ Working |
| `/api/bookings/:orderId/cancel` | PUT | Cancel booking | ✅ Working |
| `/api/skipcash/health` | GET | SkipCash health | ⚠️ Needs API keys |
| `/api/skipcash/payment/create` | POST | Create payment | ⚠️ Needs API keys |
| `/api/payment/status-skip-cash/:orderId` | GET | Check payment | ⚠️ Needs API keys |

## 🚀 **Next Steps:**

1. **Get SkipCash API keys** from SkipCash support
2. **Update the startup script** with your API keys
3. **Test all endpoints** to ensure everything works
4. **Deploy to production** using the `production/` folder

## 🎉 **Success!**

Your backend is now fully configured and ready for development. The frontend will automatically connect to this backend when you run your Angular application.

**To start development:**
1. Start the backend: `./start-backend.sh`
2. Start the frontend: `ng serve`
3. Both will work together seamlessly! 