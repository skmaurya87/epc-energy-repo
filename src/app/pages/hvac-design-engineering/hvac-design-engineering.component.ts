import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-hvac-design-engineering',
  templateUrl: './hvac-design-engineering.component.html',
  styleUrls: ['./hvac-design-engineering.component.scss']
})
export class HvacDesignEngineeringComponent implements OnInit {

  htmlContent: SafeHtml = '';
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
