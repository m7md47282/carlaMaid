import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-eco-friendly-cleaning',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './eco-friendly-cleaning.component.html',
  styleUrl: './eco-friendly-cleaning.component.sass'
})
export class EcoFriendlyCleaningComponent {
  services = [
    { icon: 'pi pi-check-circle', title: 'Green Products', description: 'Non-toxic, biodegradable cleaning solutions' },
    { icon: 'pi pi-heart', title: 'Safe for Family', description: 'Pet and child-friendly cleaning methods' },
    { icon: 'pi pi-globe', title: 'Eco-Conscious', description: 'Reduced carbon footprint' },
    { icon: 'pi pi-sun', title: 'Natural Fresh', description: 'Chemical-free freshness' }
  ];

  included = [
    'Plant-based cleaning products',
    'Biodegradable materials',
    'Microfiber cloth technology',
    'Water conservation practices',
    'Recycled packaging',
    'Energy-efficient equipment',
    'Non-toxic sanitizers',
    'Environmentally responsible disposal'
  ];
}
