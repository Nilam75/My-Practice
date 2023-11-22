import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSingUpComponent } from './admin-sing-up/admin-sing-up.component';

const routes: Routes = [
  {path:"adminLand",component:AdminLandingComponent},
  {path:"adminLogin",component:AdminLoginComponent},
  {path:"adminSingUp",component:AdminSingUpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
