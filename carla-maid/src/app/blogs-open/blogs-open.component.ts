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
  blogsPosts!: any[];

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
   * Retrieves posts filtered by multiple category names.
   */
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
      per_page: 20,
      page: 1
    };

    this._wordPressService.getPostsByCategoriesNames(postsPage, categoriesNames, params).subscribe({
      next: (value: any) => {
        this.blogsPosts = value;
      }
    });
  }
}
