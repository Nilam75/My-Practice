import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipleHomeComponent } from './principle-home/principle-home.component';
import { PrincipleLoginComponent } from './principle-login/principle-login.component';
import { PrincipleSignUpComponent } from './principle-sign-up/principle-sign-up.component';

const routes: Routes = [
  {path:"PrinceHome",component:PrincipleHomeComponent},
  {path:'principleLogin',component:PrincipleLoginComponent},
  {path:"principleSingUp",component:PrincipleSignUpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipleRoutingModule { }
