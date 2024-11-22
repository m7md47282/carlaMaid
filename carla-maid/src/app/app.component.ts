import { Component, OnInit, Renderer2 } from '@angular/core';
import { provideRouter, RouterModule, RouterOutlet } from '@angular/router';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Languages } from './shared/interfaces/languages';
import { ConfigService } from './shared/config/config.service';
import { HeaderComponent } from './header/header.component';
import { environment } from '../environments/environment';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';


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

  lang: Languages = environment.lang as Languages;

  constructor(
    private _configService: ConfigService
    ) {
   
  }
  ngOnInit(): void {
    this.setLang()
  }

  setLang() {
    let lang = localStorage.getItem('lang') || environment.lang
    
    this._configService.setLang(lang as Languages);

    this.lang = this._configService.getLang()
  }


}
