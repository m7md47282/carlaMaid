import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousekeepingServicesComponent } from './housekeeping-services.component';

describe('HousekeepingServicesComponent', () => {
  let component: HousekeepingServicesComponent;
  let fixture: ComponentFixture<HousekeepingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousekeepingServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousekeepingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
