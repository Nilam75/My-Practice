import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/Services/api-call.service';

@Component({
  selector: 'app-owner-forgatpassword',
  templateUrl: './owner-forgatpassword.component.html',
  styleUrls: ['./owner-forgatpassword.component.scss']
})
export class OwnerForgatpasswordComponent {
  confirmForm!:FormGroup;
  newPass:any;
  confirmPassword:any;
    ismatch:boolean=false;
    getUserData:any;
    endPoint="owner"
    newdata!:any;
    patchPassword: { pass: string } = {
      pass: ''
    }
    getUrl="http://localhost:3000/owner"
    
    confirmdata:any;      
constructor(private fb:FormBuilder, private apiCallService:ApiCallService ,private router:Router){}


ngOnInit(){
 this.confirmFormDetails();
 this.getApiData();
 }
confirmFormDetails(){
   this.confirmForm=this.fb.group({
    mobileNumber:['', [Validators.required, Validators.minLength(10)]],
    password:['',Validators.required],
    confirmPassword:['',Validators.required],
   
   })

  //  console.log("newpassword",this.newPassword);

 }

 getApiData(){

  this.apiCallService.getApiCall(this.endPoint).subscribe(res=>{
    this.getUserData=res
    console.log("Owner Data",this.getUserData);
    
  })
 }

submit(FormData:any){
  if(this.getUserData){
    var findData=this.getUserData.find((itme:any)=>{
        return itme.mobileNumber==FormData.mobileNumber
      })
    
  if(findData){
    // this.patchPassword.pass=FormData.confirmPassword

  
      let forgatUrl=this.getUrl + "/" + findData.id;
      console.log("forgat url",forgatUrl);
      console.log("Right Id",findData.id);
      this.apiCallService.forgatApi(forgatUrl, this.confirmForm.value).subscribe(res=>{
        console.log(res);
        
    }) 

    if(this.newdata==this.confirmdata){
      this.ismatch=false
      this.router.navigateByUrl("ownerMod/ownerSucces")
    }else{
      this.ismatch=true;
      this.router.navigateByUrl("ownerMod/ownerLogin")

    }
  }
  }
  console.log("forgat data",FormData);
  this.getApiData
 }
}
