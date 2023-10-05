import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminCompComponent } from './admin-comp/admin-comp.component';
import { LandingComponent } from './landing/LandingComponent';



@NgModule({
  declarations: [
    AdminCompComponent,
    LandingComponent,
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
