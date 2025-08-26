# Carla Maid Production Deployment Instructions

## 🚀 Frontend Deployment (cPanel)

1. **Upload the contents** of this folder to your cPanel public_html directory
2. **The .cpanel.yml file** will automatically trigger the deployment process
3. **Verify deployment** by visiting your domain

## 🔧 Backend Deployment (Laravel API)

1. **Upload the `api/` folder** to your server
2. **Set up environment variables** in your hosting panel
3. **Run deployment commands**:
   ```bash
   cd api
   composer install --no-dev --optimize-autoloader
   php artisan key:generate
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   php artisan migrate --force
   ```

## 📋 Environment Variables to Set

### Frontend (Angular)
- All production URLs are already configured in environment.prod.ts

### Backend (Laravel)
- `APP_ENV=production`
- `APP_DEBUG=false`
- `APP_URL=https://api.carlamaid.qa`
- `DB_CONNECTION=sqlite` (or your production database)
- SkipCash production API keys
- Google Form configuration

## 🔒 Security Checklist

- [ ] SSL certificates installed
- [ ] Environment variables secured
- [ ] Database credentials updated
- [ ] SkipCash production keys configured
- [ ] Debug mode disabled
- [ ] Error logging configured for production

## 📊 Health Checks

- Frontend: `https://carlamaid.qa`
- Backend API: `https://api.carlamaid.qa/api/health`
- SkipCash Health: `https://api.carlamaid.qa/api/skipcash/health`

## 🆘 Support

If you encounter issues:
1. Check the Laravel logs in `storage/logs/`
2. Verify environment variables
3. Check database connectivity
4. Ensure all required services are running
