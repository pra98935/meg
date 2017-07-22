import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

import { routes } from './app.router';

import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AnimationComponent } from './animation/animation.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MdSidenavModule} from '@angular/material';

import { HttpModule }    from '@angular/http';
import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    EditUserComponent,
    ViewUserComponent,
    AnimationComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes,
    BrowserAnimationsModule,
    MdSidenavModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
