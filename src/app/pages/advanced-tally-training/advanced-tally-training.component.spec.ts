import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTallyTrainingComponent } from './advanced-tally-training.component';

describe('AdvancedTallyTrainingComponent', () => {
  let component: AdvancedTallyTrainingComponent;
  let fixture: ComponentFixture<AdvancedTallyTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedTallyTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedTallyTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
