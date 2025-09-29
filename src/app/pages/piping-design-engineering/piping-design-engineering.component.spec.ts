import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipingDesignEngineeringComponent } from './piping-design-engineering.component';

describe('PipingDesignEngineeringComponent', () => {
  let component: PipingDesignEngineeringComponent;
  let fixture: ComponentFixture<PipingDesignEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipingDesignEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipingDesignEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
