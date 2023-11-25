import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerLandingComponent } from './owner-landing/owner-landing.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { OwnerSingUpComponent } from './owner-sing-up/owner-sing-up.component';
import { ShareModule } from '../share/share.module';
import { OwnerSucusessComponent } from './owner-sucusess/owner-sucusess.component';
import { NewHotelRegisterComponent } from './new-hotel-register/new-hotel-register.component';


@NgModule({
  declarations: [
    OwnerLandingComponent,
    OwnerLoginComponent,
    OwnerSingUpComponent,
    OwnerSucusessComponent,
    NewHotelRegisterComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    ShareModule
  ]
})
export class OwnerModule { }
