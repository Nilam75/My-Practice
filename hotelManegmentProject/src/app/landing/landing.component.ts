import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {


  constructor(private router:Router){}

  adminLanding(){
    this.router.navigateByUrl('adminMod/adminLand')
  }
  ownerLanding(){
    this.router.navigateByUrl('ownerMod/ownerLand')
  }

  userLanding(){
    this.router.navigateByUrl('userMod/userLand')
  }
}
