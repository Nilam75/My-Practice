import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principle-login',
  templateUrl: './principle-login.component.html',
  styleUrls: ['./principle-login.component.scss']
})
export class PrincipleLoginComponent {
userName:any;
formHide=true;
newwpassword:any;
confirmPassword:any;
isMatch:boolean=false;

constructor(private router:Router){}
 

  forgatPasswod(){
    console.log('forgatPassword');
    
    this.formHide=false
  }

  newPasswordfild(passdata:any){
    this.newwpassword=passdata;
  }

  confirmPasFild(confirmPassword:any){
    this.confirmPassword=confirmPassword;
    if(this.newwpassword==this.confirmPassword){
      this.isMatch=false;
    }else{
      this.isMatch=true;
    }
  }
  newPassword(){
    if(this.newPassword==this.confirmPassword){
      this.isMatch=false;
    }else{
      this.isMatch=true
    }
  }


  submit(form: any) {
    console.log(form);
    this.router.navigateByUrl('principle/PrincipalSucess');
  }
}
