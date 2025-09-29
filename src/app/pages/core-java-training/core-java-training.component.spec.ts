import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreJavaTrainingComponent } from './core-java-training.component';

describe('CoreJavaTrainingComponent', () => {
  let component: CoreJavaTrainingComponent;
  let fixture: ComponentFixture<CoreJavaTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreJavaTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreJavaTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
