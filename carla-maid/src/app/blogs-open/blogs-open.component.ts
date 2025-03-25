import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { WordPressService } from '../shared/services/word-press.service';
import { SharedService } from '../shared/services/shared.service';
@Component({
  selector: 'app-blogs-open',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
  ],
  templateUrl: './blogs-open.component.html',
  styleUrl: './blogs-open.component.sass'
})
export class BlogsOpenComponent {
  lang: string;
  posts!: any[];

  constructor(
    private translateService: TranslateService,
    private _wordPressService: WordPressService,
    protected _sharedService: SharedService
  ) {

    this.lang = this.translateService.currentLang || 'en';
    this.translateService.onLangChange.subscribe(() => {
      this.lang = this.translateService.currentLang || 'en';
    });

    this.getPosts();
  }

  /**
   * Retrieves posts from the WordPress service with the specified parameters.
   */ 
  getPosts(): void {
    const params = {
      per_page: 100,
      page: 1,
      orderby: 'date',
      order: 'asc'
    };

    const preparedParams = this._sharedService.prepareParams({ params: params });

    this._wordPressService.getPostsByCategoryName('blogs', preparedParams).subscribe({
      next: (value: any) => {
        this.posts = value;
      }
    });
  }

}
