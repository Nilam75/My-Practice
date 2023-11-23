import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.scss']
})
export class OwnerLoginComponent {
 showWorning=true;
 showPass:boolean=false;
 loginForm!:FormGroup

 constructor(private fb:FormBuilder){}
 ngOnInit(){
  this.formDetails();
 }
 formDetails(){
 this.loginForm=this.fb.group({
  userName :["",Validators.required],
  pass:["",Validators.required]
 })
 }
 

 
 submitLoginForm(){
  console.log("login form Details",this.loginForm.value);

  
 }
}
