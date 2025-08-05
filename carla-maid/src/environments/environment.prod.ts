export const environment = {
    production: true, // Indicates if the environment is production
    // apiUrl: '',
    wordpressApiBaseUrl: 'https://carlamaid.qa/wordpress/index.php/wp-json/wp/v2', 
    lang: 'en', // Default language setting
    languages: ['ar', 'en'], // Supported languages
    direction: 'ltr', // Text direction, left-to-right
    
    // Backend API Configuration
    backendApiUrl: 'https://api.carlamaid.qa/api',
    
    // Skip Cash Payment Gateway Configuration
    skipCash: {
        apiUrl: 'https://api.skipcash.app',
        returnUrl: 'https://carlamaid.qa/book-now?payment_success=true&order_id=',
        cancelUrl: 'https://carlamaid.qa/book-now?payment_cancel=true&order_id=',
        callbackUrl: 'https://carlamaid.qa/api/payment/callback'
    }
  };