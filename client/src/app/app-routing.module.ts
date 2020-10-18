import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { NotauthGuard } from './guard/notauth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'dashboard', component:  DashboardComponent,canActivate : [AuthGuard]},
  { path: 'blog', component:  BlogComponent,canActivate : [AuthGuard]},
  { path: 'register', component:  RegisterComponent, canActivate : [NotauthGuard]},
  { path: 'login', component:  LoginComponent, canActivate : [NotauthGuard]},
  { path: 'profile', component:  ProfileComponent, canActivate : [AuthGuard]},
  { path: '**', component:  HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
