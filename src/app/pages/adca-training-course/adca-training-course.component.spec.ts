import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcaTrainingCourseComponent } from './adca-training-course.component';

describe('AdcaTrainingCourseComponent', () => {
  let component: AdcaTrainingCourseComponent;
  let fixture: ComponentFixture<AdcaTrainingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdcaTrainingCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdcaTrainingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
