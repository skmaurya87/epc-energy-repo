import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 showBanner = true;
  pageTitle = '';
  breadcrumb = '';
  bannerImage = '';
  constructor(private title: Title, private meta: Meta, 
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        while (child?.firstChild) {
          child = child.firstChild;
        }
        return {
          data: child?.snapshot.data,
          path: child?.routeConfig?.path
        };
      })
    ).subscribe(({ data, path }) => {
      const excludedRoutes = ['/', '/register'];
      this.showBanner = !excludedRoutes.includes(this.router.url);

      if (this.showBanner) {
        // ✅ Hybrid: prefer data.title, fallback to path
        const title = data?.title || path || '';

        // Format nicely (capitalize words, replace - with space)
        this.pageTitle = title.replace(/-/g, ' ')
                              .replace(/\b\w/g, (char: string) => char.toUpperCase());

        this.breadcrumb = data?.breadcrumb || this.pageTitle;
        this.bannerImage = data?.banner || 'assets/img/about-banner.jpg';
      } else {
        this.pageTitle = '';
        this.breadcrumb = '';
        this.bannerImage = '';
      }
    });
  

  

  }

  ngOnInit() {
  
}
}
