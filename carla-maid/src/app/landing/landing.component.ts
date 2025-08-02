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
  blogsPosts!: any[];

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

  /**
   * Extracts the first image URL from an HTML string.
   *
   * @param {string} html - The HTML content.
   * @returns {string | null} - The first image URL or null if no image is found.
   */
  getFirstImage(html: string): string | null {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const img = doc.querySelector("img");
    return img ? img.src : "../../assets/images/posts/default.png";
  }

  sendPost(post: any) {
    this.router.navigate(['/view-blogs', post.id]);
  }

  makePhoneCall(phoneNumber: string) {
    window.open(`tel:${phoneNumber}`, '_self');
  }
}
