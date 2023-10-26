import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-landing',
  templateUrl: './forms-landing.component.html',
  styleUrls: ['./forms-landing.component.scss']
})
export class FormsLandingComponent {

constructor(private router:Router){}
  login(){
    this.router.navigateByUrl('"formsModule/loginForms')
  }

  singup(){
    this.router.navigateByUrl('"formsModule/singupForm')
  }
}
