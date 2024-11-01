import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Languages } from './shared/interfaces/languages';
import { ConfigService } from './shared/config/config.service';
import { environment } from '../environments/environment';

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
export class AppComponent implements OnInit {
  title = 'carla-maid';

  lang: Languages = environment.lang as Languages;

  constructor(
    private _configService: ConfigService
    ) {
   
  }
  ngOnInit(): void {}

  toggleLang(){
    this._configService.getLang() === 'ar'? this.setLang('en') : this.setLang('ar');

    this.lang = this._configService.getLang()
  }
  setLang(lang: any) {
    this._configService.setLang(lang);
  }


}
