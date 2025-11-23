import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customized-cleaning',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './customized-cleaning.component.html',
  styleUrl: './customized-cleaning.component.sass'
})
export class CustomizedCleaningComponent {
  services = [
    { icon: 'pi pi-sliders-h', title: 'Tailored Plans', description: 'Cleaning services designed around your needs' },
    { icon: 'pi pi-calendar', title: 'Flexible Scheduling', description: 'Choose your preferred days and times' },
    { icon: 'pi pi-cog', title: 'Custom Tasks', description: 'Select specific cleaning tasks' },
    { icon: 'pi pi-dollar', title: 'Budget Friendly', description: 'Pay only for what you need' }
  ];

  included = [
    'Personalized cleaning checklist',
    'Flexible frequency options',
    'Priority task selection',
    'Add-on services available',
    'Special requests accommodated',
    'Customized cleaning products',
    'Adjustable service scope',
    'Direct communication with cleaners'
  ];
}
