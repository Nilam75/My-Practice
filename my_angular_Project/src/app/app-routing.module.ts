import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { HomeComponent } from './home/home.component';
import { AddCircleComponent } from './add-circle/add-circle.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:"",component:LoadingComponent},
  {path:"home",component:HomeComponent},
  {path:"circle",component:AddCircleComponent},
  {path:"loading",component:LoadingComponent},
  {path:"admin",loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
  {path:"landing",loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:"about",loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:"**",component:PageNotFoundComponent}//wildcard routing


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
