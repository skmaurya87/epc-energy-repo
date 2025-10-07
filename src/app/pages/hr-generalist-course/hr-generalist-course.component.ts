import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-hr-generalist-course',
  templateUrl: './hr-generalist-course.component.html',
  styleUrls: ['./hr-generalist-course.component.scss']
})
export class HrGeneralistCourseComponent implements OnInit {

  htmlContent: SafeHtml = '';
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
