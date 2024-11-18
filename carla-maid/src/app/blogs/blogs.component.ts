import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ConfigService } from '../shared/config/config.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    TranslateModule,
    RouterModule,
    RouterLink,
    RouterModule
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.sass'
})
export class BlogsComponent {

 
}
