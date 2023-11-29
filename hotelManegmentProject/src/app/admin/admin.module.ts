import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSingUpComponent } from './admin-sing-up/admin-sing-up.component';
import { AdminSuccesComponent } from './admin-succes/admin-succes.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    AdminLandingComponent,
    AdminLoginComponent,
    AdminSingUpComponent,
    AdminSuccesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareModule
  ]
})
export class AdminModule { }
