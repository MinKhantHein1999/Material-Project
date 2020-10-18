import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private domain = "http://localhost:8000"
  authToken;
  user;

  constructor(private http$ : HttpClient) { }

  registerUser(user){
    return this.http$.post<any>(this.domain + '/auth/register',user);
  }

  loginUser(user){
    return this.http$.post<any>(this.domain+ '/auth/login',user);
  }

  storeUserData(token,user){
    localStorage.setItem('token',token);
    localStorage.setItem('user',JSON.stringify(user) );
    this.authToken = token;
    this.user =user;
  }
}
