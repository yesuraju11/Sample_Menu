import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegBiryani } from './nonveg-biryani';

describe('NonvegBiryani', () => {
  let component: NonvegBiryani;
  let fixture: ComponentFixture<NonvegBiryani>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonvegBiryani]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonvegBiryani);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
