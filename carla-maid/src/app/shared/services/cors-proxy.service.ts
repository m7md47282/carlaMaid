import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CorsProxyService {

  constructor(private http: HttpClient) { }

  /**
   * Make a CORS-safe request to SkipCash API
   */
  makeSkipCashRequest(endpoint: string, data: any): Observable<any> {
    const apiUrl = environment.skipCash.isTestMode ? 
      environment.skipCash.sandboxApiUrl : 
      environment.skipCash.apiUrl;

    const fullUrl = `${apiUrl}${endpoint}`;

    // Use a CORS proxy or your backend as intermediary
    const proxyUrl = `${environment.backendApiUrl}/proxy/skipcash`;
    
    const payload = {
      targetUrl: fullUrl,
      method: 'POST',
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_SKIPCASH_API_KEY' // Replace with actual key
      }
    };

    return this.http.post(proxyUrl, payload);
  }

  /**
   * Test SkipCash API connectivity
   */
  testSkipCashConnection(): Observable<any> {
    return this.makeSkipCashRequest('/health', {});
  }

  /**
   * Create payment with CORS handling
   */
  createPaymentWithCors(paymentData: any): Observable<any> {
    return this.makeSkipCashRequest('/payment/create', paymentData);
  }
} 