import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-workshop-process-design-engineering',
  template: `<div [innerHTML]="htmlContent"></div>`,
  styleUrls: ['./workshop-process-design-engineering.component.scss']
})
export class WorkshopProcessDesignEngineeringComponent implements OnInit {
  htmlContent: SafeHtml = '';
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
     this.http.get('./assets/htmlPages/workshop-process-design-engineering.html', { responseType: 'text' }).subscribe((html) => {
      this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(html);
    });
  }

}
