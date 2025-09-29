import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareTestingCourseComponent } from './software-testing-course.component';

describe('SoftwareTestingCourseComponent', () => {
  let component: SoftwareTestingCourseComponent;
  let fixture: ComponentFixture<SoftwareTestingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareTestingCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareTestingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
