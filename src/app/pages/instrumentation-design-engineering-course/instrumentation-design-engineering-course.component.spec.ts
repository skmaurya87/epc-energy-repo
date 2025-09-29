import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentationDesignEngineeringCourseComponent } from './instrumentation-design-engineering-course.component';

describe('InstrumentationDesignEngineeringCourseComponent', () => {
  let component: InstrumentationDesignEngineeringCourseComponent;
  let fixture: ComponentFixture<InstrumentationDesignEngineeringCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentationDesignEngineeringCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentationDesignEngineeringCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
