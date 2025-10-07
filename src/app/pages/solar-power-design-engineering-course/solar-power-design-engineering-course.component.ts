import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-solar-power-design-engineering-course',
  templateUrl: './solar-power-design-engineering-course.component.html',
  styleUrls: ['./solar-power-design-engineering-course.component.scss']
})
export class SolarPowerDesignEngineeringCourseComponent implements OnInit {

  htmlContent: SafeHtml = '';
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
