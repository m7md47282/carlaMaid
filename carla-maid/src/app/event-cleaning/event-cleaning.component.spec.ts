import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCleaningComponent } from './event-cleaning.component';

describe('EventCleaningComponent', () => {
  let component: EventCleaningComponent;
  let fixture: ComponentFixture<EventCleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCleaningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
