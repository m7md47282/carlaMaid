import { Component } from '@angular/core';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../shared/config/config.service';
import { MatIconModule } from '@angular/material/icon'
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslateModule,
    MatIconModule 
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  environment ={lang: 'en'};
  textDir :string = 'ltr'
  currentLang: string = 'en'

  constructor(private translate: TranslateService ,private configService: ConfigService) { 
    this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
      {
       
        document.documentElement.lang = event.lang;
        document.documentElement.dir = event.lang == 'ar'? 'rtl' : 'ltr';

      });
  }
  switchLanguage(): void {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('lang', this.currentLang);
    document.documentElement.lang = this.currentLang;
    this.environment.lang = this.currentLang;
    this.translate.use(this.environment.lang);
  }
}
