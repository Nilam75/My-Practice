import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserSingUpComponent } from './user-sing-up/user-sing-up.component';

const routes: Routes = [
  {path:"userLand",component:UserLandingComponent},
  {path:"userLogin",component:UserSingUpComponent},
  {path:"userSingUp",component:UserSingUpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
