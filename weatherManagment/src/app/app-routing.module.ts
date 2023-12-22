import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDataComponent } from './main-data/main-data.component';

const routes: Routes = [
  {path:"",component:MainDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
