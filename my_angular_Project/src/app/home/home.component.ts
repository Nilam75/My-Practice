import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  name:string= "nilam";
constructor(private router:Router){

}
circle(){
  this.router.navigateByUrl("circle");
}
}
