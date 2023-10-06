import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipleRoutingModule } from './principle-routing.module';
import { PrincipleHomeComponent } from './principle-home/principle-home.component';
import { PrincipleLoginComponent } from './principle-login/principle-login.component';
import { PrincipleSignUpComponent } from './principle-sign-up/principle-sign-up.component';


@NgModule({
  declarations: [
    PrincipleHomeComponent,
    PrincipleLoginComponent,
    PrincipleSignUpComponent
  ],
  imports: [
    CommonModule,
    PrincipleRoutingModule
  ]
})
export class PrincipleModule { }
