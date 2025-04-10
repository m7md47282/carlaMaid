import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { WordPressService } from '../shared/services/word-press.service';
import { SharedService } from '../shared/services/shared.service';
import { BlogsListComponent } from '../blogs-list/blogs-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-blogs',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule
  ],
  templateUrl: './view-blogs.component.html',
  styleUrl: './view-blogs.component.sass'
})
export class ViewBlogsComponent {
  lang: string;
  posts!: any[];
  blogsPosts!: any[];

  selectedPost: any;

  constructor(
    private translateService: TranslateService,
    private _wordPressService: WordPressService,
    protected _sharedService: SharedService,
  ) {

    this.lang = this.translateService.currentLang || 'en';
    this.translateService.onLangChange.subscribe(() => {
      this.lang = this.translateService.currentLang || 'en';
    });

    this.getPosts();
  }
  ngOnInit(){
    this._sharedService.selectedPost$.subscribe(post => {
      this.selectedPost = post;
    });
  }

  getPosts(): void {
    const postsPage = 'blogs';
    const categoriesNames = [postsPage, this.lang];

    const params = {
      per_page: 100,
      page: 1
    };

    this._wordPressService.getPostsByCategoriesNames(postsPage, categoriesNames, params).subscribe({
      next: (value: any) => {
        this.posts = value;
      }
    });
  }

  
  getBlogsPosts(): void {
    const postsPage = 'blogs';
    const categoriesNames = [postsPage, this.lang];

    const params = {
      per_page: 20,
      page: 1
    };

    this._wordPressService.getPostsByCategoriesNames(postsPage, categoriesNames, params).subscribe({
      next: (value: any) => {
        this.blogsPosts = value;
      }
    });
  }

  sendpost(post:any){
    this._sharedService.selectPost(post);
    this.selectedPost = post;
  }


}
