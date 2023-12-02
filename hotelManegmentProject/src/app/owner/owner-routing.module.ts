import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerLandingComponent } from './owner-landing/owner-landing.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { OwnerSingUpComponent } from './owner-sing-up/owner-sing-up.component';
import { OwnerSucusessComponent } from './owner-sucusess/owner-sucusess.component';
import { NewHotelRegisterComponent } from './new-hotel-register/new-hotel-register.component';
import { OwnerForgatpasswordComponent } from './owner-forgatpassword/owner-forgatpassword.component';

const routes: Routes = [
  {path:"ownerLand",component:OwnerLandingComponent},
  {path:"ownerLogin",component:OwnerLoginComponent},
  {path:"ownerSingUp",component:OwnerSingUpComponent},
  {path:"ownerSucces",component:OwnerSucusessComponent},
  {path:"ownerNewHote",component:NewHotelRegisterComponent},
  {path:"ownerForgat",component:OwnerForgatpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
