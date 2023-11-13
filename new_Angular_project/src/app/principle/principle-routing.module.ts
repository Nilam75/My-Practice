import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipleHomeComponent } from './principle-home/principle-home.component';
import { PrincipleLoginComponent } from './principle-login/principle-login.component';
import { PrincipleSignUpComponent } from './principle-sign-up/principle-sign-up.component';
import { PrinciplSuceessComponent } from './principl-suceess/principl-suceess.component';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';

const routes: Routes = [
  {path:"PrinceHome",component:PrincipleHomeComponent},
  {path:'principleLogin',component:PrincipleLoginComponent},
  {path:"principleSingUp",component:PrincipleSignUpComponent},
  {path:"PrincipalSucess",component:PrinciplSuceessComponent},
  {path:'directive',component:DirectivesComponent},
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent},
  {path:'customDrict', component:CustomDirectivesComponent} 
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipleRoutingModule { }
