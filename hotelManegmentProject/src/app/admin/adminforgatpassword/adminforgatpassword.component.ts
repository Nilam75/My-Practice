import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/Services/api-call.service';

@Component({
  selector: 'app-adminforgatpassword',
  templateUrl: './adminforgatpassword.component.html',
  styleUrls: ['./adminforgatpassword.component.scss']
})
export class AdminforgatpasswordComponent {
  confirmForm!:FormGroup;
  newPass:any;
  confirmPassword:any;
    ismatch:boolean=false;
    getUserData:any;
    endPoint="admin"
    newdata!:any;
  
    
    confirmdata:any;      
constructor(private fb:FormBuilder, private apiCallService:ApiCallService ,private router:Router){}


ngOnInit(){
 this.confirmFormDetails();
 this.getApiData();
 }
confirmFormDetails(){
   this.confirmForm=this.fb.group({
    registerNumber:['', [Validators.required, Validators.minLength(10)]],
    newpassword:['',Validators.required],
    confirmPassword:['',Validators.required],
   
   })

  //  console.log("newpassword",this.newPassword);

 }

 getApiData(){

  this.apiCallService.getApiCall(this.endPoint).subscribe(res=>{
    this.getUserData=res
    console.log("userData",this.getUserData);
    
  })
 }

submit(FormData:any){
  if(this.getUserData){
    var findData=this.getUserData.find((itme:any)=>{
        if(itme.mobileNumber==this.confirmForm.value.registerNumber){
          alert('Valid Register Number');
        }else{  alert('Valid Register Number');
      }
       

     })
    
  if(findData){
    if(this.newdata==this.confirmdata){
      this.ismatch=false
      this.router.navigateByUrl("adminMod/adminSucces")
    }else{
      this.ismatch=true;
      this.router.navigateByUrl("adminMod/adminLogin")

    }
  }
  }

  console.log("forgat data",FormData);
  
 }
}
