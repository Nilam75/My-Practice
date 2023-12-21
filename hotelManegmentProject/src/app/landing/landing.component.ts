import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  images = ["../../assets/image/hotel/hotel6.jpg", "../../assets/image/hotel/hotel5.jpeg", "../../assets/image/hotel/hotel4.jpeg"];

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
