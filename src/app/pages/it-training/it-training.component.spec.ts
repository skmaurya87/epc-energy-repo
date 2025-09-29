import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTrainingComponent } from './it-training.component';

describe('ItTrainingComponent', () => {
  let component: ItTrainingComponent;
  let fixture: ComponentFixture<ItTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
