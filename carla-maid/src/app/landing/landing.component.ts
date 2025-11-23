import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Direction } from '../shared/interfaces/languages';
import { ConfigService } from '../shared/config/config.service';
import { Meta, Title } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { WordPressService } from '../shared/services/word-press.service';
import { SharedService } from '../shared/services/shared.service';
import { PhoneTrackDirective } from '../shared/directives/phone-track.directive';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    TranslateModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    RouterLink,
    NgOptimizedImage,
    PhoneTrackDirective
  ],
  animations: [
    trigger('openAnimation', [
      state('out', style({
        opacity: 0,
        transform: 'translateY(20%)',
      })),
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)',
      })),
      transition('out => in', [
        animate('1s ease-out')
      ]),
      transition('in => out', [
        animate('1s ease-in')
      ]),
    ]),

    trigger('slideAside', [
      state('out', style({
        opacity: 0,
        transform: 'translateX(20%)',
      })),
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)',
      })),
      transition('out => in', [
        animate('1s ease-out')
      ]),
      transition('in => out', [
        animate('1s ease-in')
      ]),
    ]),

  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.sass'
})
export class LandingComponent implements OnInit {

  private _translate = inject(TranslateService);
  private _configService = inject(ConfigService);
  private _wordPressService = inject(WordPressService);
  protected _sharedService = inject(SharedService);

  private meta = inject(Meta);
  private titleService = inject(Title);

  lang: string = 'en';

  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  services: {}[] = []
  blogsPosts: any[] = [];
  isLoadingBlogs: boolean = false;

  isInView = false;

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.services = [
      {
        image: '../../assets/images/our-services/our-services-1.png',
        title: this._translate.instant('services.hospitalityStaffTitle'),
        description: this._translate.instant('services.hospitalityStaffDescription')
      },
      {
        image: '../../assets/images/our-services/our-services-2.png',
        title: this._translate.instant('services.officeCleaningTitle'),
        description: this._translate.instant('services.officeCleaningDescription')
      },
      {
        image: '../../assets/images/our-services/our-services-3.png',
        title: this._translate.instant('services.homeCleaningTitle'),
        description: this._translate.instant('services.homeCleaningDescription')
      },
      {
        image: '../../assets/images/our-services/our-services-4.png',
        title: this._translate.instant('services.maidServicesTitle'),
        description: this._translate.instant('services.maidServicesDescription')
      },
      {
        image: '../../assets/images/our-services/our-services-5.png',
        title: this._translate.instant('services.eventCleaningTitle'),
        description: this._translate.instant('services.eventCleaningDescription')
      },
      {
        image: '../../assets/images/our-services/our-services-6.png',
        title: this._translate.instant('services.deepCleaningTitle'),
        description: this._translate.instant('services.deepCleaningDescription')
      },
      {
        image: '../../assets/images/our-services/our-services-7.png',
        title: this._translate.instant('services.ecoFriendlyCleaningTitle'),
        description: this._translate.instant('services.ecoFriendlyCleaningDescription')
      },
      {
        image: '../../assets/images/our-services/our-services-8.png',
        title: this._translate.instant('services.housekeepingTitle'),
        description: this._translate.instant('services.housekeepingDescription')
      },
      {
        image: '../../assets/images/our-services/our-services-9.png',
        title: this._translate.instant('services.carpetCleaningTitle'),
        description: this._translate.instant('services.carpetCleaningDescription')
      },
      {
        image: '../../assets/images/our-services/our-services-10.png',
        title: this._translate.instant('services.staffingBusinessesTitle'),
        description: this._translate.instant('services.staffingBusinessesDescription')
      },
      {
        image: '../../assets/images/our-services/our-services-11.png',
        title: this._translate.instant('services.customizedCleaningTitle'),
        description: this._translate.instant('services.customizedCleaningDescription')
      },
      {
        image: '../../assets/images/our-services/our-services-12.png',
        title: this._translate.instant('services.seasonalCleaningTitle'),
        description: this._translate.instant('services.seasonalCleaningDescription')
      }
    ];

    this.titleService.setTitle('Carla Maid Qatar | Professional Cleaning & Maid Services');

    this.meta.addTags([
      { name: 'description', content: 'Carla Maid Qatar offers professional cleaning and maid services for homes and businesses. Expert cleaners, eco-friendly solutions, and flexible scheduling. Book your cleaning service in Doha today!' },
      { name: 'keywords', content: 'cleaning services Qatar, maid service Doha, professional cleaners, home cleaning, office cleaning, eco-friendly cleaning, housekeeping Qatar, cleaning company Doha' },
      { property: 'og:title', content: 'Carla Maid Qatar | Professional Cleaning & Maid Services' },
      { property: 'og:description', content: 'Transform your space with Qatar\'s trusted cleaning service. Professional maids, flexible scheduling, and competitive rates for homes and businesses in Doha.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://carlamaid.qa' },
      { property: 'og:image', content: 'https://carlamaid.qa/assets/images/why-us.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Carla Maid Qatar | Professional Cleaning & Maid Services' },
      { name: 'twitter:description', content: 'Your trusted cleaning partner in Qatar. Book professional cleaning services for your home or business in Doha.' },
      { name: 'twitter:image', content: 'https://carlamaid.qa/assets/images/why-us.png' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Carla Maid Qatar' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
      { name: 'geo.region', content: 'QA' },
      { name: 'geo.placename', content: 'Doha' },
      { name: 'geo.position', content: '25.2866;51.5310' },
      {
        property: 'business:contact_data:street_address',
        content: 'Lusail Marina'
      },
      {
        property: 'business:contact_data:locality',
        content: 'Doha'
      },
      {
        property: 'business:contact_data:country',
        content: 'Qatar'
      }
    ]);

    this.lang = this._translate.currentLang;
    
    this._translate.onLangChange.subscribe((event) => {
      this.lang = event.lang;
      this.updateMetaForLanguage(event.lang);
    });

    this.getBlogsPosts();
  }

