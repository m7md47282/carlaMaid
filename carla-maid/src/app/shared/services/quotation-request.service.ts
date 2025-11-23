import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface QuotationRequestPayload {
  companyName: string;
  contactPerson: string;
  contactNumber: string;
  email: string;
  location: string;
  propertyType: string;
  contractDuration: string;
  customDuration?: string;
  startDate: string;
  cleaningService: string;
  workingDays: string[];
  startTime: string;
  endTime: string;
  cleaningMaterials: string;
  numberOfCleaners: number;
  needSupervisor: boolean;
  propertySize?: string;
  budget?: string;
  additionalNotes?: string;
}

interface QuotationResponse {
  success: boolean;
  message?: string;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuotationRequestService {
  private readonly endpoint = `${environment.backendApiUrl}/quotation-request/email`;

  constructor(private http: HttpClient) {}

  submitQuotationRequest(payload: QuotationRequestPayload): Observable<QuotationResponse> {
    return this.http.post<QuotationResponse>(this.endpoint, payload);
  }
}

