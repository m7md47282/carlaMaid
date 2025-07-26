import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AnalyticsService } from './analytics.service';

@Injectable({
  providedIn: 'root'
})
export class PageTrackingService {
  private analyticsService = inject(AnalyticsService);
  private router = inject(Router);
  
  private scrollThresholds = [25, 50, 75, 90];
  private trackedScrollDepths = new Set<number>();

  constructor() {
    this.initializePageTracking();
    this.initializeScrollTracking();
  }

  private initializePageTracking(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const pageTitle = this.getPageTitle(event.url);
        const pagePath = event.url;
        
        // Track page view
        this.analyticsService.trackPageView(pageTitle, pagePath);
        
        // Reset scroll tracking for new page
        this.trackedScrollDepths.clear();
      });
  }

  private initializeScrollTracking(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.trackScrollDepth();
      });
    }
  }

  private trackScrollDepth(): void {
    if (typeof window === 'undefined') return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

    // Track scroll depth at specific thresholds
    this.scrollThresholds.forEach(threshold => {
      if (scrollPercentage >= threshold && !this.trackedScrollDepths.has(threshold)) {
        this.analyticsService.trackScrollDepth(threshold);
        this.trackedScrollDepths.add(threshold);
      }
    });
  }

  private getPageTitle(url: string): string {
    const routeMap: { [key: string]: string } = {
      '/': 'Home',
      '/about-us': 'About Us',
      '/our-services': 'Our Services',
      '/book-now': 'Book Now',
      '/contact-us': 'Contact Us',
      '/blogs': 'Blogs',
      '/blogs-list': 'Blogs List',
      '/view-blogs': 'View Blogs'
    };

    return routeMap[url] || 'Unknown Page';
  }

  // Method to manually track page view
  trackPageView(pageTitle: string, pagePath: string): void {
    this.analyticsService.trackPageView(pageTitle, pagePath);
  }

  // Method to track time on page
  trackTimeOnPage(seconds: number): void {
    this.analyticsService.trackTimeOnPage(seconds);
  }
} 