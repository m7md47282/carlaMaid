import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-cleaning',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './home-cleaning.component.html',
  styleUrl: './home-cleaning.component.sass'
})
export class HomeCleaningComponent {
  services = [
    { icon: 'pi pi-home', title: 'Complete Home Care', description: 'Every room cleaned to perfection' },
    { icon: 'pi pi-clock', title: 'Flexible Scheduling', description: 'Choose times that work for you' },
    { icon: 'pi pi-shield', title: 'Trusted Cleaners', description: 'Background-checked professionals' },
    { icon: 'pi pi-sparkles', title: 'Quality Guaranteed', description: 'Your satisfaction is our priority' }
  ];

  included = [
    'Kitchen cleaning and sanitization',
    'Bathroom deep cleaning',
    'Bedroom and living area dusting',
    'Floor vacuuming and mopping',
    'Window and mirror cleaning',
    'Furniture polishing',
    'Appliance exterior cleaning',
    'Trash removal'
  ];
}
