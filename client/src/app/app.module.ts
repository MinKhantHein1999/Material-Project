import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { NotauthGuard } from './guard/notauth.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    NavBarComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()


  ],
  providers: [AuthService,AuthGuard,NotauthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
