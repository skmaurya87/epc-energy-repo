import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonItTrainingComponent } from './non-it-training.component';

describe('NonItTrainingComponent', () => {
  let component: NonItTrainingComponent;
  let fixture: ComponentFixture<NonItTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonItTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonItTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
