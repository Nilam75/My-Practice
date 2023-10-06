import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principle-home',
  templateUrl: './principle-home.component.html',
  styleUrls: ['./principle-home.component.scss']
})
export class PrincipleHomeComponent {
constructor(private router:Router){};
  princeLogin(){
    this.router.navigateByUrl('principle/principleLogin')
  }
  princeSingUp(){
    this.router.navigateByUrl('principle/principleSingUp')
  }
}
