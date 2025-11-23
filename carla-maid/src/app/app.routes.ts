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
        path: 'services/maid-services',
        loadComponent: () => import('./maid-services/maid-services.component').then(m => m.MaidServicesComponent)
    },
    {
        path: 'services/deep-cleaning',
        loadComponent: () => import('./deep-cleaning/deep-cleaning.component').then(m => m.DeepCleaningComponent)
    },
    {
        path: 'services/carpet-cleaning',
        loadComponent: () => import('./carpet-cleaning/carpet-cleaning.component').then(m => m.CarpetCleaningComponent)
    },
    {
        path: 'services/event-cleaning',
        loadComponent: () => import('./event-cleaning/event-cleaning.component').then(m => m.EventCleaningComponent)
    },
    {
        path: 'services/hospitality-staff',
        loadComponent: () => import('./hospitality-staff/hospitality-staff.component').then(m => m.HospitalityStaffComponent)
    },
    {
        path: 'services/office-cleaning',
        loadComponent: () => import('./office-cleaning/office-cleaning.component').then(m => m.OfficeCleaningComponent)
    },
    {
        path: 'services/home-cleaning',
        loadComponent: () => import('./home-cleaning/home-cleaning.component').then(m => m.HomeCleaningComponent)
    },
    {
        path: 'services/eco-friendly-cleaning',
        loadComponent: () => import('./eco-friendly-cleaning/eco-friendly-cleaning.component').then(m => m.EcoFriendlyCleaningComponent)
    },
    {
        path: 'services/housekeeping-services',
        loadComponent: () => import('./housekeeping-services/housekeeping-services.component').then(m => m.HousekeepingServicesComponent)
    },
    {
        path: 'services/staffing-for-businesses',
        loadComponent: () => import('./staffing-for-businesses/staffing-for-businesses.component').then(m => m.StaffingForBusinessesComponent)
    },
    {
        path: 'services/customized-cleaning',
        loadComponent: () => import('./customized-cleaning/customized-cleaning.component').then(m => m.CustomizedCleaningComponent)
    },
    {
        path: 'services/seasonal-cleaning',
        loadComponent: () => import('./seasonal-cleaning/seasonal-cleaning.component').then(m => m.SeasonalCleaningComponent)
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
        path: 'quotation-request',
        loadComponent: () => import('./quotation-request/quotation-request.component').then(m => m.QuotationRequestComponent)
    },
    {
        path: 'quotation-request/thank-you',
        loadComponent: () => import('./quotation-thank-you/quotation-thank-you.component').then(m => m.QuotationThankYouComponent)
    },
    {
        path: 'book-now/success',
        loadComponent: () => import('./book-now/payment-success/payment-success.component').then(m => m.PaymentSuccessComponent)
    },
    {
        path: 'payment/success',
        loadComponent: () => import('./book-now/payment-success/payment-success.component').then(m => m.PaymentSuccessComponent)
    },
    {
        path: 'book-now/cancel',
        loadComponent: () => import('./book-now/payment-cancel/payment-cancel.component').then(m => m.PaymentCancelComponent)
    },
    {
        path: 'payment/cancel',
        loadComponent: () => import('./book-now/payment-cancel/payment-cancel.component').then(m => m.PaymentCancelComponent)
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
        path: 'view-blogs/:id',
        loadComponent: () => import('./view-blogs/view-blogs.component').then(m => m.ViewBlogsComponent)
    }
];
export default routes;
