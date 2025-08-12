export const environment = {
    production: true, // Changed to true for production
    // WordPress API Configuration
    wordpressApiBaseUrl: 'https://carlamaid.qa/wordpress/index.php/wp-json/wp/v2',
    lang: 'en', // Default language setting
    languages: ['ar', 'en'], // Supported languages
    direction: 'ltr', // Text direction, left-to-right
    
    // Backend API Configuration
    backendApiUrl: 'http://localhost:4000/api',
    
    skipCash: {
        apiUrl: 'https://api.skipcash.app',
        backendApiUrl: 'https://api.carlamaid.qa/api/skipcash',
        clientId: '3d8fecfa-f2c0-4fc8-a913-91634b306eec',
        isTestMode: false,
        returnUrl: 'https://carlamaid.qa/book-now/success',
        cancelUrl: 'https://carlamaid.qa/book-now/cancel',
        callbackUrl: 'https://api.carlamaid.qa/api/payment/callback',
        webhookKey: 'a269aaab-8381-4b63-8c83-f1e612494183', 
        webhookUrl: 'https://api.carlamaid.qa/api/skipcash/webhook'
    }
  };