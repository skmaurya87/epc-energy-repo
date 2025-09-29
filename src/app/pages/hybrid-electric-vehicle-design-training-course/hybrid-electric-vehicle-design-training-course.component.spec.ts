import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridElectricVehicleDesignTrainingCourseComponent } from './hybrid-electric-vehicle-design-training-course.component';

describe('HybridElectricVehicleDesignTrainingCourseComponent', () => {
  let component: HybridElectricVehicleDesignTrainingCourseComponent;
  let fixture: ComponentFixture<HybridElectricVehicleDesignTrainingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HybridElectricVehicleDesignTrainingCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridElectricVehicleDesignTrainingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
