import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaSolarPowerPlantDesignEngineeringComponent } from './diploma-solar-power-plant-design-engineering.component';

describe('DiplomaSolarPowerPlantDesignEngineeringComponent', () => {
  let component: DiplomaSolarPowerPlantDesignEngineeringComponent;
  let fixture: ComponentFixture<DiplomaSolarPowerPlantDesignEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplomaSolarPowerPlantDesignEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomaSolarPowerPlantDesignEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
