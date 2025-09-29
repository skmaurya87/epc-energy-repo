import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopmentTrainingComponent } from './web-development-training.component';

describe('WebDevelopmentTrainingComponent', () => {
  let component: WebDevelopmentTrainingComponent;
  let fixture: ComponentFixture<WebDevelopmentTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDevelopmentTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDevelopmentTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
