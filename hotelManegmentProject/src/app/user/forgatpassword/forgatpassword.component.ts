import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgatpassword',
  templateUrl: './forgatpassword.component.html',
  styleUrls: ['./forgatpassword.component.scss']
})
export class ForgatpasswordComponent {
  // confirmForm!:FormGroup;
  // newPass:any;
  // confirmPassword:any;
  // ismatch:any;
  // constructor(private fb:FormBuilder){}

  // ngOnInit(){
  //   this.confirmFormDetails()
  // }
  // confirmFormDetails(){
  //   this.confirmForm=this.fb.group({
  //     registerNumber:['',Validators.required],
  //     newPassword:['',Validators.required],
  //     confirmPassword:['',Validators.required]
  //   })
  // }
  // newpanewPasswordfild(newdata:any){
  //   this.newPass=newdata;
   
  // }
  // confirmPasFild( confirmData:any){
  //   this.confirmPassword=confirmData
  //   if(this.newPass==this.confirmPassword){
  //     this.ismatch=false;

  //   }else{
  //     this.ismatch=true
  //   }
  // }
  // newPassword(){
  //   if(this.newPass==this.confirmPassword){
  //     this.ismatch=false;

  //   }else{
  //     this.ismatch=true
  //   }
  // }
  // submit(formdata:any){
  //   console.log(formdata);
    

  // }
}
// showLogin(){
//   this.formHide=true
// }
// forgatePassword(){
//   this.formHide=false
// }

// newPasswordfild(newData:any){
//   this.newpassword=newData;
 
// }
// confirmPasFild(confirmdata:any){
//   this.confirmPassword=confirmdata;
//   if(this.userdata){
//     this.userNumber=this.userdata.find((itemm:any)=>{
//       if(itemm.mobileNumber==this.confirmForm.mobileNumber){
//         return;
//       }
//     })
//   }
//   if(this.userNumber){
//     if(this.newPassword==this.confirmPassword){
//       this.isMatchPassword=false;
   
//     }else{
//       this.isMatchPassword=true
//     }

//   }
// }

// newPassword(){
//   if(this.userNumber){
//     if(this.newPassword==this.confirmPassword){
//       this.isMatchPassword=false;
   
//     }else{
//       this.isMatchPassword=true;
//     }
// }

// }
// submit(formdata:any){
// console.log(formdata);

// }