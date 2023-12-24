import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-landing',
  templateUrl: './owner-landing.component.html',
  styleUrls: ['./owner-landing.component.scss']
})
export class OwnerLandingComponent {

  constructor(private router:Router){}

  backToLand(){
    
    this.router.navigateByUrl('')
    }


    ownerLogin(){
      this.router.navigateByUrl('ownerMod/ownerLogin')
    }
  
    ownerSingUp(){
      this.router.navigateByUrl('ownerMod/ownerSingUp')
    }
}
