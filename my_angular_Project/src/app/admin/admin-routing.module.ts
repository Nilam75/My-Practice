import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCompComponent } from './admin-comp/admin-comp.component';
import { LandingComponent } from './landing/LandingComponent';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  {path:'adminCoponent',component:AdminCompComponent},
  {path:'landing',component:LandingComponent},
 // {path:"home",component:HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
