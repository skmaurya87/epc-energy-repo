import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketingTrainingComponent } from './digital-marketing-training.component';

describe('DigitalMarketingTrainingComponent', () => {
  let component: DigitalMarketingTrainingComponent;
  let fixture: ComponentFixture<DigitalMarketingTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalMarketingTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalMarketingTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
