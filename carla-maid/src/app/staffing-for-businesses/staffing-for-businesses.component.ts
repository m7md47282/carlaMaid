import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-staffing-for-businesses',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './staffing-for-businesses.component.html',
  styleUrl: './staffing-for-businesses.component.sass'
})
export class StaffingForBusinessesComponent {
  services = [
    { icon: 'pi pi-briefcase', title: 'Contract Cleaning', description: 'Long-term cleaning contracts for businesses' },
    { icon: 'pi pi-users', title: 'Trained Teams', description: 'Professional commercial cleaning staff' },
    { icon: 'pi pi-chart-line', title: 'Scalable Solutions', description: 'Services that grow with your business' },
    { icon: 'pi pi-shield', title: 'Quality Assurance', description: 'Consistent standards and inspections' }
  ];

  included = [
    'Dedicated cleaning teams',
    'Flexible contract terms',
    'Industry-specific expertise',
    'Regular quality inspections',
    'Customized cleaning schedules',
    'Emergency cleaning support',
    'Supply and equipment management',
    'Account manager assigned'
  ];
}
