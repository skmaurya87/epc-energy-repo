import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrGeneralistCourseComponent } from './hr-generalist-course.component';

describe('HrGeneralistCourseComponent', () => {
  let component: HrGeneralistCourseComponent;
  let fixture: ComponentFixture<HrGeneralistCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrGeneralistCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrGeneralistCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
