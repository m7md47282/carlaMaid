import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../shared/config/config.service';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterModule, Routes } from '@angular/router';
import { OurServicesComponent } from '../our-services/our-services.component';
import { MenubarModule } from 'primeng/menubar';
import { Direction } from '../shared/interfaces/languages';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenubarModule,
    TranslateModule,
    MatIconModule,
    CommonModule
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
        label: this.translate.instant('header.home'),
        icon: 'pi pi-home',
        link: '/'
      },
      {
        label: this.translate.instant('header.ourServices'),
        icon: 'pi pi-star',
        link: "our-services"
      },
      {
        label: this.translate.instant('header.contact'),
        icon: 'pi pi-envelope',
        link: '/about-us'
      },
      {
        label: this.translate.instant('header.blog'),
        icon: 'pi pi-envelope',
        link: '/blogs-open'
      },
      {
        label: this.translate.instant('header.bookNow'),
        icon: 'pi pi-envelope',
        link: '/book-now'
      }
    ];
  }


  switchLanguage(): void {
   this.configService.toggleLang()
  }
  
  direction(): Direction {
    return this.configService.getDirection() as Direction;
  }
}
