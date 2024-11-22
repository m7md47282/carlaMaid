import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { BlogsComponent} from './blogs/blogs.component'
export const routes: Routes = [

    {
        path:'',
        loadComponent: () =>import('./landing/landing.component').then((m)=> m.LandingComponent )
    },
    {
        path:'our-services',
        loadComponent: () =>import('./our-services/our-services.component').then((m)=> m.OurServicesComponent )
    },
    {
        path: 'blogs',
        loadComponent: () =>import('./blogs/blogs.component').then((m)=> m.BlogsComponent)
    },
    {
        path: "aboutUS",
        loadComponent: () => import('./about-us/about-us.component').then((m)=> m.AboutUSComponent)
    },
    {
        path: 'blogs-open',
        loadComponent: () => import('./blogs-open/blogs-open.component').then((m)=> m.BlogsOpenComponent)
    },
    {
        path: 'contact-us',
        loadComponent: () => import('./contact-us/contact-us.component').then((m)=> m.ContactUsComponent)
    }
    
];

export default routes;