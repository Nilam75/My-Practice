import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

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

constructor(private router:Router ,public datasrvice:DataService){}
 

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


  submit(formData: any) {
    console.log(formData);
    this.datasrvice.formdataTransper=formData.userName;
    this.router.navigateByUrl('principle/PrincipalSucess');
  }
}
