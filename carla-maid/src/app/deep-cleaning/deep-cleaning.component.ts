import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-deep-cleaning',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './deep-cleaning.component.html',
  styleUrl: './deep-cleaning.component.sass'
})
export class DeepCleaningComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Deep Cleaning Services in Qatar | Carla Maid');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Professional deep cleaning services in Qatar. Thorough, detailed cleaning for homes and offices. Remove dirt, grime, and bacteria with Carla Maid.' 
    });
  }
}
