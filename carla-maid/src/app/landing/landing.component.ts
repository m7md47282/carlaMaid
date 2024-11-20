import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    TranslateModule,
    CarouselModule,
    ButtonModule,
    TagModule
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.sass'
})
export class LandingComponent {
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

services = [
  {
    image: '../../assets/images/services-cards/card-1.png',
    title: 'Home Cleaning in Qatar',
    description: 'Offering the best home cleaning services in Doha, from carpet cleaning to hourly maid services, Carla Maid is here for all your household needs.'
  },
  {
    image: '../../assets/images/services-cards/card-2.png',
    title: 'Office Cleaning Services',
    description: 'Keep your workplace clean and welcoming with our services, available daily, weekly, or monthly.'
  },
  {
    image: '../../assets/images/services-cards/card-1.png',
    title: 'Home Cleaning in Qatar',
    description: 'Offering the best home cleaning services in Doha, from carpet cleaning to hourly maid services, Carla Maid is here for all your household needs.'
  },
  {
    image: '../../assets/images/services-cards/card-2.png',
    title: 'Office Cleaning Services',
    description: 'Keep your workplace clean and welcoming with our services, available daily, weekly, or monthly.'
  },
  {
    image: '../../assets/images/services-cards/card-1.png',
    title: 'Home Cleaning in Qatar',
    description: 'Offering the best home cleaning services in Doha, from carpet cleaning to hourly maid services, Carla Maid is here for all your household needs.'
  },
  {
    image: '../../assets/images/services-cards/card-2.png',
    title: 'Office Cleaning Services',
    description: 'Keep your workplace clean and welcoming with our services, available daily, weekly, or monthly.'
  },
  {
    image: '../../assets/images/services-cards/card-1.png',
    title: 'Home Cleaning in Qatar',
    description: 'Offering the best home cleaning services in Doha, from carpet cleaning to hourly maid services, Carla Maid is here for all your household needs.'
  },
  {
    image: '../../assets/images/services-cards/card-2.png',
    title: 'Office Cleaning Services',
    description: 'Keep your workplace clean and welcoming with our services, available daily, weekly, or monthly.'
  },
  {
    image: '../../assets/images/services-cards/card-3.png',
    title: 'Maid Services',
    description: 'Our maid services offer flexible solutions, including on-demand and regular cleaning, tailored to your home\'s needs.'
  }
]

 slideLeft(){

 }
 slideRight(){
  
 }
}
