import { Component, OnInit, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BannerComponent implements OnInit {
isBrowser: boolean | undefined;
 banners: any[] = []
 contents: any[] = []

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.banners = [
      { src: 'banner1.jpg' },
      { src: 'banner2.jpg' },
      { src: 'banner3.jpg' }
    ];

    this.contents = [
      {title:'Career Options of Design engineers & IT Training courses', description:'Complete your relevant design engineering course and specialized skills of IT trainings.', color:'rgba(204, 1, 74, 0.8)', link:'#'},
      {title:'Build your skills with EPC-Engineering', description:'Detailed design in EPC requires a high level of technical knowledge and proficiency.', color:'rgba(55, 0, 142, 0.8)', link:'#'},
      {title:'Engineering Design courses & Online Training', description:'EPC-Engineers offers fundamental features of engineering design assemblies, recreation and problem-solving.', color:'rgba(96, 6, 15, 0.8)', link:'#'},
    ]

  }

      customOptions1: OwlOptions = {
        loop: true,
        autoplay: true,
        margin: 20,
        nav: false,
        center: false,
        dots: true,
        autoplaySpeed: 1500,
        smartSpeed: 1500,
        responsive: {
          0: { items: 1 },
        }
      };
      customOptions2: OwlOptions = {
        loop: true,
        autoplay: true,
        margin: 20,
        nav: false,
        center: false,
        dots: false,
        rtl: true,
        autoplaySpeed: 1500,
        smartSpeed: 1500,
        responsive: {
          0: { items: 1 },
        }
      };


}
