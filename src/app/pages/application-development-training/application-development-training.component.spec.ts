import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDevelopmentTrainingComponent } from './application-development-training.component';

describe('ApplicationDevelopmentTrainingComponent', () => {
  let component: ApplicationDevelopmentTrainingComponent;
  let fixture: ComponentFixture<ApplicationDevelopmentTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationDevelopmentTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDevelopmentTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
