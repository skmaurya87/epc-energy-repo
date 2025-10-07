import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-diploma-solar-power-plant-design-engineering',
  templateUrl: './diploma-solar-power-plant-design-engineering.component.html',
  styleUrls: ['./diploma-solar-power-plant-design-engineering.component.scss']
})
export class DiplomaSolarPowerPlantDesignEngineeringComponent implements OnInit {

  htmlContent: SafeHtml = '';
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
