import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-electrical-design-engineering',
  templateUrl: './electrical-design-engineering.component.html',
  styleUrls: ['./electrical-design-engineering.component.scss']
})
export class ElectricalDesignEngineeringComponent implements OnInit {

  htmlContent: SafeHtml = '';
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
