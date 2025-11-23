import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hospitality-staff',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './hospitality-staff.component.html',
  styleUrl: './hospitality-staff.component.sass'
})
export class HospitalityStaffComponent {
  services = [
    { icon: 'pi pi-users', title: 'Trained Professionals', description: 'Experienced hospitality staff ready to serve' },
    { icon: 'pi pi-star', title: 'Event Support', description: 'Dedicated staff for your events and gatherings' },
    { icon: 'pi pi-shield', title: 'Reliable Service', description: 'Vetted and trustworthy hospitality personnel' },
    { icon: 'pi pi-clock', title: 'Flexible Hours', description: 'Available for short or long-term assignments' }
  ];

  included = [
    'Professional event servers',
    'Hotel and restaurant staff',
    'Catering personnel',
    'Guest reception staff',
    'Uniformed and well-trained professionals',
    'Background-checked team members'
  ];
}
