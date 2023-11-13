import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharactorOnlyDirective } from '../CustomDirectives/charactor-only.directive';
import { NumbersOnlyDirective } from '../CustomDirectives/numbers-only.directive';



@NgModule({
  declarations: [
    CharactorOnlyDirective,
    NumbersOnlyDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    CharactorOnlyDirective,
    NumbersOnlyDirective
  ]
})
export class ShareModule { }
