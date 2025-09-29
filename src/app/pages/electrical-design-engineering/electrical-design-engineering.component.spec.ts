import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalDesignEngineeringComponent } from './electrical-design-engineering.component';

describe('ElectricalDesignEngineeringComponent', () => {
  let component: ElectricalDesignEngineeringComponent;
  let fixture: ComponentFixture<ElectricalDesignEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricalDesignEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricalDesignEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
