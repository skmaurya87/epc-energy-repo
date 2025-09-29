import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilDesignEngineeringTrainingComponent } from './civil-design-engineering-training.component';

describe('CivilDesignEngineeringTrainingComponent', () => {
  let component: CivilDesignEngineeringTrainingComponent;
  let fixture: ComponentFixture<CivilDesignEngineeringTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilDesignEngineeringTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilDesignEngineeringTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
