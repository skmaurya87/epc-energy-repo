import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularJsTrainingComponent } from './angular-js-training.component';

describe('AngularJsTrainingComponent', () => {
  let component: AngularJsTrainingComponent;
  let fixture: ComponentFixture<AngularJsTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularJsTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularJsTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
