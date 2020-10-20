import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;

  regForm = new FormGroup({
    username: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.maxLength(30)])
    ),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(6)])
    ),
    repeadpassword: new FormControl('', [
      Validators.required,
      this.passwordsMatch,
    ]),
  });

  get Username() {
    return this.regForm.get('username');
  }

  get Email() {
    return this.regForm.get('email');
  }

  get Password() {
    return this.regForm.get('password');
  }

  get Repeadpassword() {
    return this.regForm.get('repeadpassword');
  }

  passwordsMatch(control: FormControl) {
    const password = control.root.get('password');
    return password && control.value != password.value
      ? {
          passwordMatch: true,
        }
      : null;
  }

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
  register() {
    if (this.regForm.valid) {
      this.authService
        .registerUser(this.regForm.value)
        .subscribe((data) => console.log(data));
    }
  }
}
