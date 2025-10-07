import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-instrumentation-design-engineering-course',
  templateUrl: './instrumentation-design-engineering-course.component.html',
  styleUrls: ['./instrumentation-design-engineering-course.component.scss']
})
export class InstrumentationDesignEngineeringCourseComponent implements OnInit {

  htmlContent: SafeHtml = '';
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
