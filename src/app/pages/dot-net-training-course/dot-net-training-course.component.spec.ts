import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetTrainingCourseComponent } from './dot-net-training-course.component';

describe('DotNetTrainingCourseComponent', () => {
  let component: DotNetTrainingCourseComponent;
  let fixture: ComponentFixture<DotNetTrainingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotNetTrainingCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotNetTrainingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
