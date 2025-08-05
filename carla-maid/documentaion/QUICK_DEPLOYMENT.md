# Quick cPanel Deployment Guide

## 🚀 **Fast Setup for cPanel**

### **Step 1: Upload Files**
1. Go to **File Manager** in cPanel
2. Create folder: `/home/username/carla-maid-backend/`
3. Upload all files from `production/` folder

### **Step 2: Set Up Node.js App**
1. Go to **Node.js Apps** in cPanel
2. Click **"Create Application"**
3. Configure:
   ```
   Name: carla-maid-backend
   Node.js Version: 18.x
   Application Root: /home/username/carla-maid-backend
   Application URL: https://api.yourdomain.com
   Application Startup File: server.mjs
   ```

### **Step 3: Set Environment Variables**
In cPanel Node.js App Manager, add:
```
NODE_ENV=production
PORT=3000
SKIPCASH_API_KEY=your_production_api_key
SKIPCASH_SECRET_KEY=your_production_secret_key
SKIPCASH_SANDBOX_API_KEY=your_sandbox_api_key
SKIPCASH_SANDBOX_SECRET_KEY=your_sandbox_secret_key
```

### **Step 4: Install Dependencies**
```bash
# SSH into server
ssh username@yourdomain.com

# Navigate to app
cd ~/carla-maid-backend

# Install dependencies
npm install --production
```

### **Step 5: Start Application**
1. Go to **Node.js Apps** in cPanel
2. Find your app
3. Click **"Start"**

### **Step 6: Test**
```bash
# Test health endpoint
curl https://api.yourdomain.com/api/skipcash/health
```

## 📋 **Files to Upload**
```
production/
├── server.mjs          # Your backend server
├── package.json        # Dependencies
├── ecosystem.config.js # PM2 config (optional)
├── .env               # Environment template
└── README.md          # Deployment guide
```

## 🔧 **Quick Commands**
```bash
# SSH into server
ssh username@yourdomain.com

# Navigate to app
cd ~/carla-maid-backend

# Install dependencies
npm install --production

# Start with PM2 (optional)
npm install -g pm2
pm2 start ecosystem.config.js

# Check status
pm2 status

# View logs
pm2 logs carla-maid-backend
```

## 🚨 **Important**
- ✅ Set up SSL certificate
- ✅ Use HTTPS URLs
- ✅ Keep API keys secure
- ✅ Monitor application logs

Your backend is now ready! 🎉 