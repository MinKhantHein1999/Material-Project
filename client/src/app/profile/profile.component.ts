import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  username: any;
  email: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getProfile().subscribe((profile) => {
      // this.username = profile.user.username;
      // this.email = profile.user.email;
    });
  }

  getProfile() {
    this.authService.getProfile().subscribe((profile) => {
      console.log(profile);
    });
  }
}
