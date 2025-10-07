import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-substation-design-engineering',
  templateUrl: './substation-design-engineering.component.html',
  styleUrls: ['./substation-design-engineering.component.scss']
})
export class SubstationDesignEngineeringComponent implements OnInit {

  htmlContent: SafeHtml = '';
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
