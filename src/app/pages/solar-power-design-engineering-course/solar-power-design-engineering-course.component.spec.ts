import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarPowerDesignEngineeringCourseComponent } from './solar-power-design-engineering-course.component';

describe('SolarPowerDesignEngineeringCourseComponent', () => {
  let component: SolarPowerDesignEngineeringCourseComponent;
  let fixture: ComponentFixture<SolarPowerDesignEngineeringCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarPowerDesignEngineeringCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarPowerDesignEngineeringCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
