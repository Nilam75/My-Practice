import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { PrincipleModule } from './principle/principle.module';

const routes: Routes = [
  {path:"",component:LoadingComponent},
  {path:"principle", loadChildren:()=>import('./principle/principle.module').then(m=>m.PrincipleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
