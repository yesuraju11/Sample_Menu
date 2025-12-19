import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegStarters } from './veg-starters';

describe('VegStarters', () => {
  let component: VegStarters;
  let fixture: ComponentFixture<VegStarters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VegStarters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegStarters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
