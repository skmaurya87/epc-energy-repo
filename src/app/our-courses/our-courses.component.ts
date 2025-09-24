import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-our-courses',
  templateUrl: './our-courses.component.html',
  styleUrls: ['./our-courses.component.scss']
})
export class OurCoursesComponent implements OnInit {
  isBrowser: boolean | undefined;
  courses: any[] = [];
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  
  ngOnInit(): void {
    this.courses = [
    { name: "Advanced Electrical Design Course",  src:'Advanced-Electrical-Design-Course.png', link: '#'},
    { name: "Electrical Design Engineering Training",  src:'electrical-design-engineering.png', link: '#'},
    { name: "HVAC Design Training Course",  src:'HVAC-design-course.png', link: '#'},
    { name: "Instrumentation Design Engineering Course",  src:'instrumentation-design-engineering.png', link: '#'},
    { name: "Piping Model Design Training",  src:'piping_model.png', link: '#'},
    { name: "Process Design Engineering",  src:'process-design-engineering.png', link: '#'},
    { name: "Solar Power Plantdesign Engineering Course",  src:'solar-power-plantdesign-engineering.png', link: '#'},
    { name: "Structural Design & Analysis",  src:'structural-analysis.png', link: '#'},
    { name: "Substation Design Training Course",  src:'Substation-design-course.png', link: '#'},
   
  ];
  }

    customOptions: OwlOptions = {
      loop: true,
      autoplay: true,
      margin: 20,
      nav: false,
      center: false,
      dots: true,
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        980: { items: 4 },
        1200: { items: 5 },
        1400: { items: 6 }
      }
    };
}
