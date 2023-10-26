import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsLandingComponent } from './forms-landing/forms-landing.component';
import { LoginFormsComponent } from './login-forms/login-forms.component';
import { SingupFormsComponent } from './singup-forms/singup-forms.component';
import { FormNotFoundComponent } from './form-not-found/form-not-found.component';

const routes: Routes = [
  { path: '', component: FormsLandingComponent },
  {path:'formLoad',component:FormsLandingComponent},
  { path: 'loginForms', component: LoginFormsComponent },
  { path: 'singupForm', component: SingupFormsComponent },

  { path: '**', component: FormNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
