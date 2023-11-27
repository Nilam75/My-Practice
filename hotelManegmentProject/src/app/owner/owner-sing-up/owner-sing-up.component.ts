import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/Services/api-call.service';

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
  endPoint:string="owner"
constructor(private fb:FormBuilder ,private apiCallService:ApiCallService,
  private router:Router){}
ngOnInit(){
  this.formDetails()
}

formDetails(){
  this.sinupForm=this.fb.group({
    userName:['',Validators.required],
    email:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    panNumber:['',],
    mobileNumber: ['', [Validators.required, Validators.pattern('[0-9+]*')]],
    gender:['Male',Validators.required],
    // userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })
}

hideHint(){
  this.showWorning=!this.showWorning;
}

showPassword(){
  this.showpass=!this.showpass
}

submit(){
   
    let gen=this.sinupForm.value.gender
    if(gen){

      console.log(this.sinupForm.value);
      
      this.apiCallService.postApiCall(this.endPoint,this.sinupForm.value).subscribe(res=>{
        console.log("ressponce>>>>",res);
        if(res){
          alert('Data submitted Successfuly...!!');
          this.router.navigateByUrl('/ownerMod/ownerSucces');
        }
      
      })
    }else{
      this.gender=true;
      return 
    }
   
  }
}
