import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceExcelTrainingCourseComponent } from './advance-excel-training-course.component';

describe('AdvanceExcelTrainingCourseComponent', () => {
  let component: AdvanceExcelTrainingCourseComponent;
  let fixture: ComponentFixture<AdvanceExcelTrainingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceExcelTrainingCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceExcelTrainingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
