import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAndDetailedEngineeringCourseComponent } from './design-and-detailed-engineering-course.component';

describe('DesignAndDetailedEngineeringCourseComponent', () => {
  let component: DesignAndDetailedEngineeringCourseComponent;
  let fixture: ComponentFixture<DesignAndDetailedEngineeringCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignAndDetailedEngineeringCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignAndDetailedEngineeringCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
