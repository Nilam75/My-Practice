import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-owner-sing-up',
  templateUrl: './owner-sing-up.component.html',
  styleUrls: ['./owner-sing-up.component.scss']
})
export class OwnerSingUpComponent {
  sinupForm!:FormGroup;
  showWorning:boolean=true;
  gender:boolean=false;
  showpass=false;
constructor(private fb:FormBuilder,private errorMath:ErrorStateMatcher){}
ngOnInit(){
  this.formDetails()
}

formDetails(){
  this.sinupForm=this.fb.group({
    firstName:['',Validators.required],
    midName:['',Validators.required],
    lastName:['',Validators.required],
    email:['',Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)],
    mobileNumber: ['', [Validators.required, Validators.pattern('[0-9+]*')]],
    gender:['',Validators.required],
    userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]],
    pass: ['', [Validators.required, Validators.minLength(8)]]
  })
}

hideHint(){
  this.showWorning=!this.showWorning;
}

isShowPassword(){
  this.showpass=!this.showpass
}

  submitSingUpForm(){
   
    let gen=this.sinupForm.value.gender
    if(gen){
      console.log(this.sinupForm.value);
    }else{
      this.gender=true;
      return 
    }
   
  }
}
