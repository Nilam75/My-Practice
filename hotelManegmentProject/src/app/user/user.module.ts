import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSingUpComponent } from './user-sing-up/user-sing-up.component';
import { ShareModule } from '../share/share.module';
import { UserSuccesComponent } from './user-succes/user-succes.component';
import { ForgatpasswordComponent } from './forgatpassword/forgatpassword.component';


@NgModule({
  declarations: [
    UserLandingComponent,
    UserLoginComponent,
    UserSingUpComponent,
    UserSuccesComponent,
    ForgatpasswordComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ShareModule
  ]
})
export class UserModule { }
