import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalCleaningComponent } from './seasonal-cleaning.component';

describe('SeasonalCleaningComponent', () => {
  let component: SeasonalCleaningComponent;
  let fixture: ComponentFixture<SeasonalCleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonalCleaningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonalCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
