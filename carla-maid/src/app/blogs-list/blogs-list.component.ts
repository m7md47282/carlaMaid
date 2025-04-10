import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedService } from '../shared/services/shared.service';
import { WordPressService } from '../shared/services/word-press.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-blogs-list',
  standalone: true,
  imports: [
    TranslateModule,
    RouterModule,

    CommonModule,
    RouterModule
  ],
  templateUrl: './blogs-list.component.html',
  styleUrl: './blogs-list.component.sass'
})
export class BlogsListComponent {
  lang: string = 'en';
  posts!: any[];
  blogsPosts: any[] = [];
  selectedPost: any;

  private selectedPostSource = new BehaviorSubject<any>(null); // to send the post 
  selectedPost$ = this.selectedPostSource.asObservable(); // to send the post 

  constructor(
    private translateService: TranslateService,
    protected _sharedService: SharedService,
    private _wordPressService: WordPressService,
    private router: Router
  ) {
    this.lang = this.translateService.currentLang || 'en';
    this.translateService.onLangChange.subscribe(() => {
      this.lang = this.translateService.currentLang || 'en';
    });
  }

  ngOnInit(): void {
    this._sharedService.selectedPost$.subscribe(post => {
      this.selectedPost = post;
    });
    this.getBlogsPosts();
  }


 getFirstImage(html: string): string | null {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const img = doc.querySelector("img");
    return img ? img.src : "../../assets/images/posts/default.png";
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
        this.posts = value;
      }
    });
  }

  sendPost(post: any) {
    this._sharedService.selectPost(post);
    this.router.navigate(['/view-blogs']);
  }
}
