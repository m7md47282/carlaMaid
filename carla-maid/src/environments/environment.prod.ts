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
      clientId: '7242ee4f-ca43-44bb-804c-4f0c621bb54d',
      returnUrl: 'https://carlamaid.qa/book-now/success',
      cancelUrl: 'https://carlamaid.qa/book-now/cancel',
      callbackUrl: 'https://carlamaid.qa/api/payment/callback',
      webhookKey: 'a43ef9131-140e-4871-8586-94b8f69f32b2', 
      webhookUrl: 'https://carlamaid.qa/api/skipcash/webhook'
    }
  };