import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public authService : AuthService, private router : Router,private flashMessage: FlashMessagesService) { }

  ngOnInit(): void {
  }

  showFlash() {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('You are now Logged Out', { cssClass: 'alert alert-warning', timeout: 1300 });
  }

  onLogout(){
    this.authService.logOut();
    this.router.navigate(['/']);
    this.showFlash();
  }

  // LoggedIn(){
  //   this.authService.LoggedIn();
  // }

}
