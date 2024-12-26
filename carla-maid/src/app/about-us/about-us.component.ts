import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.sass'
})
export class AboutUSComponent {

}
