import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsOpenComponent } from './blogs-open.component';

describe('BlogsOpenComponent', () => {
  let component: BlogsOpenComponent;
  let fixture: ComponentFixture<BlogsOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsOpenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
