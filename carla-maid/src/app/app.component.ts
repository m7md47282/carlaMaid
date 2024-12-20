import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Languages } from './shared/interfaces/languages';
import { ConfigService } from './shared/config/config.service';
import { HeaderComponent } from './header/header.component';
import { environment } from '../environments/environment';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { FooterComponent } from './footer/footer.component';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    RouterModule,
    MatProgressSpinnerModule
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

      this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.isLoading = true;
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          this.isLoading = false;

        }
      });
   
  }
  ngOnInit(): void {
    this.setLang()
  }

  setLang() {
    if (this._configService.isBrowser()) {
      let lang = localStorage.getItem('lang') || environment.lang

      this._configService.setLang(lang as Languages);

      this.lang = this._configService.getLang()
    }

  }


}
