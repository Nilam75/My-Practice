import { Component } from '@angular/core';

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


  submit(form: any) {
    console.log(form);

  }

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
}
