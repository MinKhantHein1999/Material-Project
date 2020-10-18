import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  private domain = "http://localhost:8000"
  authToken;
  user;
  options;

  constructor(private http$ : HttpClient, private router : Router) { }

  createAuthHeader(){
    this.loadToken();
    // this.options = new Option({
    //   headers : new Headers({
    //     'Content-Type':'application/json',
    //     'authorization':this.authToken
    //   })
    // })
    this.options = ({
      headers : new HttpHeaders().set('Content-Type','application/json').set('authorization',this.authToken)
    })
  }

  loadToken(){
    this.authToken=localStorage.getItem('token');
  }

  logOut(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  registerUser(user){
    return this.http$.post<any>(this.domain + '/auth/register',user);
  }

  loginUser(user){
    return this.http$.post<any>(this.domain+ '/auth/login',user);
  }

  getProfile(){
    this.createAuthHeader();
    return this.http$.get(this.domain + '/auth/profile',this.options);
  }

  storeUserData(token,user){
    localStorage.setItem('token',token);
    localStorage.setItem('user',JSON.stringify(user) );
    const time_to_login = Date.now() + 86400; // one week
    localStorage.setItem('timer', JSON.stringify(time_to_login));
    this.authToken = token;
    this.user =user;
  }

  LoggedIn(){
    return !!localStorage.getItem('token');
  }

  ngOnInit() {
    const timer = JSON.parse(localStorage.getItem('timer'));
    if (timer && (Date.now() > timer)) {
      this.logOut;
      this.router.navigate(['/login']);
    }
  }

}
