import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import{ LoginComponent } from "./login/login.component";
import{ RegisterComponent } from "./register/register.component";
import{ UserListComponent } from "./user-list/user-list.component";
import{ EditUserComponent } from "./edit-user/edit-user.component";
import{ ViewUserComponent } from "./view-user/view-user.component";
import{ AnimationComponent } from "./animation/animation.component";
import{ LogoutComponent } from "./logout/logout.component";
import { AllVideoComponent } from './components/all-video/all-video.component';
import { MyguardGuard } from './myguard.guard';
import { VideoComponent } from './video/video.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SingleVideoComponent } from './single-video/single-video.component';



export const router: Routes = [
    { path: "", redirectTo:"login", pathMatch:"full" },
    { path: "login", component:LoginComponent},
    { path: "register", component:RegisterComponent},
    { path: "user-list", component:UserListComponent,canActivate: [MyguardGuard]},
    { path: "edit-user", component:EditUserComponent},
    { path: "view-user", component:ViewUserComponent},
    { path: "animation", component:AnimationComponent},
    { path: "logout", component:LogoutComponent,canActivate: [MyguardGuard]},
    { path: "video", component:VideoComponent,canActivate: [MyguardGuard]},
    { path: "single-video", component:SingleVideoComponent,canActivate: [MyguardGuard]},
    { path: "all-video", component:AllVideoComponent}

    
]; 

export const routes: ModuleWithProviders = RouterModule.forRoot(router);