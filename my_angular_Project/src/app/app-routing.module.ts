import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { CiecleShowComponent } from './ciecle-show/ciecle-show.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", component: LoadingComponent},
 {path:"home",component:HomeComponent},
 {path:"circle",component:CiecleShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
