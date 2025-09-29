import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupFormComponent } from './popup-form/popup-form.component';
import { BannerComponent } from './banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './footer/footer.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { OurCoursesComponent } from './our-courses/our-courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AccountingGstTaxCourseComponent } from './pages/accounting-gst-tax-course/accounting-gst-tax-course.component';
import { AdcaTrainingCourseComponent } from './pages/adca-training-course/adca-training-course.component';
import { AdvanceExcelTrainingCourseComponent } from './pages/advance-excel-training-course/advance-excel-training-course.component';
import { AdvancedTallyTrainingComponent } from './pages/advanced-tally-training/advanced-tally-training.component';
import { AngularJsTrainingComponent } from './pages/angular-js-training/angular-js-training.component';
import { ApplicationDevelopmentTrainingComponent } from './pages/application-development-training/application-development-training.component';
import { CivilDesignEngineeringTrainingComponent } from './pages/civil-design-engineering-training/civil-design-engineering-training.component';
import { ContactComponent } from './pages/contact/contact.component';
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
import { ProcessDesignEngineeringComponent } from './pages/process-design-engineering/process-design-engineering.component';
import { ProjectManagementProgramComponent } from './pages/project-management-program/project-management-program.component';
import { SoftwareTestingCourseComponent } from './pages/software-testing-course/software-testing-course.component';
import { SolarPowerDesignEngineeringCourseComponent } from './pages/solar-power-design-engineering-course/solar-power-design-engineering-course.component';
import { SubstationDesignEngineeringComponent } from './pages/substation-design-engineering/substation-design-engineering.component';
import { WebDevelopmentTrainingComponent } from './pages/web-development-training/web-development-training.component';
import { WorkshopProcessDesignEngineeringComponent } from './pages/workshop-process-design-engineering/workshop-process-design-engineering.component';


@NgModule({
  declarations: [
    AppComponent,
    PopupFormComponent,
    BannerComponent,
    FooterComponent,
    TestimonialComponent,
    OurCoursesComponent,
    NavbarComponent,
    HomeComponent,
    ProcessDesignEngineeringComponent,
    PipingDesignEngineeringComponent,
    ElectricalDesignEngineeringComponent,
    HvacDesignEngineeringComponent,
    SolarPowerDesignEngineeringCourseComponent,
    CivilDesignEngineeringTrainingComponent,
    InstrumentationDesignEngineeringCourseComponent,
    SubstationDesignEngineeringComponent,
    HybridElectricVehicleDesignTrainingCourseComponent,
    WebDevelopmentTrainingComponent,
    DigitalMarketingTrainingComponent,
    ApplicationDevelopmentTrainingComponent,
    CoreJavaTrainingComponent,
    DotNetTrainingCourseComponent,
    AngularJsTrainingComponent,
    SoftwareTestingCourseComponent,
    AdvanceExcelTrainingCourseComponent,
    AdcaTrainingCourseComponent,
    AccountingGstTaxCourseComponent,
    AdvancedTallyTrainingComponent,
    HrGeneralistCourseComponent,
    EnglishSpeakingCourseComponent,
    ProjectManagementProgramComponent,
    DiplomaSolarPowerPlantDesignEngineeringComponent,
    WorkshopProcessDesignEngineeringComponent,
    DesignAndDetailedEngineeringCourseComponent,
    ContactComponent    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
    // BannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
