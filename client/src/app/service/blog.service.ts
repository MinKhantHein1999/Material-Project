import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  options;
  domain = this.authService.domain;

  constructor(private http$: HttpClient, private authService: AuthService) {}
  createAuthHeader() {
    this.authService.loadToken();
    this.options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('authorization', this.authService.authToken),
    };
  }

  newBlog(blog) {
    return this.http$.post<any>(
      this.domain + '/blogs/newBlog',
      blog,
      this.options
    );
  }
}
