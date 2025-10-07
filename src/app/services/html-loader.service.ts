import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HtmlLoaderService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  loadHtml(filePath: string): Observable<SafeHtml> {
    return this.http.get(filePath, { responseType: 'text' }).pipe(
      map(html => this.sanitizer.bypassSecurityTrustHtml(html))
    );
  }
}
