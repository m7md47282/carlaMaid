import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalityStaffComponent } from './hospitality-staff.component';

describe('HospitalityStaffComponent', () => {
  let component: HospitalityStaffComponent;
  let fixture: ComponentFixture<HospitalityStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalityStaffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalityStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
