import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-hybrid-electric-vehicle-design-training-course',
  templateUrl: './hybrid-electric-vehicle-design-training-course.component.html',
  styleUrls: ['./hybrid-electric-vehicle-design-training-course.component.scss']
})
export class HybridElectricVehicleDesignTrainingCourseComponent implements OnInit {

  htmlContent: SafeHtml = '';
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
