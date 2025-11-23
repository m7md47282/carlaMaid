# WordPress REST API Not Working - Fix Guide

## Problem
WordPress API returning HTML instead of JSON data, causing blogs to not display.

## Symptoms
- Empty blogs section on website
- API endpoint returns HTML page
- Browser console shows empty posts array

## Fix Steps

### Step 1: Check WordPress Permalink Settings

1. **Log in to WordPress Admin:**
   ```
   https://carlamaid.qa/wordpress/wp-admin/
   ```

2. **Go to Settings → Permalinks**

3. **Ensure permalink structure is set to:**
   - ✅ **Post name** (Recommended)
   - Or any option EXCEPT "Plain"

4. **Click "Save Changes"**
   - This will regenerate the `.htaccess` file

### Step 2: Verify .htaccess File

Your WordPress `.htaccess` should contain:

```apache
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /wordpress/
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /wordpress/index.php [L]
</IfModule>
# END WordPress
```

**File location:** `/public_html/wordpress/.htaccess`

### Step 3: Test REST API

After fixing, test these URLs in your browser:

#### Test 1: API Root
```
https://carlamaid.qa/wordpress/index.php/wp-json/
```
**Expected:** JSON data with namespaces

#### Test 2: Posts Endpoint
```
https://carlamaid.qa/wordpress/index.php/wp-json/wp/v2/posts
```
**Expected:** JSON array of posts (even if empty: `[]`)

#### Test 3: Categories Endpoint
```
https://carlamaid.qa/wordpress/index.php/wp-json/wp/v2/categories
```
**Expected:** JSON array of categories

### Step 4: Check WordPress REST API Status

Add this to your WordPress temporarily to diagnose:

**File:** `wp-content/themes/your-theme/functions.php`

```php
// Debug REST API
add_action('rest_api_init', function() {
    error_log('REST API is working!');
});
```

### Step 5: Enable CORS (if needed)

If you get CORS errors, add to `wp-config.php`:

```php
// Enable CORS for REST API
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
```

### Step 6: Check Server Configuration

#### Apache (.htaccess)
Ensure `mod_rewrite` is enabled:
```apache
<IfModule mod_rewrite.c>
RewriteEngine On
</IfModule>
```

#### Nginx
Add to your Nginx config:
```nginx
location /wordpress {
    try_files $uri $uri/ /wordpress/index.php?$args;
}

location ~ \.php$ {
    include fastcgi_params;
    fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
}
```

### Step 7: Alternative API Path (if index.php doesn't work)

Try without `index.php` in the URL:

Change in `environment.ts`:
```typescript
// From:
wordpressApiBaseUrl: 'https://carlamaid.qa/wordpress/index.php/wp-json/wp/v2',

// To:
wordpressApiBaseUrl: 'https://carlamaid.qa/wordpress/wp-json/wp/v2',
```

Test: `https://carlamaid.qa/wordpress/wp-json/wp/v2/posts`

## Verification

Once fixed, you should see:

### ✅ Correct Response (JSON):
```bash
curl https://carlamaid.qa/wordpress/index.php/wp-json/wp/v2/posts
```
Returns:
```json
[
  {
    "id": 1,
    "title": {
      "rendered": "Blog Title"
    },
    ...
  }
]
```

### ❌ Wrong Response (HTML):
```html
<!doctype html>
<html>...
```

## Quick Test Commands

```bash
# Test if REST API returns JSON
curl -I https://carlamaid.qa/wordpress/index.php/wp-json/wp/v2/posts

# Should show:
# content-type: application/json
```

## Common Causes

1. **Permalinks set to "Plain"** - Change to "Post name"
2. **Missing .htaccess rules** - Regenerate from WordPress
3. **mod_rewrite disabled** - Enable on server
4. **Security plugin blocking API** - Check Wordfence, etc.
5. **Wrong file permissions** - .htaccess should be 644

## After Fixing

1. ✅ Test API endpoints return JSON
2. ✅ Refresh your local app (http://localhost:4200)
3. ✅ Blogs should now appear
4. ✅ Deploy code changes to production

## Need Help?

If still not working, check:
- WordPress error logs: `/wp-content/debug.log`
- Server error logs: `/var/log/nginx/error.log` or `/var/log/apache2/error.log`
- Browser console: F12 → Console tab


