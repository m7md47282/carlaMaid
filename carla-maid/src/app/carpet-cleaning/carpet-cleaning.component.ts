import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-carpet-cleaning',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './carpet-cleaning.component.html',
  styleUrl: './carpet-cleaning.component.sass'
})
export class CarpetCleaningComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Professional Carpet Cleaning in Qatar | Carla Maid');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Expert carpet cleaning services in Qatar. Steam cleaning, stain removal, and deep sanitization for all carpet types. Book Carla Maid today.' 
    });
  }
}
