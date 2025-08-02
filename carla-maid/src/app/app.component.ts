import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Languages } from './shared/interfaces/languages';
import { ConfigService } from './shared/config/config.service';
import { HeaderComponent } from './header/header.component';
import { environment } from '../environments/environment';

import { FooterComponent } from './footer/footer.component';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { PageTrackingService } from './shared/services/page-tracking.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  title = 'carla-maid';
  isLoading = false;
  lang: Languages = environment.lang as Languages;

  constructor(
    private _configService: ConfigService,
    private router: Router,
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer,
    private pageTrackingService: PageTrackingService
    ) {

      
   
  }
  ngOnInit(): void {
    this.setLang()
    this.isLoading = false;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.isLoading = false;
        if (this._configService.isBrowser()) {
          window.scrollTo(0, 0);
        }
      }
    });



    this.iconRegistry.addSvgIcon(
      'instagram',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/images/icons/instagram.svg')
    );
    this.iconRegistry.addSvgIcon(
      'x',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/images/icons/x.svg')
    );
    this.iconRegistry.addSvgIcon(
      'facebook',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/images/icons/facebook.svg')
    );
    this.iconRegistry.addSvgIcon(
      'linkedin',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/images/icons/linkedin.svg')
    );
    this.iconRegistry.addSvgIcon(
      'whatsapp',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/images/icons/whatsapp.svg')
    );
    this.iconRegistry.addSvgIcon(
      'phone',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/images/icons/phone.svg')
    );




  }

  setLang() {
    if (this._configService.isBrowser()) {
      let lang = localStorage.getItem('lang') || environment.lang

      this._configService.setLang(lang as Languages);

      this.lang = this._configService.getLang()
    }

  }

  openUrl(url: string) {
    window.open(url, '_blank');
  }

  makePhoneCall(phoneNumber: string) {
    window.open(`tel:${phoneNumber}`, '_self');
  }


}
