import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:"adminMod", loadChildren:()=>import('./admin/admin.module').then(mode=>mode.AdminModule)},
  {path:"ownerMod",loadChildren:()=>import('./owner/owner.module').then(mode=>mode.OwnerModule)},
  {path:"userMod",loadChildren:()=>import('./user/user.module').then(mode=>mode.UserModule)},

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
