import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSingUpComponent } from './admin-sing-up/admin-sing-up.component';


@NgModule({
  declarations: [
    AdminLandingComponent,
    AdminLoginComponent,
    AdminSingUpComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