  private updateMetaForLanguage(lang: string) {
    if (lang === 'ar') {
      this.meta.updateTag({ 
        name: 'description', 
        content: 'كارلا ميد قطر تقدم خدمات تنظيف واستقدام عاملات منزليات احترافية للمنازل والشركات. عمال تنظيف محترفون، حلول صديقة للبيئة، ومواعيد مرنة. احجز خدمة التنظيف في الدوحة اليوم!' 
      });
    } else {
      this.meta.updateTag({ 
        name: 'description', 
        content: 'Carla Maid Qatar offers professional cleaning and maid services for homes and businesses. Expert cleaners, eco-friendly solutions, and flexible scheduling. Book your cleaning service in Doha today!' 
      });
    }
  }

ngAfterViewInit(): void {
  gsap.registerPlugin(ScrollTrigger);
  //   gsap.fromTo(element, {
  //     opacity: 0,
  //     y: -50
  //   }, 
  //   {
  //     ease: "power1.inOut",
  //     duration: 0.8,
  //     opacity: 1,
  //     y: 0,
  //     scrollTrigger: {
  //       // markers: true,
  //       trigger: element,
  //       scrub: true,
  //       start: "top 100%",
  //       end: "top 50%"
  //       // toggleActions: "play none none none"
  //     }
  //   });
  // });

  // gsap.utils.toArray('.left-to-right').forEach((element: any) => {
  //   gsap.fromTo(element, {
  //     opacity: 0,
  //     x: -50
  //   }, 
  //   {
  //     ease: "power1.inOut",
  //     duration: 0.8,
  //     opacity: 1,
  //     x: 0,
      
  //     scrollTrigger: {
  //       trigger: element,
  //       scrub: true,
  //       start: "top 100%",
  //       end: "top 70%",

  //     }
  //   });
  // });

  // gsap.utils.toArray('.fade-in-animation').forEach((element: any) => {
  //   gsap.fromTo(element, {
  //     opacity: 0,
  //     y: -50
  //   }, 
  //   {
  //     ease: "power1.inOut",
  //     duration: 0.8,
  //     opacity: 1,
  //     y: 0,
      
  //     scrollTrigger: {
  //       // markers: true,
  //       trigger: element,
  //       start: "top 100%",
  //       end: "top 40%",
  //     }
  //   });
  // });

  }


  direction(): Direction {
    return this._configService.getDirection() as Direction;
  }

  /**
   * Retrieves posts filtered by multiple category names.
   */
  getBlogsPosts(): void {
    this.isLoadingBlogs = true;
    const postsPage = 'blogs';
    const categoriesNames = [postsPage, this.lang];

    const params = {
      per_page: 20,
      page: 1
    };

    // Add timeout to prevent hanging requests
    const timeout = setTimeout(() => {
      this.isLoadingBlogs = false;
      if (!this.blogsPosts || this.blogsPosts.length === 0) {
        this.blogsPosts = [];
      }
    }, 10000); // 10 second timeout

    this._wordPressService.getPostsByCategoriesNames(postsPage, categoriesNames, params).subscribe({
      next: (value: any) => {
        clearTimeout(timeout);
        this.blogsPosts = value || [];
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
      try {
        const doc = new DOMParser().parseFromString(post.content.rendered, "text/html");
        const img = doc.querySelector("img");
        if (img && img.src) {
          return img.src;
        }
      } catch (error) {
        console.error('Error parsing HTML for image:', error);
      }
    }
    
    // Default image if nothing found
    return "../../assets/images/posts/default.png";
  }

  sendPost(post: any) {
    if (post && post.id) {
      this.router.navigate(['/view-blogs', post.id]);
    } else {
      console.error('Invalid post data:', post);
    }
  }

  makePhoneCall(phoneNumber: string) {
    window.open(`tel:${phoneNumber}`, '_self');
  }

  /**
   * Safely checks if blogsPosts is valid and has the expected structure
   */
  hasValidBlogsPosts(): boolean {
    return this.blogsPosts && 
           Array.isArray(this.blogsPosts) && 
           this.blogsPosts.length > 0 &&
           this.blogsPosts.every(post => post && post.title && post.content);
  }
}
