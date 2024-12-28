import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink
  ],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.sass'
})
export class OurServicesComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    // Set dynamic meta tags based on current language
    this.setMetaTags();

    // Update meta tags when language changes
    this.translate.onLangChange.subscribe(() => {
      this.setMetaTags();
    });
  }

  private setMetaTags() {
    // Get translations for meta content
    const title = this.translate.instant('meta.services.title');
    const description = this.translate.instant('meta.services.description');
    const keywords = this.translate.instant('meta.services.keywords');

    // Set page title
    this.title.setTitle(title);

    // Update meta tags
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });

    // Open Graph meta tags
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://carlamaid.qa/our-services' });
    this.meta.updateTag({ property: 'og:image', content: 'https://carlamaid.qa/assets/images/our-services/our-services-top.png' });

    // Twitter Card meta tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://carlamaid.qa/assets/images/our-services/our-services-top.png' });

    // Additional SEO meta tags
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Carla Maid Services' });
    this.meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });
    this.meta.updateTag({ 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' });

    // Set canonical URL
    const link: HTMLLinkElement = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', 'https://your-domain.com' + window.location.pathname);
    document.head.appendChild(link);
  }
}
