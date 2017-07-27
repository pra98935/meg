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
import { ApiService } from './services/api.service';
import { SharedService } from './services/shared.service';
import { MyguardGuard } from './myguard.guard';
import { LogoutComponent } from './logout/logout.component';
import { AllVideoComponent } from './components/all-video/all-video.component';

import { VideoComponent } from './video/video.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SingleVideoComponent } from './single-video/single-video.component';



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
    SidenavComponent,
    LogoutComponent,
    AllVideoComponent,
    SidebarComponent,
    VideoComponent,
    SingleVideoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes,
    BrowserAnimationsModule,
    MdSidenavModule,
    HttpModule
  ],
  providers: [ApiService,SharedService,MyguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
