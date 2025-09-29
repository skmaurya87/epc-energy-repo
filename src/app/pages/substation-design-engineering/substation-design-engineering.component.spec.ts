import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstationDesignEngineeringComponent } from './substation-design-engineering.component';

describe('SubstationDesignEngineeringComponent', () => {
  let component: SubstationDesignEngineeringComponent;
  let fixture: ComponentFixture<SubstationDesignEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubstationDesignEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstationDesignEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
