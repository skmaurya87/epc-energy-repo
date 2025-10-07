import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-advance-excel-training-course',
  templateUrl: './advance-excel-training-course.component.html',
  styleUrls: ['./advance-excel-training-course.component.scss']
})
export class AdvanceExcelTrainingCourseComponent implements OnInit {

  htmlContent: SafeHtml = '';
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
