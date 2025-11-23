import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../shared/config/config.service';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { Direction, Languages } from '../shared/interfaces/languages';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenubarModule,
    TranslateModule,
    MatIconModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})

export class HeaderComponent implements OnInit {
  items: any

  constructor(private translate: TranslateService ,private configService: ConfigService,private router: Router) {}
  ngOnInit(): void {
    if (this.configService.isBrowser()) {
      const savedLang = localStorage.getItem('currentLang') || 'en';
    }
   
    this.loadMenuItems();
    
    // Reload menu items when language changes
    this.translate.onLangChange.subscribe(() => {
      this.loadMenuItems();
    });
  }

  loadMenuItems(): void {
    this.items = [
      {
        label: this.translate.instant('header.home'),
        icon: 'pi pi-home',
        link: '/'
      },
      {
        label: this.translate.instant('header.services'),
        icon: 'pi pi-briefcase',
        items: [
          {
            label: this.translate.instant('header.allServices'),
            icon: 'pi pi-th-large',
            link: '/our-services'
          },
          {
            separator: true
          },
          {
            label: this.translate.instant('header.maidServices'),
            icon: 'pi pi-users',
            link: '/services/maid-services'
          },
          {
            label: this.translate.instant('header.deepCleaning'),
            icon: 'pi pi-sparkles',
            link: '/services/deep-cleaning'
          },
          {
            label: this.translate.instant('header.carpetCleaning'),
            icon: 'pi pi-stop',
            link: '/services/carpet-cleaning'
          },
          {
            label: this.translate.instant('header.eventCleaning'),
            icon: 'pi pi-calendar',
            link: '/services/event-cleaning'
          }
        ]
      },
      {
        label: this.translate.instant('shared.aboutUs'),
        icon: 'pi pi-envelope',
        link: '/about-us'
      },
      {
        label: this.translate.instant('header.blog'),
        icon: 'pi pi-book',
        link: '/blogs-list'
      },
      {
        label: this.translate.instant('header.getQuote'),
        icon: 'pi pi-file-edit',
        link: '/quotation-request'
      },
      {
        label: this.translate.instant('header.bookNow'),
        icon: 'pi pi-calendar-plus',
        link: '/book-now'
      }
    ];
  }


  switchLanguage(): void {
   this.configService.toggleLang()
  }

  getLang(): Languages {
    return this.configService.getLang();
  }
  
  direction(): Direction {
    return this.configService.getDirection() as Direction;
  }
}
