import { Component, OnInit, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TestimonialComponent implements OnInit {
isBrowser: boolean | undefined;
 products = [
    { name: 'Product 1', image: 'assets/img/company1.jpg' },
    { name: 'Product 2', image: 'assets/img/company2.jpg' },
    { name: 'Product 3', image: 'assets/img/company3.jpg' }
  ];


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }


  ngOnInit(): void {
  }
    testimonials = [
    { message: "I am very happy with the Piping Design and Training they provide. I love their commitment and professionalism. I would like to make sure happy by the help of EPC Engineers Pvt Ltd Noida. Thanks", name: "Subhasis Dev",  src:'subhasis.jpg' },
    { message: "Communication with EPC-Engineers is one of the great moments of my life. Me and my friends has enjoyed the Training programms by them. The staffs of EPC Engineers are very friendly and helpful. Thanks to make me memorable", name: "Anand Vacaro", src:'anand.jpg' },
    { message: "Great Training Experience with EPC Engineers Pvt Ltd all team are Supportive and helpful Thanks A Lot.", name: "Geeta Singh", src:'geeta.png' },
    { message: "I have joined Online Instrumentation Design Engineering Training. I got the Best one to one training session with experienced Faculty. Trainer has sound knowledge on Engineering Calculation and Software.", name: "Keshav Sama", src:'keshav.jpg'},
    { message: "I am totally amazed with the Autocad Training by the friendly staffs of EPC Engineers, I am very happy with their Courses and faculty, will like to recommend it to our family and friends, thanks for the Amazing training Institute.", name: "Shashank Mehta", src:'shashank-mehta.jpg' },
  ];
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    margin: 20,
    nav: false,
    center: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  };

}
