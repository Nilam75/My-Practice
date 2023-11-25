import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatMenuModule,
    MatSelectModule,
    MatCheckboxModule,
    HttpClientModule,
    MatIconModule
  ],
  exports:[
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule, 
    MatFormFieldModule,
    MatRadioModule,
    MatMenuModule,
    MatSelectModule,
    MatCheckboxModule,
    HttpClientModule,
    MatIconModule
  ]
})
export class ShareModule { }
