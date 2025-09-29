import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishSpeakingCourseComponent } from './english-speaking-course.component';

describe('EnglishSpeakingCourseComponent', () => {
  let component: EnglishSpeakingCourseComponent;
  let fixture: ComponentFixture<EnglishSpeakingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishSpeakingCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishSpeakingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
