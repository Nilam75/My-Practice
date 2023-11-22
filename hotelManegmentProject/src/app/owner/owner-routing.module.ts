import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerLandingComponent } from './owner-landing/owner-landing.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { OwnerSingUpComponent } from './owner-sing-up/owner-sing-up.component';

const routes: Routes = [
  {path:"ownerLand",component:OwnerLandingComponent},
  {path:"ownerLogin",component:OwnerLoginComponent},
  {path:"ownerSingUp",component:OwnerSingUpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
