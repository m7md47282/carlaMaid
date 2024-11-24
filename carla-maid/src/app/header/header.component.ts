import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../shared/config/config.service';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterModule, Routes } from '@angular/router';
import { OurServicesComponent } from '../our-services/our-services.component';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenubarModule,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})

export class HeaderComponent implements OnInit {
  environment ={lang: 'en'};
  textDir :string = 'ltr'
  currentLang: string = 'en'
  items: any

  constructor(private translate: TranslateService ,private configService: ConfigService,private router: Router) {}
  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        link: '/'
      },
      {
        label: 'Our Services',
        icon: 'pi pi-star',
        link: "our-services"
      },
      {
        label: 'About Us',
        icon: 'pi pi-envelope',
        link: '/about-us'
      },
      {
        label: 'Blogs',
        icon: 'pi pi-envelope',
        link: '/blogs-open'
      }
    ];
  }


  switchLanguage(): void {
   this.configService.toggleLang()
  }
  
}
