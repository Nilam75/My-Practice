import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharactorOnlyDirective } from '../CustomDirectives/charactor-only.directive';
import { NumbersOnlyDirective } from '../CustomDirectives/numbers-only.directive';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CharactorOnlyDirective,
    NumbersOnlyDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    CharactorOnlyDirective,
    NumbersOnlyDirective,
    HttpClientModule
  ]
})
export class ShareModule { }
