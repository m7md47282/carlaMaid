import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housekeeping-services',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './housekeeping-services.component.html',
  styleUrl: './housekeeping-services.component.sass'
})
export class HousekeepingServicesComponent {
  services = [
    { icon: 'pi pi-calendar-plus', title: 'Daily Service', description: 'Consistent daily housekeeping care' },
    { icon: 'pi pi-home', title: 'Full Home Care', description: 'Complete household management' },
    { icon: 'pi pi-users', title: 'Professional Staff', description: 'Trained housekeeping professionals' },
    { icon: 'pi pi-clock', title: 'Flexible Schedule', description: 'Morning, afternoon, or evening slots' }
  ];

  included = [
    'Daily cleaning and tidying',
    'Bed making and linen changes',
    'Laundry and ironing',
    'Kitchen maintenance',
    'Bathroom sanitization',
    'Organization and decluttering',
    'Grocery shopping assistance',
    'Pet care support'
  ];
}
