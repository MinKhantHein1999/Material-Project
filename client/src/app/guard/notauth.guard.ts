import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotauthGuard implements CanActivate {
  constructor(private authService : AuthService, private router : Router){}
  canActivate(){
    if(this.authService.LoggedIn()){
      this.router.navigate(['/']);
      return false;
    }
    else{
      return true;
    }
  }

}
