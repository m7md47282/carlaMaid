import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationThankYouComponent } from './quotation-thank-you.component';

describe('QuotationThankYouComponent', () => {
  let component: QuotationThankYouComponent;
  let fixture: ComponentFixture<QuotationThankYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuotationThankYouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotationThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
