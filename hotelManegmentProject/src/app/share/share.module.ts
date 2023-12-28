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
import { SerachPipe } from '../serach.pipe';
import { SanckBarComponent } from '../sanck-bar/sanck-bar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { ImageurlPipe } from '../imageurl.pipe';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    SerachPipe,
    SanckBarComponent,
   ImageurlPipe

  ],
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
    MatIconModule,
    MatSnackBarModule,
  


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
    MatIconModule,
    SerachPipe,
    SanckBarComponent,
    MatSnackBarModule,
    ImageurlPipe
  ]
})
export class ShareModule { }
