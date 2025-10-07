import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-process-design-engineering',
  templateUrl: './process-design-engineering.component.html',
  styleUrls: ['./process-design-engineering.component.scss']
})
export class ProcessDesignEngineeringComponent implements OnInit {

  htmlContent: SafeHtml = '';
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
