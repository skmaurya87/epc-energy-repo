import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementProgramComponent } from './project-management-program.component';

describe('ProjectManagementProgramComponent', () => {
  let component: ProjectManagementProgramComponent;
  let fixture: ComponentFixture<ProjectManagementProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagementProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManagementProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
