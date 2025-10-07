import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-design-and-detailed-engineering-course',
  templateUrl: './design-and-detailed-engineering-course.component.html',
  styleUrls: ['./design-and-detailed-engineering-course.component.scss']
})
export class DesignAndDetailedEngineeringCourseComponent implements OnInit {

  htmlContent: SafeHtml = '';
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
