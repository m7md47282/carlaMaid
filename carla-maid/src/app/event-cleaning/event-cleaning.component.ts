import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-event-cleaning',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './event-cleaning.component.html',
  styleUrl: './event-cleaning.component.sass'
})
export class EventCleaningComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Event Cleaning Services in Qatar | Carla Maid');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Professional event cleaning services in Qatar. Pre and post-event cleaning for weddings, parties, corporate events. Book Carla Maid today.' 
    });
  }
}
