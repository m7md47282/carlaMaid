import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seasonal-cleaning',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './seasonal-cleaning.component.html',
  styleUrl: './seasonal-cleaning.component.sass'
})
export class SeasonalCleaningComponent {
  services = [
    { icon: 'pi pi-sun', title: 'Spring Cleaning', description: 'Fresh start deep cleaning for spring' },
    { icon: 'pi pi-calendar', title: 'Holiday Prep', description: 'Get your home ready for celebrations' },
    { icon: 'pi pi-snowflake', title: 'Winter Care', description: 'Seasonal maintenance and cleaning' },
    { icon: 'pi pi-refresh', title: 'Year-Round', description: 'Quarterly deep cleaning services' }
  ];

  included = [
    'Comprehensive deep cleaning',
    'Window washing (inside & out)',
    'Cabinet and closet organization',
    'Ceiling fan and light fixture cleaning',
    'Baseboards and trim wiping',
    'Appliance deep cleaning',
    'Upholstery and furniture cleaning',
    'Outdoor space preparation'
  ];
}
