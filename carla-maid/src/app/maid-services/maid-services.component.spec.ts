import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidServicesComponent } from './maid-services.component';

describe('MaidServicesComponent', () => {
  let component: MaidServicesComponent;
  let fixture: ComponentFixture<MaidServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaidServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaidServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
