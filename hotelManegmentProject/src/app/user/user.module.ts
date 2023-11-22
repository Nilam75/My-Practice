import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSingUpComponent } from './user-sing-up/user-sing-up.component';


@NgModule({
  declarations: [
    UserLandingComponent,
    UserLoginComponent,
    UserSingUpComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
