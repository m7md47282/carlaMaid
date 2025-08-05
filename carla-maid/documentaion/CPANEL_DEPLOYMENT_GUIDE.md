# cPanel Deployment Guide for SkipCash Backend

## 🚀 **Deploying server.ts as Backend on cPanel**

### 📋 **Prerequisites:**

1. **cPanel Access** with Node.js support
2. **Domain/Subdomain** for your backend API
3. **SkipCash API Keys** (production and sandbox)
4. **SSH Access** (recommended for easier deployment)

---

## 🔧 **Step 1: Prepare Your Backend Code**

### **1.1 Create Production Build**
```bash
# Build the application
npm run build

# The server files will be in dist/carla-maid/server/
```

### **1.2 Create Production Package**
Create a `production` folder with these files:
```
production/
├── server.mjs          # Built server file
├── package.json        # Production dependencies
├── .env               # Environment variables
└── ecosystem.config.js # PM2 configuration (optional)
```

---

## 🔧 **Step 2: cPanel Node.js Setup**

### **2.1 Access cPanel Node.js App Manager**
1. Login to cPanel
2. Find **"Node.js"** or **"Node.js Apps"**
3. Click **"Create Application"**

### **2.2 Configure Node.js Application**
```
Application Name: carla-maid-backend
Node.js Version: 18.x (or latest LTS)
Application Mode: Production
Application Root: /home/username/carla-maid-backend
Application URL: https://api.yourdomain.com (or subdomain)
Application Startup File: server.mjs
```

### **2.3 Environment Variables**
Add these environment variables in cPanel:
```bash
NODE_ENV=production
PORT=3000
SKIPCASH_API_KEY=your_production_api_key
SKIPCASH_SECRET_KEY=your_production_secret_key
SKIPCASH_SANDBOX_API_KEY=your_sandbox_api_key
SKIPCASH_SANDBOX_SECRET_KEY=your_sandbox_secret_key
```

---

## 🔧 **Step 3: Upload and Deploy**

### **3.1 Upload Files via File Manager**
1. Go to **File Manager** in cPanel
2. Navigate to `/home/username/carla-maid-backend/`
3. Upload your production files

### **3.2 Or Upload via SSH (Recommended)**
```bash
# Connect to your server
ssh username@yourdomain.com

# Create directory
mkdir ~/carla-maid-backend
cd ~/carla-maid-backend

# Upload files (from your local machine)
scp -r production/* username@yourdomain.com:~/carla-maid-backend/
```

### **3.3 Install Dependencies**
```bash
# SSH into your server
ssh username@yourdomain.com

# Navigate to backend directory
cd ~/carla-maid-backend

# Install dependencies
npm install --production
```

---

## 🔧 **Step 4: Configure Domain/Subdomain**

### **4.1 Create Subdomain (Recommended)**
1. Go to **Subdomains** in cPanel
2. Create: `api.yourdomain.com`
3. Point to: `/home/username/carla-maid-backend`

### **4.2 Or Use Main Domain**
1. Go to **Domains** in cPanel
2. Point your domain to the backend directory

---

## 🔧 **Step 5: Start the Application**

### **5.1 Using cPanel Node.js Manager**
1. Go to **Node.js Apps**
2. Find your application
3. Click **"Start"** or **"Restart"**

### **5.2 Using SSH (Alternative)**
```bash
# SSH into server
ssh username@yourdomain.com

# Navigate to app directory
cd ~/carla-maid-backend

# Start with PM2 (recommended)
npm install -g pm2
pm2 start server.mjs --name "carla-maid-backend"

# Or start directly
node server.mjs
```

---

## 🔧 **Step 6: Update Frontend Configuration**

### **6.1 Update Environment Files**
Update `src/environments/environment.prod.ts`:
```typescript
export const environment = {
  production: true,
  backendApiUrl: 'https://api.yourdomain.com/api',
  skipCash: {
    // ... other config
    backendApiUrl: 'https://api.yourdomain.com/api/skipcash',
    returnUrl: 'https://yourdomain.com/book-now/payment-success',
    cancelUrl: 'https://yourdomain.com/book-now/payment-cancel',
    callbackUrl: 'https://api.yourdomain.com/api/payment/callback',
  }
};
```

### **6.2 Update Angular Configuration**
Update `angular.json` for production build:
```json
{
  "projects": {
    "carla-maid": {
      "architect": {
        "build": {
          "configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ]
            }
          }
        }
      }
    }
  }
}
```

---

## 🔧 **Step 7: SSL Certificate**

### **7.1 Enable SSL**
1. Go to **SSL/TLS** in cPanel
2. Install SSL certificate for your domain/subdomain
3. Force HTTPS redirect

### **7.2 Update CORS Settings**
Update your `server.ts` for production:
```typescript
// CORS middleware for production
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://yourdomain.com');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});
```

---

## 🔧 **Step 8: Testing**

### **8.1 Test Backend Endpoints**
```bash
# Health check
curl https://api.yourdomain.com/api/skipcash/health

# Test payment creation
curl -X POST https://api.yourdomain.com/api/skipcash/payment/create \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 100,
    "currency": "QAR",
    "customerName": "Test User",
    "customerEmail": "test@example.com",
    "returnUrl": "https://yourdomain.com/success",
    "cancelUrl": "https://yourdomain.com/cancel"
  }'
```

### **8.2 Test Frontend Integration**
1. Deploy your Angular frontend
2. Test the complete payment flow
3. Check console logs for any errors

---

## 🔧 **Step 9: Monitoring and Maintenance**

### **9.1 Log Monitoring**
```bash
# Check application logs
pm2 logs carla-maid-backend

# Or check cPanel error logs
# File Manager → logs → error_log
```

### **9.2 Performance Monitoring**
```bash
# Monitor PM2 processes
pm2 status
pm2 monit

# Check memory usage
pm2 show carla-maid-backend
```

### **9.3 Auto-restart on Crash**
```bash
# Enable auto-restart
pm2 startup
pm2 save
```

---

## 🚨 **Important Security Notes:**

### **Environment Variables:**
- ✅ Never commit API keys to Git
- ✅ Use cPanel environment variables
- ✅ Rotate keys regularly

### **CORS Configuration:**
- ✅ Only allow your domain
- ✅ Use HTTPS in production
- ✅ Validate all requests

### **SSL Certificate:**
- ✅ Always use HTTPS in production
- ✅ Auto-renew certificates
- ✅ Force HTTPS redirect

---

## 🔧 **Troubleshooting:**

### **Common Issues:**

1. **Port Already in Use**
   ```bash
   # Check what's using the port
   lsof -i :3000
   # Kill the process
   kill -9 <PID>
   ```

2. **Permission Denied**
   ```bash
   # Fix file permissions
   chmod 755 ~/carla-maid-backend
   chmod 644 ~/carla-maid-backend/server.mjs
   ```

3. **Module Not Found**
   ```bash
   # Reinstall dependencies
   npm install --production
   ```

4. **CORS Errors**
   - Check CORS configuration in server.ts
   - Verify domain in Access-Control-Allow-Origin

---

## 📞 **Support:**

- **cPanel Support**: Contact your hosting provider
- **SkipCash Support**: support@skipcash.app
- **Application Logs**: Check cPanel error logs

Your SkipCash backend is now ready for production! 🎉 