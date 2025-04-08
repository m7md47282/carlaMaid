import { Routes } from '@angular/router';
export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./landing/landing.component').then(m => m.LandingComponent)
    },
    {
        path: 'our-services',
        loadComponent: () => import('./our-services/our-services.component').then(m => m.OurServicesComponent)
    },
    {
        path: 'blogs',
        loadComponent: () => import('./blogs/blogs.component').then(m => m.BlogsComponent)
    },
    {
        path: 'about-us',
        loadComponent: () => import('./about-us/about-us.component').then(m => m.AboutUSComponent)
    },
    {
        path: 'blogs-open',
        loadComponent: () => import('./blogs-open/blogs-open.component').then(m => m.BlogsOpenComponent)
    },
    {
        path: 'book-now',
        loadComponent: () => import('./book-now/book-now.component').then(m => m.BookNowComponent)
    },
    {
        path: 'contact-us',
        loadComponent: () => import('./contact-us/contact-us.component').then(m => m.ContactUsComponent)
    },
    {
        path: 'blogs-list',
        loadComponent: () => import('./blogs-list/blogs-list.component').then(m => m.BlogsListComponent)
    },
    {
        path: 'view-blogs',
        loadComponent: () => import('./view-blogs/view-blogs.component').then(m => m.ViewBlogsComponent)
    }
];
export default routes;
