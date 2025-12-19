import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegBiryani } from './veg-biryani';

describe('VegBiryani', () => {
  let component: VegBiryani;
  let fixture: ComponentFixture<VegBiryani>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VegBiryani]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegBiryani);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
