import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    TranslateModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    RouterLink
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
export class LandingComponent implements OnInit  {

  private _translate = inject(TranslateService); 


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

isInView = false;

constructor() {}
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
    
    
    
  }

ngAfterViewInit(): void {
  gsap.registerPlugin(ScrollTrigger);

  
  gsap.utils.toArray('.animate-on-scroll').forEach((element: any) => {
    gsap.fromTo(element, {
      opacity: 0,
      y: -50
    }, 
    {
      ease: "power1.inOut",
      duration: 0.8,
      opacity: 1,
      y: 0,
      scrollTrigger: {
        // markers: true,
        trigger: element,
        scrub: true,
        start: "top 100%",
        end: "top 50%"
        // toggleActions: "play none none none"
      }
    });
  });

  gsap.utils.toArray('.left-to-right').forEach((element: any) => {
    gsap.fromTo(element, {
      opacity: 0,
      x: -50
    }, 
    {
      ease: "power1.inOut",
      duration: 0.8,
      opacity: 1,
      x: 0,
      
      scrollTrigger: {
        trigger: element,
        scrub: true,
        start: "top 100%",
        end: "top 70%",

      }
    });
  });

  gsap.utils.toArray('.fade-in-animation').forEach((element: any) => {
    gsap.fromTo(element, {
      opacity: 0,
      y: -50
    }, 
    {
      ease: "power1.inOut",
      duration: 0.8,
      opacity: 1,
      y: 0,
      
      scrollTrigger: {
        // markers: true,
        trigger: element,
        start: "top 100%",
        end: "top 40%",
      }
    });
  });

}





}
