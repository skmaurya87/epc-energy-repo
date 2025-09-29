import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HvacDesignEngineeringComponent } from './hvac-design-engineering.component';

describe('HvacDesignEngineeringComponent', () => {
  let component: HvacDesignEngineeringComponent;
  let fixture: ComponentFixture<HvacDesignEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HvacDesignEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HvacDesignEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
