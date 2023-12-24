import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.scss']
})
export class AdminLandingComponent {

  constructor(private router:Router){}

  backToLand(){
    
  this.router.navigateByUrl('')
  }

  adminLogin(){
    this.router.navigateByUrl('adminMod/adminLogin')
  }

  adminSingUp(){
    this.router.navigateByUrl('adminMod/adminSingUp')
  }
}
