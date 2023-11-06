import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';

import { SimpleComponent } from './simple/simple.component';
import { ChildDataComponent } from './child-data/child-data.component';
import { SujectLandComponent } from './suject-land/suject-land.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [

    SimpleComponent,
    ChildDataComponent,
    SujectLandComponent
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SubjectModule { }
