import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Product X - MySite');
  this.meta.updateTag({ name: 'description', content: 'Piping Design, Electrical design engineering training course and IT programming Training courses in Noida Delhi NCR. HVAC, Process, Instrumentation Drafting  Modelling, Oil and gas Plant Layout design Engineering' });
  this.meta.updateTag({ name: 'Keywords', content: 'Piping Designing Course, Electrical Design Training Course, Oil and Gas Training Course, Design Engineering Course in Noida, process design Training, Instrumentation Drafting  Modeling Training Courses, Plant Layout Design, HVAC design Course,Delhi, Noida' });
  // Meta tags
    this.meta.updateTag({ name: 'msvalidate.01', content: '' });
    this.meta.updateTag({ name: 'allow-search', content: 'yes' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, archive' });
    this.meta.updateTag({ name: 'revisit-after', content: '3 days' });
    this.meta.updateTag({ name: 'DC.title', content: 'Design Engineering Courses' });
    this.meta.updateTag({ name: 'geo.region', content: 'Noida Delhi NCR' });
    this.meta.updateTag({ name: 'geo.placename', content: 'Noida Uttar Pradesh' });
    this.meta.updateTag({ name: 'author', content: 'Electrical design engineering training course' });
    this.meta.updateTag({ name: 'alexaVerifyID', content: ' ' });
    this.meta.updateTag({ name: 'distribution', content: 'Global' });
    this.meta.updateTag({ name: 'classification', content: 'Training Institute' });
    this.meta.updateTag({ name: 'language', content: 'English' });
    this.meta.updateTag({ httpEquiv: 'Content-language', content: 'en-En' });
    this.meta.updateTag({ name: 'rating', content: 'General' });
    this.meta.updateTag({ name: 'audience', content: 'all' });
    this.meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1.0' });
    this.meta.updateTag({ name: 'generator', content: 'www.epc-engineers.com All Rights Reserved.' });
    // Canonical link must be handled separately (not with Meta)
    const link: HTMLLinkElement = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', 'https://www.epc-engineers.com');
    document.head.appendChild(link);
  }

}
