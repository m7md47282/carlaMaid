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


  /**
   * Extracts the post thumbnail image URL
   * First checks for WordPress featured media, then falls back to content images
   * @param post - The WordPress post object
   * @returns The image URL or default image path
   */
  getPostImage(post: any): string {
    // Check for featured media in _embedded
    if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
      const featuredMedia = post._embedded['wp:featuredmedia'][0];
      // Try to get medium_large or medium size first for better performance
      if (featuredMedia.media_details && featuredMedia.media_details.sizes) {
        // Priority order: medium_large > large > medium > thumbnail
        if (featuredMedia.media_details.sizes.medium_large) {
          return featuredMedia.media_details.sizes.medium_large.source_url;
        }
        if (featuredMedia.media_details.sizes.large) {
          return featuredMedia.media_details.sizes.large.source_url;
        }
        if (featuredMedia.media_details.sizes.medium) {
          return featuredMedia.media_details.sizes.medium.source_url;
        }
        if (featuredMedia.media_details.sizes.thumbnail) {
          return featuredMedia.media_details.sizes.thumbnail.source_url;
        }
      }
      // Fall back to full size image (only if no optimized sizes available)
      if (featuredMedia.source_url) {
        return featuredMedia.source_url;
      }
    }
    
    // Fall back to extracting first image from content
    if (post.content && post.content.rendered) {
      const doc = new DOMParser().parseFromString(post.content.rendered, "text/html");
      const img = doc.querySelector("img");
      if (img && img.src) {
        return img.src;
      }
    }
    
    // Default image if nothing found
    return "../../assets/images/posts/default.png";
  }
  getBlogsPosts(): void {
    const postsPage = 'blogs';
    const categoriesNames = [postsPage, this.lang];

    const params = {
      per_page: 100,
      page: 1
    };

    console.log('🔍 Fetching blogs with categories:', categoriesNames);

    this._wordPressService.getPostsByCategoriesNames(postsPage, categoriesNames, params).subscribe({
      next: (value: any) => {
        console.log('📝 Received posts:', value.length);
        
        // Debug: Check first post's image data
        if (value.length > 0) {
          const firstPost = value[0];
          console.log('🖼️ First post image debug:');
          console.log('  - Has _embedded?', !!firstPost._embedded);
          console.log('  - Has featured media?', !!firstPost._embedded?.['wp:featuredmedia']);
          if (firstPost._embedded?.['wp:featuredmedia']?.[0]) {
            console.log('  - Featured image URL:', firstPost._embedded['wp:featuredmedia'][0].source_url);
            console.log('  - Available sizes:', Object.keys(firstPost._embedded['wp:featuredmedia'][0].media_details?.sizes || {}));
          } else {
            console.warn('  ⚠️ No featured image found for first post');
          }
          console.log('  - Extracted image URL:', this.getPostImage(firstPost));
        } else {
          console.warn('⚠️ No posts returned! Check WordPress categories.');
        }
        
        this.blogsPosts = value;
        this.posts = value;
      },
      error: (error: any) => {
        console.error('❌ Error fetching blog posts:', error);
      }
    });
  }

  sendPost(postId: any) {
    this.router.navigate(['/view-blogs', postId]);
  }
}
