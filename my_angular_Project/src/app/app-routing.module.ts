import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './loading/LoadingComponent';
import { CiecleShowComponent } from './ciecle-show/ciecle-show.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"", component: LoadingComponent},
 {path:"home",component:HomeComponent},
 {path:"circle",component:CiecleShowComponent},
//  {path:"loading",component:LoadingComponent},
 {path:"**",component:PageNotFoundComponent}//wild card Routing(**)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
