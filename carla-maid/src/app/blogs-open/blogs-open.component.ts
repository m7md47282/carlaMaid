import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-blogs-open',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule
  ],
  templateUrl: './blogs-open.component.html',
  styleUrl: './blogs-open.component.sass'
})
export class BlogsOpenComponent {
  lang: string ;

  constructor(private translateService: TranslateService){
    this.lang = this.translateService.currentLang || 'en';
    this.translateService.onLangChange.subscribe(() => {
      this.lang = this.translateService.currentLang || 'en';
    });
  }
}
