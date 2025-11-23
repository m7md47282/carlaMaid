import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingForBusinessesComponent } from './staffing-for-businesses.component';

describe('StaffingForBusinessesComponent', () => {
  let component: StaffingForBusinessesComponent;
  let fixture: ComponentFixture<StaffingForBusinessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffingForBusinessesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffingForBusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
