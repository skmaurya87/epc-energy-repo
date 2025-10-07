import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-civil-design-engineering-training',
  templateUrl: './civil-design-engineering-training.component.html',
  styleUrls: ['./civil-design-engineering-training.component.scss']
})
export class CivilDesignEngineeringTrainingComponent implements OnInit {

  htmlContent: SafeHtml = '';
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
