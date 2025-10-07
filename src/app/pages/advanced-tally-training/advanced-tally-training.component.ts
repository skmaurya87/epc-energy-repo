import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-advanced-tally-training',
  templateUrl: './advanced-tally-training.component.html',
  styleUrls: ['./advanced-tally-training.component.scss']
})
export class AdvancedTallyTrainingComponent implements OnInit {

  htmlContent: SafeHtml = '';
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
