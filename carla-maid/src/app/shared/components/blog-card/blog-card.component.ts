import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.sass'
})
export class BlogCardComponent {
  blog = input.required<any>();
  
  constructor(protected _sharedService: SharedService) {}

  getDefaultImage(): string {
    return 'assets/images/posts/default.png';
  }

  getFirstImage(html: string): string {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const img = doc.querySelector("img");
    return img ? img.src : this.getDefaultImage();
  }

  stripHtml(html: string): string {
    return this._sharedService.stripHtml(html);
  }

  getExcerpt(content: string, maxLength: number = 150): string {
    const stripped = this.stripHtml(content);
    if (stripped.length <= maxLength) {
      return stripped;
    }
    return stripped.substring(0, maxLength) + '...';
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    if (target) {
      target.src = this.getDefaultImage();
    }
  }
}
