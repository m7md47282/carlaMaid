import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../shared/config/config.service';
import { WordPressService } from '../shared/services/word-press.service';
import { SharedService } from '../shared/services/shared.service';
import { BlogCardComponent } from '../shared/components/blog-card/blog-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    TranslateModule,
    RouterModule,
    RouterLink,
    BlogCardComponent,
    CommonModule
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.sass'
})
export class BlogsComponent implements OnInit {
  lang: string = 'en';
  blogsPosts: any[] = [];
  isLoadingBlogs: boolean = false;
  totalBlogs: number = 0;
  currentPage: number = 1;
  blogsPerPage: number = 12;
  hasMoreBlogs: boolean = true;

  constructor(
    private translateService: TranslateService,
    private _wordPressService: WordPressService,
    protected _sharedService: SharedService
  ) {
    this.lang = this.translateService.currentLang || 'en';
    this.translateService.onLangChange.subscribe(() => {
      this.lang = this.translateService.currentLang || 'en';
    });
  }

  ngOnInit(): void {
    this.getBlogsPosts();
  }

  getBlogsPosts(): void {
    this.isLoadingBlogs = true;
    
    const params = {
      per_page: this.blogsPerPage,
      page: this.currentPage
    };

    // Add timeout to prevent hanging requests
    const timeout = setTimeout(() => {
      this.isLoadingBlogs = false;
      if (!this.blogsPosts || this.blogsPosts.length === 0) {
        this.blogsPosts = [];
      }
    }, 10000); // 10 second timeout

    this._wordPressService.getPosts(params).subscribe({
      next: (value: any) => {
        clearTimeout(timeout);
        if (this.currentPage === 1) {
          this.blogsPosts = value || [];
        } else {
          this.blogsPosts = [...this.blogsPosts, ...(value || [])];
        }
        
        this.totalBlogs = this.blogsPosts.length;
        this.hasMoreBlogs = (value && value.length === this.blogsPerPage);
        this.isLoadingBlogs = false;
      },
      error: (error: any) => {
        clearTimeout(timeout);
        console.error('Error fetching blog posts:', error);
        this.blogsPosts = [];
        this.isLoadingBlogs = false;
      }
    });
  }

  loadMoreBlogs(): void {
    if (!this.isLoadingBlogs && this.hasMoreBlogs) {
      this.currentPage++;
      this.getBlogsPosts();
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.totalBlogs / this.blogsPerPage);
  }
}
