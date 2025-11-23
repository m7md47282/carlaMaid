import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-maid-services',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './maid-services.component.html',
  styleUrl: './maid-services.component.sass'
})
export class MaidServicesComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Professional Maid Services in Qatar | Carla Maid');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Professional maid services in Qatar. Flexible, reliable, and trained housekeeping staff for your home. Book hourly or full-time maids with Carla Maid.' 
    });
  }
}
