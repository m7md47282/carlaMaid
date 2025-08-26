export const environment = {
    production: true, // Production mode enabled
    // WordPress API Configuration
    wordpressApiBaseUrl: 'https://api.carlamaid.qa/wp/wp-json/wp/v2',
    lang: 'en', // Default language setting
    languages: ['ar', 'en'], // Supported languages

    direction: 'ltr', // Text direction, left-to-right
    
    // Backend API Configuration
    // backendApiUrl: 'http://127.0.0.1:5001/carlamaid-9/us-central1',

    backendApiUrl: 'https://us-central1-carlamaid-9.cloudfunctions.net',
};