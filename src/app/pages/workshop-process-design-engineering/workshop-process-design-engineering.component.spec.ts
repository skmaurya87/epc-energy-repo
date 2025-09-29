import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopProcessDesignEngineeringComponent } from './workshop-process-design-engineering.component';

describe('WorkshopProcessDesignEngineeringComponent', () => {
  let component: WorkshopProcessDesignEngineeringComponent;
  let fixture: ComponentFixture<WorkshopProcessDesignEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopProcessDesignEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopProcessDesignEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
