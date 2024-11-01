import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Languages } from './shared/interfaces/languages';
import { ConfigService } from './shared/config/config.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslateModule,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'carla-maid';
  environment ={lang: 'en'};
  textDir : string ='ltr'

  constructor(private translate: TranslateService ,private configService: ConfigService){
    // this.setLang('en')
    this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
      {
        if(event.lang == 'ar')
        {
          this.textDir = 'rtl';
        } 
        else
        {
          this.textDir = 'ltr';
        }
      });
  }
  setLang(lang: any){
   
      localStorage.setItem('lang', lang);
      document.documentElement.lang = lang;
      this.environment.lang = lang;
      this.translate.use(this.environment.lang);

  }

}
