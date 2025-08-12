# Security Configuration Guide

## ⚠️ IMPORTANT SECURITY NOTICE

This directory contains sensitive SkipCash payment credentials. Follow these security practices:

## 🔐 Credential Management

### Current Setup
- **API Key**: `2ce8c700-f8e6-4cc5-b59a-0069f368815d`
- **Secret Key**: [REDACTED - See config.js]
- **Environment**: Production

### Security Best Practices

1. **NEVER commit credentials to version control**
   - The `config.js` file is already in `.gitignore`
   - If you accidentally commit credentials, immediately rotate them

2. **Use environment variables in production**
   ```bash
   export SKIPCASH_API_KEY="your_api_key"
   export SKIPCASH_SECRET_KEY="your_secret_key"
   export SKIPCASH_IS_TEST_MODE="false"
   ```

3. **Rotate credentials regularly**
   - Change API keys and secret keys periodically
   - Monitor for unauthorized usage

4. **Restrict file permissions**
   ```bash
   chmod 600 config.js
   chmod 600 .env  # if using environment files
   ```

## 🚀 Deployment Security

### Production Deployment
1. Remove `config.js` from production servers
2. Set environment variables on the server
3. Use process managers (PM2) with environment configuration

### Environment Variables Example
```bash
# In your deployment script or server configuration
SKIPCASH_API_URL_PRODUCTION=https://api.skipcash.app
SKIPCASH_API_KEY=your_api_key_here
SKIPCASH_SECRET_KEY=your_secret_key_here
SKIPCASH_IS_TEST_MODE=false
```

## 🔍 Monitoring & Auditing

1. **Log access to payment endpoints**
2. **Monitor for unusual payment patterns**
3. **Set up alerts for failed authentication**
4. **Regular security audits**

## 📞 Emergency Contacts

If you suspect credential compromise:
1. Immediately disable the compromised credentials
2. Contact SkipCash support
3. Generate new API keys
4. Update all systems with new credentials

## 📋 Security Checklist

- [ ] Credentials not in version control
- [ ] File permissions restricted
- [ ] Environment variables configured
- [ ] Monitoring enabled
- [ ] Regular credential rotation scheduled
- [ ] Team members trained on security practices
