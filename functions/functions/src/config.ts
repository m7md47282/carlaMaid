/**
 * Configuration file for Firebase Functions
 * Contains Google Form and SkipCash configurations extracted from Laravel backend
 */

export interface GoogleFormConfig {
    formUrl: string;
    formFields: {
        orderId: string;
        paymentId: string;
        isPaid: string;
        address: string;
        customerName: string;
        customerEmail: string;
        customerPhone: string;
        scheduledDate: string;
        scheduledTime: string;
        hours: string;
        materials: string;
        cleaners: string;
    };
    timeout: number;
    retryAttempts: number;
}

export interface SkipCashConfig {
    isTestMode: boolean;
    production: {
        apiUrl: string;
        clientId: string;
        apiKey: string;
        secretKey: string;
        webhookKey: string;
    };
    sandbox: {
        apiUrl: string;
        clientId: string;
        apiKey: string;
        secretKey: string;
        webhookKey: string;
    };
}

export interface AppConfig {
    google: GoogleFormConfig;
    skipcash: SkipCashConfig;
    frontend: {
        domain: string;
        successUrl: string;
        cancelUrl: string;
    };
}

// Google Form Configuration
export const googleFormConfig: GoogleFormConfig = {
    formUrl: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeouZn9dc038aSnDj40SGjGz2uWEbPqV17SAvUHqaW4483yew/formResponse',
    
    formFields: {
        orderId: 'entry.1011936317',
        paymentId: 'entry.358076297',
        isPaid: 'entry.166685531',
        address: 'entry.1609292890',
        customerName: 'entry.1390915916',
        customerEmail: 'entry.1883668962',
        customerPhone: 'entry.994665389',
        scheduledDate: 'entry.2055873333',
        scheduledTime: 'entry.1510790817',
        hours: 'entry.1482962453',
        materials: 'entry.1942996151',
        cleaners: 'entry.1410396487'
    },
    
    timeout: 10,
    retryAttempts: 3
};

// SkipCash Configuration
export const skipCashConfig: SkipCashConfig = {
    isTestMode: false,
    
    production: {
        apiUrl: 'https://api.skipcash.app',
        clientId: '7242ee4f-ca43-44bb-804c-4f0c621bb54d',
        apiKey: '2ce8c700-f8e6-4cc5-b59a-0069f368815d',
        secretKey: 'fsrj/XE5skmcrfaG4Yqoc07VGuiHBWO7eCMfs6s7uEyumBOnVvhGhK8UTaViZ9v4U8dkaVtUMKpTfH21Dr7VQfVu3qWkiJ5UIuXRT9mGtoRbofYA/KsL7WNbEqNvcW313azXw+vqF1PyJclrjC5H2vfrDUetRTvGtyIAUZ0l6zV46pdZ9rl7S4gxAomvHesvVdPe6AMcON5/OiCY69K2YWhyLcoOdULYZ2FUvK4+lLadaH0yu4e5r/geLRwsX4I5ZMhqcZrSvbke76V1NtNnbO3tsPfrXsLiHGCLxilb3wrLpVg60zvPNXM6tsQvTZ7+T8Irn89kxkq/G328HjCNPAM9BZQIjMloMt0QgGzXGJMzMZ4dbUOzGhq0wZseKiMfN/RSld48SzCoF1Wy/C5M310wy+05OhNOkyXxfFnhOlKHjAT+3bfhKw9h+ACw9gaEpRL3tCjq9z6hbH8LELeQ3i7NEtB5XAGY+J2kVFdj/bPzdge/cwusfvUWUgokG+TGz0y0vWYNbCfRZE28H8975A==',
        webhookKey: '43ef9131-140e-4871-8586-94b8f69f32b2'
    },
    
    sandbox: {
        apiUrl: 'https://skipcashtest.azurewebsites.net',
        clientId: '3d8fecfa-f2c0-4fc8-a913-91634b306eec',
        apiKey: '288d604d-03b6-4c66-821e-0a82a3fd2cc8',
        secretKey: 'Og9vDBQbBFHg/dwxkQjFCcLYogMDq4hLOF0OPsuRDY+OrLp/BPWMoCvsf1EDW41N8QTqoJHFhpclF/+bMR8Gwjyy2n0ZBNKuk8TO6LSpA2+JTWRM3ODl3LuX1nSFHRVnHJ1h0+ojevQqA8U/FzgCu88S+HhdZ1zq1GeWvka9MM8y8arkLwo0oLCf4IPAcH6olU8EKWrgcIymL6spNmRYRqfiLEzFWIQAjNJa2PH/spkK8c0brTae9jzbSf7yw6DO6NV51dbC5Td+BqWEjOmDphtQ3XSfqaj5fIjkGjjd58tnP6uQELF08Q5uZqGno8fWxZi+B6Wz9Z6Zr3y7cr19VTpRA2+RGOSVNzdaMnc7EL6ryFxmXUg+dSU37gBffAzn8fAIe2KJJdGnsSUkM8Z82E6Yj2KPi/Tw/wrYZMwuXNROwlIilIt9tds8PCdlFgPD1wiH8q9om/kIcarLuoVXn71nF65BT3/PhAOEhKyrxLaiqwZg+8xZdbCHzFQNYefcYuDRzflWzPRp3oWX1L9bPw==',
        webhookKey: 'a269aaab-8381-4b63-8c83-f1e612494183'
    }
};

// Main application configuration
export const appConfig: AppConfig = {
    google: googleFormConfig,
    skipcash: skipCashConfig,
    frontend: {
        domain: 'https://carlamaid.qa',
        successUrl: 'https://carlamaid.qa/booking/success',
        cancelUrl: 'https://carlamaid.qa/booking/cancel'
    }
};

// Helper function to get current SkipCash configuration based on test mode
export function getCurrentSkipCashConfig() {
    return skipCashConfig.isTestMode ? skipCashConfig.sandbox : skipCashConfig.production;
}

// Helper function to get Google Form field value by key
export function getGoogleFormField(fieldKey: keyof GoogleFormConfig['formFields']): string {
    return googleFormConfig.formFields[fieldKey];
}


// Export default configuration
export default appConfig;
