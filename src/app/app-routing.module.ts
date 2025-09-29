import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProcessDesignEngineeringComponent } from './pages/process-design-engineering/process-design-engineering.component';
import { AccountingGstTaxCourseComponent } from './pages/accounting-gst-tax-course/accounting-gst-tax-course.component';
import { AdcaTrainingCourseComponent } from './pages/adca-training-course/adca-training-course.component';
import { AdvanceExcelTrainingCourseComponent } from './pages/advance-excel-training-course/advance-excel-training-course.component';
import { AdvancedTallyTrainingComponent } from './pages/advanced-tally-training/advanced-tally-training.component';
import { AngularJsTrainingComponent } from './pages/angular-js-training/angular-js-training.component';
import { ApplicationDevelopmentTrainingComponent } from './pages/application-development-training/application-development-training.component';
import { CivilDesignEngineeringTrainingComponent } from './pages/civil-design-engineering-training/civil-design-engineering-training.component';
import { CoreJavaTrainingComponent } from './pages/core-java-training/core-java-training.component';
import { DesignAndDetailedEngineeringCourseComponent } from './pages/design-and-detailed-engineering-course/design-and-detailed-engineering-course.component';
import { DigitalMarketingTrainingComponent } from './pages/digital-marketing-training/digital-marketing-training.component';
import { DiplomaSolarPowerPlantDesignEngineeringComponent } from './pages/diploma-solar-power-plant-design-engineering/diploma-solar-power-plant-design-engineering.component';
import { DotNetTrainingCourseComponent } from './pages/dot-net-training-course/dot-net-training-course.component';
import { ElectricalDesignEngineeringComponent } from './pages/electrical-design-engineering/electrical-design-engineering.component';
import { EnglishSpeakingCourseComponent } from './pages/english-speaking-course/english-speaking-course.component';
import { HrGeneralistCourseComponent } from './pages/hr-generalist-course/hr-generalist-course.component';
import { HvacDesignEngineeringComponent } from './pages/hvac-design-engineering/hvac-design-engineering.component';
import { HybridElectricVehicleDesignTrainingCourseComponent } from './pages/hybrid-electric-vehicle-design-training-course/hybrid-electric-vehicle-design-training-course.component';
import { InstrumentationDesignEngineeringCourseComponent } from './pages/instrumentation-design-engineering-course/instrumentation-design-engineering-course.component';
import { PipingDesignEngineeringComponent } from './pages/piping-design-engineering/piping-design-engineering.component';
import { ProjectManagementProgramComponent } from './pages/project-management-program/project-management-program.component';
import { SoftwareTestingCourseComponent } from './pages/software-testing-course/software-testing-course.component';
import { SolarPowerDesignEngineeringCourseComponent } from './pages/solar-power-design-engineering-course/solar-power-design-engineering-course.component';
import { SubstationDesignEngineeringComponent } from './pages/substation-design-engineering/substation-design-engineering.component';
import { WebDevelopmentTrainingComponent } from './pages/web-development-training/web-development-training.component';
import { WorkshopProcessDesignEngineeringComponent } from './pages/workshop-process-design-engineering/workshop-process-design-engineering.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'process-design-engineering', component: ProcessDesignEngineeringComponent },
   { path: 'piping-design-engineering', component: PipingDesignEngineeringComponent },
  { path: 'electrical-design-engineering', component: ElectricalDesignEngineeringComponent },
  { path: 'hvac-design-engineering', component: HvacDesignEngineeringComponent },
  { path: 'solar-power-design-engineering-course', component: SolarPowerDesignEngineeringCourseComponent },
  { path: 'civil-design-engineering-training', component: CivilDesignEngineeringTrainingComponent },
  { path: 'instrumentation-design-engineering-course', component: InstrumentationDesignEngineeringCourseComponent },
  { path: 'substation-design-engineering', component: SubstationDesignEngineeringComponent },
  { path: 'hybrid-electric-vehicle-design-training-course', component: HybridElectricVehicleDesignTrainingCourseComponent },

  // IT Training
  { path: 'web-development-training', component: WebDevelopmentTrainingComponent },
  { path: 'digital-marketing-training', component: DigitalMarketingTrainingComponent },
  { path: 'application-development-training', component: ApplicationDevelopmentTrainingComponent },
  { path: 'core-java-training', component: CoreJavaTrainingComponent },
  { path: 'dot-net-training-course', component: DotNetTrainingCourseComponent },
  { path: 'angular-js-training', component: AngularJsTrainingComponent },
  { path: 'software-testing-course', component: SoftwareTestingCourseComponent },

  // Non-IT Training
  { path: 'advance-excel-training-course', component: AdvanceExcelTrainingCourseComponent },
  { path: 'adca-training-course', component: AdcaTrainingCourseComponent },
  { path: 'accounting-gst-tax-course', component: AccountingGstTaxCourseComponent },
  { path: 'advanced-tally-training', component: AdvancedTallyTrainingComponent },
  { path: 'hr-generalist-course', component: HrGeneralistCourseComponent },
  { path: 'english-speaking-course', component: EnglishSpeakingCourseComponent },

  // Corporate Training
  { path: 'project-management-program', component: ProjectManagementProgramComponent },
  { path: 'diploma-solar-power-plant-design-engineering', component: DiplomaSolarPowerPlantDesignEngineeringComponent },
  { path: 'workshop-process-design-engineering', component: WorkshopProcessDesignEngineeringComponent },
  { path: 'design-and-detailed-engineering-course', component: DesignAndDetailedEngineeringCourseComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
