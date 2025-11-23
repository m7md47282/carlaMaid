import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-office-cleaning',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './office-cleaning.component.html',
  styleUrl: './office-cleaning.component.sass'
})
export class OfficeCleaningComponent {
  services = [
    { icon: 'pi pi-desktop', title: 'Workspace Sanitization', description: 'Thorough cleaning of desks, keyboards, and equipment' },
    { icon: 'pi pi-building', title: 'Floor Care', description: 'Professional cleaning for all floor types' },
    { icon: 'pi pi-trash', title: 'Waste Management', description: 'Efficient disposal and recycling services' },
    { icon: 'pi pi-sparkles', title: 'Common Areas', description: 'Spotless break rooms, lobbies, and restrooms' }
  ];

  included = [
    'Daily or weekly cleaning schedules',
    'Desk and workstation sanitization',
    'Floor vacuuming and mopping',
    'Restroom deep cleaning',
    'Break room and kitchen cleaning',
    'Window and glass cleaning',
    'Trash removal and recycling',
    'After-hours service available'
  ];
}
