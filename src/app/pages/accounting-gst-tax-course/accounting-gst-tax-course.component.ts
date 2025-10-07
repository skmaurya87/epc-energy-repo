import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-accounting-gst-tax-course',
  templateUrl: './accounting-gst-tax-course.component.html',
  styleUrls: ['./accounting-gst-tax-course.component.scss']
})
export class AccountingGstTaxCourseComponent implements OnInit {
  htmlContent: SafeHtml = '';
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
