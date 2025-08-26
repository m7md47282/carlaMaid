import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../shared/config/config.service';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterModule, Routes } from '@angular/router';
import { Direction, Languages } from '../shared/interfaces/languages';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslateModule,
    MatIconModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})

export class HeaderComponent implements OnInit, OnDestroy {
  items: any[] = [];
  private langChangeSubscription?: Subscription;
  isMobileMenuOpen = false;

  constructor(private translate: TranslateService, private configService: ConfigService, private router: Router) {}
  
  ngOnInit(): void {
    if (this.configService.isBrowser()) {
      const savedLang = localStorage.getItem('currentLang') || 'en';
    }
    
    // Set initial navigation items
    this.updateNavigationItems();
    
    // Subscribe to language changes
    this.langChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.updateNavigationItems();
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    // Close mobile menu on window resize if screen becomes larger
    if (event.target.innerWidth > 768 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    // Close mobile menu when clicking outside
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-container') && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  private updateNavigationItems(): void {
    this.items = [
      {
        label: this.translate.instant('header.home'),
        icon: 'pi pi-home',
        link: '/'
      },
      {
        label: this.translate.instant('header.ourServices'),
        icon: 'pi pi-star',
        link: '/our-services'
      },
      {
        label: this.translate.instant('shared.aboutUs'),
        icon: 'pi pi-envelope',
        link: '/about-us'
      },
      {
        label: this.translate.instant('header.blog'),
        icon: 'pi pi-envelope',
        link: '/blogs-list'
      },
      {
        label: this.translate.instant('header.bookNow'),
        icon: 'pi pi-envelope',
        link: '/book-now'
      }
    ];
    
    console.log('Navigation items updated:', this.items);
  }

  // Test method to manually navigate
  navigateToBookNow(): void {
    console.log('Navigating to book-now...');
    this.router.navigate(['/book-now']).then(success => {
      console.log('Navigation successful:', success);
    }).catch(error => {
      console.error('Navigation failed:', error);
    });
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
