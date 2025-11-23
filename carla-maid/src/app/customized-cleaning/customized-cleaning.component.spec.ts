import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedCleaningComponent } from './customized-cleaning.component';

describe('CustomizedCleaningComponent', () => {
  let component: CustomizedCleaningComponent;
  let fixture: ComponentFixture<CustomizedCleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizedCleaningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizedCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
