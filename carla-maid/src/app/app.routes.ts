import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { OurServicesComponent } from './our-services/our-services.component';

export const routes: Routes = [

    {
        path:'',
        loadComponent: () =>import('./landing/landing.component').then((m)=> m.LandingComponent )
    },
    {
        path:'our-services',
        loadComponent: () =>import('./our-services/our-services.component').then((m)=> m.OurServicesComponent )
    }
    
];

export default routes;