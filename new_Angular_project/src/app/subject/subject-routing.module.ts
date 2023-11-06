import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SujectLandComponent } from './suject-land/suject-land.component';
import { ChildDataComponent } from './child-data/child-data.component';
import { SimpleComponent } from './simple/simple.component';

const routes: Routes = [
  {path:'subLand',component:SujectLandComponent},
  {path:'childData',component:ChildDataComponent},
  {path:'simple',component:SimpleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
