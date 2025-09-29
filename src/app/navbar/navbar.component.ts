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
        link: "/"
      },
      {
        name: "EPC Training",
        link: "#",
        subMenu: [
          { name: "Piping Design Engineering", link: "piping-design-engineering" },
          { name: "Process Design Engineering", link: "process-design-engineering" },
          { name: "Electrical Design Engineering", link: "electrical-design-engineering" },
          { name: "HVAC Design Engineering", link: "hvac-design-engineering" },
          { name: "Solar Power Design Course", link: "solar-power-design-engineering-course" },
          { name: "Civil Design Engineering", link: "civil-design-engineering-training" },
          { name: "Instrumentation Design Engineering", link: "instrumentation-design-engineering-course" },
          { name: "Substation Design Course", link: "substation-design-engineering" },
          { name: "Hybrid & Electric Vehicle Design", link: "hybrid-electric-vehicle-design-training-course" }
        ]
      },
      {
        name: "IT Training",
        link: "#",
        subMenu: [
          { name: "Website Development Training", link: "web-development-training" },
          { name: "SEO Digital Marketing Training", link: "digital-marketing-training" },
          { name: "Mobile Application Development", link: "application-development-training" },
          { name: "Core Java Training", link: "core-java-training" },
          { name: ".NET Training Courses", link: "dot-net-training-course" },
          { name: "Angular JS Training", link: "angular-js-training" },
          { name: "Software Testing Training", link: "software-testing-course" }
        ]
      },
      {
        name: "Non-IT Training",
        link: "#",
        subMenu: [
          { name: "Advanced Excel Training", link: "advance-excel-training-course" },
          { name: "ADCA Training Course", link: "adca-training-course" },
          { name: "Accounts, GST & Tax Training", link: "accounting-gst-tax-course" },
          { name: "Advanced Tally Training", link: "advanced-tally-training" },
          { name: "HR Generalist Course", link: "hr-generalist-course" },
          { name: "English Speaking Course", link: "english-speaking-course" }
        ]
      },
      {
        name: "Corporate Training",
        link: "#",
        subMenu: [
          { name: "Project Management Program", link: "project-management-program" },
          { name: "Diploma in Solar Power Plant Design Engineering", link: "diploma-solar-power-plant-design-engineering" },
          { name: "Workshop Process Design Engineering", link: "workshop-process-design-engineering" },
          { name: "Design & Detailed Engineering Training", link: "design-and-detailed-engineering-course" }
        ]
      },
      {
        name: "Contact",
        link: "contact"
      }
    ];

  }

}
