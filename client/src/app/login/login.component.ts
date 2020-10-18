import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password : new FormControl("",Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ])),
  })
  messageClass: string;
  message: any;

  get Email(){
    return this.loginForm.get('email')
    }

  get Password(){
      return this.loginForm.get('password')
    }

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.valid){
      this.authService.loginUser(this.loginForm.value).subscribe(data=>{

        if(!data.success){
          this.messageClass = 'alert alert-danger';
          this.message = data.message;
        }
        else{
          console.log(data);
          this.authService.storeUserData(data.token,data.user)
          this.loginForm.reset();
          this.router.navigate(['dashboard']);
        }
      })
      err=>{
        console.log(err);
      }
    }
  }

}
