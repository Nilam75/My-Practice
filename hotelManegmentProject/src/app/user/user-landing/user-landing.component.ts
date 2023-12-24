import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.scss']
})
export class UserLandingComponent {


  constructor(private router:Router){}

  backToLand(){
    
    this.router.navigateByUrl('')
    }

    userLogin(){
      this.router.navigateByUrl('userMod/userLogin')
    }
  
    userSingUp(){
      console.log('....')
      
      this.router.navigateByUrl('userMod/userSingUp')
    }
}
