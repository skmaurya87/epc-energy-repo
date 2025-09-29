import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingGstTaxCourseComponent } from './accounting-gst-tax-course.component';

describe('AccountingGstTaxCourseComponent', () => {
  let component: AccountingGstTaxCourseComponent;
  let fixture: ComponentFixture<AccountingGstTaxCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingGstTaxCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingGstTaxCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
