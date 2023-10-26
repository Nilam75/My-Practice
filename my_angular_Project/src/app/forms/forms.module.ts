import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { SingupFormsComponent } from './singup-forms/singup-forms.component';
import { LoginFormsComponent } from './login-forms/login-forms.component';
import { FormsLandingComponent } from './forms-landing/forms-landing.component';
import { FormNotFoundComponent } from './form-not-found/form-not-found.component';


@NgModule({
  declarations: [
    SingupFormsComponent,
    LoginFormsComponent,
    FormsLandingComponent,
    FormNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
