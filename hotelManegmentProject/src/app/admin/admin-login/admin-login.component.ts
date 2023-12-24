import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/Services/api-call.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  
    loginForm!:FormGroup;
   showPass:boolean=false;
  
    userdata:any;
   
    constructor(private fb:FormBuilder,private apiCallService:ApiCallService,
      private router:Router){}
  
    ngOnInit(){
      this.userLoginDetails();
      this.getUserData();
      
    }
  
    userLoginDetails(){
      this.loginForm=this.fb.group({
        adminName:["",Validators.required],
        password:["",[Validators.required,Validators.minLength(8)]]
      })
    }
  
    showHidePassword(){
      this.showPass=!this.showPass
    }
  
    getUserData(){
     let endPoint="admin";
     this.apiCallService.getApiCall(endPoint).subscribe(res=>{
       this.userdata=res;
       console.log(" Admin Data>>>",this.userdata);
       
     })
    }
    Login(){
      console.log('forms details:::',this.loginForm);
      if(this.userdata){
        var findUserData=this.userdata.find((item:any)=>{
          if(item.adminName==this.loginForm.value.adminName && item.password==this.loginForm.value.password){
            return item;
          }
         
        })
  
      }
      if(findUserData){
      this.router.navigateByUrl('adminMod/adminSucces');
      alert('Login Succesfully...!!');
  
      }else{
        this.router.navigateByUrl("adminMod/adminLogin");
        alert('Invalid User Name and Password...!!');
  
      }
      }
      
     
  }
   
  
  

