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
  userName :["",Validators.required],
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
console.log(this.ownerData);

 })

 }
 Login(){
  if(this.ownerData){
    var matchedObj= this.ownerData.find((item:any)=>{
    if(item.userName == this.loginForm.value.userName && item.password == this.loginForm.value.password){
       return item;
     }
     
     })
   }
   if(matchedObj){
      this.router.navigateByUrl('ownerMod/ownerSucces')

    }else{
      this.router.navigateByUrl('ownerMod/ownerLogin')

    }
  }

 
  
 }

