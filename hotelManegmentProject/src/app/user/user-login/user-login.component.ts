import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/Services/api-call.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  confirmForm!:any;
  loginForm!:FormGroup;
 showPass:boolean=false;

  userdata:any;
 
  constructor(private fb:FormBuilder,private apiCallService:ApiCallService,private router:Router){}

  ngOnInit(){
    this.userLoginDetails();
    this.getUserData();
    
  }

  userLoginDetails(){
    this.loginForm=this.fb.group({
      userName:["",Validators.required],
      password:["",[Validators.required,Validators.minLength(8)]]
    })
  }

  showHidePassword(){
    this.showPass=!this.showPass
  }

  getUserData(){
   let endPoint="user";
   this.apiCallService.getApiCall(endPoint).subscribe(res=>{
     this.userdata=res;
     console.log("user data>>>",this.userdata);
     
   })
  }
  Login(){
    console.log('forms details:::',this.loginForm);
    if(this.userdata){
      var findUserData=this.userdata.find((item:any)=>{
        if(item.userName==this.loginForm.value.userName && item.password==this.loginForm.value.password){
          return item;
        }
       
      })

    }
    if(findUserData){
    this.router.navigateByUrl('userMod/userSucces');
    alert('Login Succesfully...!!');

    }else{
      this.router.navigateByUrl("userMod/userLogin");
      alert('Invalid User Name and Password...!!');

    }
    }
    
   
}
 

