export const environment = {
    production: false, // Indicates if the environment is production
    lang: 'en', // Default language setting
    languages: ['ar', 'en'], // Supported languages
    direction: 'ltr', // Text direction, left-to-right
    
    // Backend API Configuration
    backendApiUrl: 'http://localhost:4000/api',
    
    // Skip Cash Payment Gateway Configuration
    skipCash: {
        // Production API URL
        apiUrl: 'https://api.skipcash.app',
        // Sandbox/Test API URL
        sandboxApiUrl: 'https://skipcashtest.azurewebsites.net',
        // Backend API URLs for CORS handling
        backendApiUrl: 'http://localhost:4000/api/skipcash',
        // Use sandbox for development/testing
        isTestMode: true,
        returnUrl: 'http://localhost:4200/book-now?payment_success=true&order_id=',
        cancelUrl: 'http://localhost:4200/book-now?payment_cancel=true&order_id=',
        callbackUrl: 'http://localhost:4000/api/payment/callback',
    }
  };