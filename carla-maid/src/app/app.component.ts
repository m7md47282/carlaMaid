import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Languages } from './shared/interfaces/languages';
import { ConfigService } from './shared/config/config.service';
import { HeaderComponent } from './header/header.component';
import { environment } from '../environments/environment';

import { FooterComponent } from './footer/footer.component';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    RouterModule,
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
    private router: Router
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
  }

  setLang() {
    if (this._configService.isBrowser()) {
      let lang = localStorage.getItem('lang') || environment.lang

      this._configService.setLang(lang as Languages);

      this.lang = this._configService.getLang()
    }

  }


}
