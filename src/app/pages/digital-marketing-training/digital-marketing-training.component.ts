import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-digital-marketing-training',
  templateUrl: './digital-marketing-training.component.html',
  styleUrls: ['./digital-marketing-training.component.scss']
})
export class DigitalMarketingTrainingComponent implements OnInit {

  htmlContent: SafeHtml = '';
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
