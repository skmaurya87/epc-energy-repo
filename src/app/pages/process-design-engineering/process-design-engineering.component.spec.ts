import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessDesignEngineeringComponent } from './process-design-engineering.component';

describe('ProcessDesignEngineeringComponent', () => {
  let component: ProcessDesignEngineeringComponent;
  let fixture: ComponentFixture<ProcessDesignEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessDesignEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessDesignEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
