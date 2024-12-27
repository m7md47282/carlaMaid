import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatLabel, MatSelectModule } from '@angular/material/select';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book-now',
  standalone: true,
  providers: [provideNativeDateAdapter(), DatePipe],
  imports: [
    MatSelectModule,
    TranslateModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterLink,
    MatDatepickerModule,
  ],
  templateUrl: './book-now.component.html',
  styleUrl: './book-now.component.sass'
})
export class BookNowComponent implements OnInit{
  bookingForm: FormGroup;
  price: number = 0
  sent = false;
  datePipe = inject(DatePipe)
  minDate: Date;
  maxDate: Date;

  @ViewChild('addressInput') addressInput!: ElementRef;
  @ViewChild('mapContainer') mapContainer!: ElementRef;
  

  constructor(private fb: FormBuilder, private translate: TranslateService,private router: Router) {
    this.bookingForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      // location: ['', Validators.required],
      address: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      arrivalTime: ['', Validators.required],
      cleaners: ['', Validators.required],
      materials: ['', Validators.required],
      hours: ['', Validators.required]
    });

    this.translate.setDefaultLang('en');
    const today = new Date();
    const daysRange = 30
    this.minDate = today;
    this.maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + daysRange); 
  }
  ngOnInit(): void {
    this.bookingForm.valueChanges.subscribe(() => this.calculatePrice());
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0 });
      }
    });
  }


  calculatePrice(): void {
    console.log(this.bookingForm)
    let cleanerPrice = 35;
    let withMatPrice = 5
    this.price = this.bookingForm.value.cleaners * cleanerPrice  * this.bookingForm.value.hours + (this.bookingForm.value.materials? this.bookingForm.value.hours * withMatPrice * this.bookingForm.value.cleaners : 0 );
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  resetForm(){
    this.bookingForm.reset();
  }

  onSubmit() {
    var formData = new FormData();
    formData.append('entry.1390915916', this.bookingForm.value.fullName); 
    formData.append('entry.1883668962', this.bookingForm.value.email); 
    formData.append('entry.994665389', this.bookingForm.value.phone); 
    formData.append('entry.1609292890', this.bookingForm.value.address); 
    formData.append('entry.2055873333', this.datePipe.transform( this.bookingForm.value.arrivalDate , 'dd/MM/yyyy')  || this.bookingForm.value.arrivalDate); 
    formData.append('entry.1510790817', this.bookingForm.value.arrivalTime); 
    formData.append('entry.1410396487', this.bookingForm.value.cleaners); 
    formData.append('entry.1942996151', this.bookingForm.value.materials); 
    formData.append('entry.1482962453', this.bookingForm.value.hours); 


    let googleFormUrl ='https://docs.google.com/forms/u/0/d/e/1FAIpQLSeouZn9dc038aSnDj40SGjGz2uWEbPqV17SAvUHqaW4483yew/formResponse';


    this.submitGoogleFrom({formURl: googleFormUrl, formData: formData})
  }

  submitGoogleFrom({formURl, formData}: {formURl: string, formData: FormData}){
    this.sent = false;
    fetch(formURl, {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    })
     .then((res: any) => {
        this.sent = true;
        this.resetForm()

        setTimeout(() => {
          this.sent = false;
        }, 9000);
        
      })
     .catch(() => console.log('There was an error submitting the form.'));
  }
  openDatePicker(picker:any){
    picker.open()
  }
}
