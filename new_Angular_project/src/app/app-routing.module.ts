import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { PrincipleModule } from './principle/principle.module';
import { ParaComponent } from './para/para.component';
import { ChildComponent } from './principle/child/child.component';

const routes: Routes = [
  {path:"",component:LoadingComponent},
  {path:"para",component:ParaComponent},
  {path:"child",component:ChildComponent},
  {path:"principle", loadChildren:()=>import('./principle/principle.module').then(m=>m.PrincipleModule)},
  {path:"subject",loadChildren:()=>import('./subject/subject.module').then(mod=>mod.SubjectModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
