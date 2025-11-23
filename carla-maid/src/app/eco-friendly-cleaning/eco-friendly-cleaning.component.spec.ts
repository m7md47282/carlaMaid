import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoFriendlyCleaningComponent } from './eco-friendly-cleaning.component';

describe('EcoFriendlyCleaningComponent', () => {
  let component: EcoFriendlyCleaningComponent;
  let fixture: ComponentFixture<EcoFriendlyCleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcoFriendlyCleaningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcoFriendlyCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
