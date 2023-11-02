import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipleRoutingModule } from './principle-routing.module';
import { PrincipleHomeComponent } from './principle-home/principle-home.component';
import { PrincipleLoginComponent } from './principle-login/principle-login.component';
import { PrincipleSignUpComponent } from './principle-sign-up/principle-sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrinciplSuceessComponent } from './principl-suceess/principl-suceess.component';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    PrincipleHomeComponent,
    PrincipleLoginComponent,
    PrincipleSignUpComponent,
    PrinciplSuceessComponent,
    DirectivesComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    PrincipleRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class PrincipleModule { }
