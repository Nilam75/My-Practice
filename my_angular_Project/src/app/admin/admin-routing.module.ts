import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCompComponent } from './admin-comp/admin-comp.component';

const routes: Routes = [
  {path:'adminCoponent',component:AdminCompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
