import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-sanck-bar',
  templateUrl: './sanck-bar.component.html',
  styleUrls: ['./sanck-bar.component.scss']
})
export class SanckBarComponent {
snackBarRefe=inject(MatSnackBar)
}
