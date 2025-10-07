import { Component, OnInit } from '@angular/core';
import { HtmlLoaderService } from 'src/app/services/html-loader.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-web-development-training',
  template: `<div [innerHTML]="htmlContent"></div>`,
  styleUrls: ['./web-development-training.component.scss']
})
export class WebDevelopmentTrainingComponent implements OnInit {
 htmlContent: SafeHtml = '';

  constructor(private htmlLoader: HtmlLoaderService) {}

  ngOnInit(): void {
    this.htmlLoader.loadHtml('assets/htmlPages/web-development-training.html')
      .subscribe(html => this.htmlContent = html);
  }

}
