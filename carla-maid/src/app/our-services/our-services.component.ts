import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.sass'
})
export class OurServicesComponent {

}
