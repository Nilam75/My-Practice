import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-comp',
  templateUrl: './admin-comp.component.html',
  styleUrls: ['./admin-comp.component.scss']
})
export class AdminCompComponent {
constructor(private router:Router){}

}
