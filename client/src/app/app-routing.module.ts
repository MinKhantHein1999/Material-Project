import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'dashboard', component:  DashboardComponent},
  { path: 'register', component:  RegisterComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'profile', component:  ProfileComponent},
  { path: '**', component:  HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
