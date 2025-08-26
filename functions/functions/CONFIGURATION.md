# Firebase Functions Configuration

This document explains the configuration of the Firebase Functions with Google Form and SkipCash settings.

## Configuration

The Firebase Functions use hardcoded configuration values extracted from the Laravel backend. All settings are pre-configured and ready to use.

### Google Form Configuration

| Variable | Description | Default Value |
|----------|-------------|---------------|
| `GOOGLE_FORM_URL` | The Google Form submission URL | `https://docs.google.com/forms/u/0/d/e/1FAIpQLSeouZn9dc038aSnDj40SGjGz2uWEbPqV17SAvUHqaW4483yew/formResponse` |
| `GOOGLE_FORM_ORDER_ID_FIELD` | Form field ID for order ID | `entry.1011936317` |
| `GOOGLE_FORM_PAYMENT_ID_FIELD` | Form field ID for payment ID | `entry.358076297` |
| `GOOGLE_FORM_IS_PAID_FIELD` | Form field ID for payment status | `entry.166685531` |
| `GOOGLE_FORM_ADDRESS_FIELD` | Form field ID for address | `entry.1609292890` |
| `GOOGLE_FORM_CUSTOMER_NAME_FIELD` | Form field ID for customer name | `entry.1390915916` |
| `GOOGLE_FORM_CUSTOMER_EMAIL_FIELD` | Form field ID for customer email | `entry.1883668962` |
| `GOOGLE_FORM_CUSTOMER_PHONE_FIELD` | Form field ID for customer phone | `entry.994665389` |
| `GOOGLE_FORM_SCHEDULED_DATE_FIELD` | Form field ID for scheduled date | `entry.2055873333` |
| `GOOGLE_FORM_SCHEDULED_TIME_FIELD` | Form field ID for scheduled time | `entry.1510790817` |
| `GOOGLE_FORM_HOURS_FIELD` | Form field ID for hours | `entry.1482962453` |
| `GOOGLE_FORM_MATERIALS_FIELD` | Form field ID for materials | `entry.1942996151` |
| `GOOGLE_FORM_CLEANERS_FIELD` | Form field ID for cleaners | `entry.1410396487` |
| `GOOGLE_FORM_TIMEOUT` | HTTP timeout in seconds | `10` |
| `GOOGLE_FORM_RETRY_ATTEMPTS` | Number of retry attempts | `3` |

### SkipCash Configuration

| Variable | Description | Default Value |
|----------|-------------|---------------|
| `SKIPCASH_TEST_MODE` | Enable test mode (true/false) | `true` |

#### Production Environment
| Variable | Description | Default Value |
|----------|-------------|---------------|
| `SKIPCASH_PRODUCTION_API_URL` | Production API URL | `https://api.skipcash.app` |
| `SKIPCASH_PRODUCTION_CLIENT_ID` | Production client ID | `7242ee4f-ca43-44bb-804c-4f0c621bb54d` |
| `SKIPCASH_PRODUCTION_API_KEY` | Production API key | `2ce8c700-f8e6-4cc5-b59a-0069f368815d` |
| `SKIPCASH_PRODUCTION_SECRET_KEY` | Production secret key | `[long secret key]` |
| `SKIPCASH_PRODUCTION_WEBHOOK_KEY` | Production webhook key | `43ef9131-140e-4871-8586-94b8f69f32b2` |

#### Sandbox Environment
| Variable | Description | Default Value |
|----------|-------------|---------------|
| `SKIPCASH_SANDBOX_API_URL` | Sandbox API URL | `https://skipcashtest.azurewebsites.net` |
| `SKIPCASH_SANDBOX_CLIENT_ID` | Sandbox client ID | `3d8fecfa-f2c0-4fc8-a913-91634b306eec` |
| `SKIPCASH_SANDBOX_API_KEY` | Sandbox API key | `288d604d-03b6-4c66-821e-0a82a3fd2cc8` |
| `SKIPCASH_SANDBOX_SECRET_KEY` | Sandbox secret key | `[long secret key]` |
| `SKIPCASH_SANDBOX_WEBHOOK_KEY` | Sandbox webhook key | `a269aaab-8381-4b63-8c83-f1e612494183` |

## Configuration Management

The configuration is currently hardcoded with the values extracted from the Laravel backend. If you need to modify any settings, you can edit the `src/config.ts` file directly.

### Modifying Configuration

To change any configuration values:

1. Open `functions/functions/src/config.ts`
2. Modify the desired values
3. Redeploy your Firebase functions

### Example: Changing SkipCash Test Mode

```typescript
// In src/config.ts
export const skipCashConfig: SkipCashConfig = {
    isTestMode: false, // Change from true to false for production
    // ... rest of config
};
```

## Usage in Code

Import and use the configuration in your Firebase Functions:

```typescript
import { appConfig, getCurrentSkipCashConfig, getGoogleFormField } from './config';

// Access Google Form configuration
const formUrl = appConfig.google.formUrl;
const orderIdField = getGoogleFormField('orderId');

// Access SkipCash configuration
const skipCashConfig = getCurrentSkipCashConfig();
const apiUrl = skipCashConfig.apiUrl;
const apiKey = skipCashConfig.apiKey;
```

## Security Notes

- Configuration values are hardcoded in the source code
- API keys and secrets are included in the configuration
- Use test mode during development
- Validate webhook signatures in production
- Consider moving sensitive data to environment variables for production deployments

## Migration from Laravel

This configuration was extracted from the Laravel backend services:
- `GoogleFormService.php` - Google Form integration
- `SkipCashService.php` - SkipCash payment processing

The configuration maintains the same structure and default values as the Laravel implementation.
