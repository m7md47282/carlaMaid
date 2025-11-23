import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { finalize } from 'rxjs/operators';
import { QuotationRequestPayload, QuotationRequestService } from '../shared/services/quotation-request.service';

@Component({
  selector: 'app-quotation-request',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './quotation-request.component.html',
  styleUrl: './quotation-request.component.sass'
})
export class QuotationRequestComponent implements OnInit, OnDestroy {
  quotationForm!: FormGroup;
  isSubmitting = false;
  isSuccess = false;
  submissionError = '';
  private successTimer?: ReturnType<typeof setTimeout>;

  propertyTypes = [
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'office', label: 'Office' },
    { value: 'retail', label: 'Retail' },
    { value: 'hospitality', label: 'Hospitality' },
    { value: 'other', label: 'Other' }
  ];

  cleaningServices = [
    { value: 'general', label: 'General Cleaning' },
    { value: 'deep', label: 'Deep Cleaning' },
    { value: 'carpet', label: 'Carpet Cleaning' },
    { value: 'event', label: 'Event Cleaning' },
    { value: 'office', label: 'Office Cleaning' },
    { value: 'maid', label: 'Maid Services' },
    { value: 'housekeeping', label: 'Housekeeping' },
    { value: 'eco', label: 'Eco-Friendly Cleaning' }
  ];

  contractDurations = [
    { value: '1month', label: '1 Month' },
    { value: '3months', label: '3 Months' },
    { value: '6months', label: '6 Months' },
    { value: '1year', label: '1 Year' },
    { value: '2years', label: '2 Years' },
    { value: 'custom', label: 'Custom Duration' }
  ];

  workingDays = [
    { value: 'monday', label: 'Monday' },
    { value: 'tuesday', label: 'Tuesday' },
    { value: 'wednesday', label: 'Wednesday' },
    { value: 'thursday', label: 'Thursday' },
    { value: 'friday', label: 'Friday' },
    { value: 'saturday', label: 'Saturday' },
    { value: 'sunday', label: 'Sunday' }
  ];

  constructor(
    private fb: FormBuilder,
    private quotationRequestService: QuotationRequestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    if (this.successTimer) {
      clearTimeout(this.successTimer);
    }
  }

  initForm(): void {
    this.quotationForm = this.fb.group({
      companyName: ['', [Validators.required, Validators.minLength(2)]],
      contactPerson: ['', [Validators.required, Validators.minLength(2)]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{8,15}$/)]],
      email: ['', [Validators.required, Validators.email]],
      location: ['', [Validators.required, Validators.minLength(5)]],
      propertyType: ['', Validators.required],
      contractDuration: ['', Validators.required],
      customDuration: [''],
      startDate: ['', Validators.required],
      cleaningService: ['', Validators.required],
      workingDays: [[], Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      cleaningMaterials: ['withMaterials', Validators.required],
      numberOfCleaners: ['', [Validators.required, Validators.min(1)]],
      needSupervisor: [false],
      additionalNotes: [''],
      propertySize: [''],
      budget: ['']
    });
  }

  onWorkingDayChange(day: string, checked: boolean | undefined): void {
    if (checked === undefined) return;
    
    const workingDays = this.quotationForm.get('workingDays')?.value || [];
    if (checked) {
      this.quotationForm.patchValue({
        workingDays: [...workingDays, day]
      });
    } else {
      this.quotationForm.patchValue({
        workingDays: workingDays.filter((d: string) => d !== day)
      });
    }
  }

  isDaySelected(day: string): boolean {
    const workingDays = this.quotationForm.get('workingDays')?.value || [];
    return workingDays.includes(day);
  }

  onSubmit(): void {
    if (this.quotationForm.invalid) {
      Object.keys(this.quotationForm.controls).forEach(key => {
        this.quotationForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.submissionError = '';
    this.isSubmitting = true;

    const payload = this.buildRequestPayload();

    this.quotationRequestService
      .submitQuotationRequest(payload)
      .pipe(
        finalize(() => {
          this.isSubmitting = false;
        })
      )
      .subscribe({
        next: () => this.handleSuccessfulSubmission(),
        error: (error) => this.handleSubmissionError(error)
      });
  }

  getErrorMessage(fieldName: string): string {
    const control = this.quotationForm.get(fieldName);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    if (control?.hasError('email')) {
      return 'Please enter a valid email';
    }
    if (control?.hasError('pattern')) {
      return 'Please enter a valid phone number';
    }
    if (control?.hasError('minLength')) {
      return 'Input is too short';
    }
    if (control?.hasError('min')) {
      return 'Value must be at least 1';
    }
    return '';
  }

  private buildRequestPayload(): QuotationRequestPayload {
    const formValue = this.quotationForm.value;
    return {
      companyName: (formValue.companyName || '').trim(),
      contactPerson: (formValue.contactPerson || '').trim(),
      contactNumber: formValue.contactNumber,
      email: formValue.email,
      location: formValue.location,
      propertyType: formValue.propertyType,
      contractDuration: formValue.contractDuration,
      customDuration: formValue.contractDuration === 'custom' ? formValue.customDuration : '',
      startDate: this.formatDateValue(formValue.startDate),
      cleaningService: formValue.cleaningService,
      workingDays: [...(formValue.workingDays || [])],
      startTime: formValue.startTime,
      endTime: formValue.endTime,
      cleaningMaterials: formValue.cleaningMaterials,
      numberOfCleaners: Number(formValue.numberOfCleaners),
      needSupervisor: !!formValue.needSupervisor,
      propertySize: formValue.propertySize,
      budget: formValue.budget,
      additionalNotes: formValue.additionalNotes
    };
  }

  private formatDateValue(value: string | Date): string {
    if (!value) {
      return '';
    }

    if (value instanceof Date && !isNaN(value.getTime())) {
      return value.toISOString().split('T')[0];
    }

    const parsed = new Date(value);
    if (!isNaN(parsed.getTime())) {
      return parsed.toISOString().split('T')[0];
    }

    return value as string;
  }

  private handleSuccessfulSubmission(): void {
    if (this.successTimer) {
      clearTimeout(this.successTimer);
    }

    // Navigate to thank you page after successful submission
    this.router.navigate(['/quotation-request/thank-you']);
  }

  private handleSubmissionError(error: any): void {
    console.error('Quotation request submission error:', error);
    const serverMessage = error?.error?.error || error?.message;
    this.submissionError = serverMessage || 'Failed to submit quotation request. Please try again later.';
  }
}
