import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserSingUpComponent } from './user-sing-up/user-sing-up.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSuccesComponent } from './user-succes/user-succes.component';
import { ForgatpasswordComponent } from './forgatpassword/forgatpassword.component';

const routes: Routes = [
  {path:"userLand",component:UserLandingComponent},
  {path:"userLogin",component:UserLoginComponent},
  {path:"userSingUp",component:UserSingUpComponent},
  {path:"userSucces",component:UserSuccesComponent},
  {path:"userForgat",component:ForgatpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
