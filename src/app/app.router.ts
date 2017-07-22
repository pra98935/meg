import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import{ LoginComponent } from "./login/login.component";
import{ RegisterComponent } from "./register/register.component";
import{ UserListComponent } from "./user-list/user-list.component";
import{ EditUserComponent } from "./edit-user/edit-user.component";
import{ ViewUserComponent } from "./view-user/view-user.component";
import{ AnimationComponent } from "./animation/animation.component";



export const router: Routes = [
    { path: "", redirectTo:"login", pathMatch:"full" },
    { path: "login", component:LoginComponent},
    { path: "register", component:RegisterComponent},
    { path: "user-list", component:UserListComponent},
    { path: "edit-user", component:EditUserComponent},
    { path: "view-user", component:ViewUserComponent},
    { path: "animation", component:AnimationComponent}
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);