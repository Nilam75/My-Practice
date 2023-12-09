import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/Services/api-call.service';

@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.scss']
})
export class OwnerLoginComponent {
 showWorning=true;
 showPass:boolean=false;
 loginForm!:FormGroup;
 ownerData:any;

 constructor(private fb:FormBuilder,private router:Router,private apiCallService:ApiCallService){}
 ngOnInit(){
  this.formDetails();
  this.getOwnerData();
 }
 formDetails(){
 this.loginForm=this.fb.group({
  ownerName :["",Validators.required],
  password:['', [Validators.required, Validators.minLength(8)]]
 })
 }
 
 showHidePassword(){
  this.showPass=!this.showPass
 }
 
 getOwnerData(){
  let endPoint="owner";
 this.apiCallService.getApiCall(endPoint).subscribe(res=>{
this.ownerData=res
console.log("Owner Data >>>",this.ownerData);

 })

 }
 Login(){
  if(this.ownerData){
    var matchedObj= this.ownerData.find((item:any)=>{
    if(item.ownerName == this.loginForm.value.ownerName && item.password == this.loginForm.value.password){
       return item;
     }
     
     })
   }
   if(matchedObj){
    this.apiCallService.ownerName=this.loginForm.value.ownerName
      this.router.navigateByUrl('ownerMod/ownerSucces')
      alert('Login Succesfully...!!');

    }else{
      this.router.navigateByUrl('ownerMod/ownerLogin')
      alert('Invalid User Name and Password...!!');


    }
  }

  forgat(){
    
  }
  
 }

