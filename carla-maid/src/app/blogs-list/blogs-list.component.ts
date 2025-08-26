import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedService } from '../shared/services/shared.service';
import { WordPressService } from '../shared/services/word-press.service';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from '../shared/components/blog-card/blog-card.component';

@Component({
  selector: 'app-blogs-list',
  standalone: true,
  imports: [
    TranslateModule,
    RouterModule,
    CommonModule,
    BlogCardComponent
  ],
  templateUrl: './blogs-list.component.html',
  styleUrl: './blogs-list.component.sass'
})
export class BlogsListComponent implements OnInit {
  lang: string = 'en';
  blogsPosts: any[] = [];
  isLoadingBlogs: boolean = false;
  totalBlogs: number = 0;
  currentPage: number = 1;
  blogsPerPage: number = 20;
  hasMoreBlogs: boolean = true;
  errorMessage: string = '';

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
    this.getBlogsPosts();
  }

  getBlogsPosts(): void {
    this.isLoadingBlogs = true;
    this.errorMessage = '';
    
    const params = {
      per_page: this.blogsPerPage,
      page: this.currentPage
    };

    // Add timeout to prevent hanging requests
    const timeout = setTimeout(() => {
      this.isLoadingBlogs = false;
      if (!this.blogsPosts || this.blogsPosts.length === 0) {
        this.errorMessage = 'Request timeout. Please try again.';
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
        this.errorMessage = 'Failed to load blogs. Please try again.';
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

  retryLoading(): void {
    this.currentPage = 1;
    this.getBlogsPosts();
  }
}
