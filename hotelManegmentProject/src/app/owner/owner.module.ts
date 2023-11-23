import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerLandingComponent } from './owner-landing/owner-landing.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { OwnerSingUpComponent } from './owner-sing-up/owner-sing-up.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    OwnerLandingComponent,
    OwnerLoginComponent,
    OwnerSingUpComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    ShareModule
  ]
})
export class OwnerModule { }
