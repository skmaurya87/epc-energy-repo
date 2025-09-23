import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  menuLink: any[] | undefined;
  constructor() { }

  ngOnInit(): void {
    this.menuLink = [
      {
        name: "Home",
        link: "index.html"
      },
      {
        name: "EPC Training",
        link: "#",
        subMenu: [
          { name: "Piping Design Engineering", link: "piping-design-engineering.html" },
          { name: "Process Design Engineering", link: "process-design-engineering.html" },
          { name: "Electrical Design Engineering", link: "electrical-design-engineering.html" },
          { name: "HVAC Design Engineering", link: "hvac-design-engineering.html" },
          { name: "Solar Power Design Course", link: "solar-power-design-engineering-course.html" },
          { name: "Civil Design Engineering", link: "civil-design-engineering-training.html" },
          { name: "Instrumentation Design Engineering", link: "instrumentation-design-engineering-course.html" },
          { name: "Substation Design Course", link: "substation-design-engineering.html" },
          { name: "Hybrid & Electric Vehicle Design", link: "hybrid-electric-vehicle-design-training-course.html" }
        ]
      },
      {
        name: "IT Training",
        link: "#",
        subMenu: [
          { name: "Website Development Training", link: "web-development-training.html" },
          { name: "SEO Digital Marketing Training", link: "digital-marketing-training.html" },
          { name: "Mobile Application Development", link: "application-development-training.html" },
          { name: "Core Java Training", link: "core-java-training.html" },
          { name: ".NET Training Courses", link: "dot-net-training-course.html" },
          { name: "Angular JS Training", link: "angular-js-training.html" },
          { name: "Software Testing Training", link: "software-testing-course.html" }
        ]
      },
      {
        name: "Non-IT Training",
        link: "#",
        subMenu: [
          { name: "Advanced Excel Training", link: "advance-excel-training-course.html" },
          { name: "ADCA Training Course", link: "adca-training-course.html" },
          { name: "Accounts, GST & Tax Training", link: "accounting-gst-tax-course.html" },
          { name: "Advanced Tally Training", link: "advanced-tally-training.html" },
          { name: "HR Generalist Course", link: "hr-generalist-course.html" },
          { name: "English Speaking Course", link: "english-speaking-course.html" }
        ]
      },
      {
        name: "Corporate Training",
        link: "#",
        subMenu: [
          { name: "Project Management Program", link: "project-management-program.html" },
          { name: "Diploma in Solar Power Plant Design Engineering", link: "diploma-solar-power-plant-design-engineering.html" },
          { name: "Workshop Process Design Engineering", link: "workshop-process-design-engineering.html" },
          { name: "Design & Detailed Engineering Training", link: "design-and-detailed-engineering-course.html" }
        ]
      },
      {
        name: "Contact",
        link: "contact.html"
      }
    ];

  }

}
