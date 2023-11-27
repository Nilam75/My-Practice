import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/Services/api-call.service';

@Component({
  selector: 'app-new-hotel-register',
  templateUrl: './new-hotel-register.component.html',
  styleUrls: ['./new-hotel-register.component.scss']
})
export class NewHotelRegisterComponent {
  newHoteRegister!:FormGroup
showpass:boolean=false;
endPoint:string="hotelBooking"

  constructor(private fb:FormBuilder ,private apiCallService:ApiCallService,private router:Router){}
ngOnInit(){
  this.formDetails()
}

formDetails(){
  this.newHoteRegister=this.fb.group({
    ownerName:['',Validators.required],
    
   
    mobileNumber: ['', [Validators.required, Validators.pattern('[0-9+]*')]],
    hotelName:['',Validators.required],
    hotelAdress:['',Validators.required],
    hotelNumber:['',[Validators.required, Validators.pattern('[0-9+]*')]],
    hotelMenu:['',Validators.required],
    rooms:['',Validators.required],
  
    pass: ['', [Validators.required, Validators.minLength(8)]],
    checkBox:['',Validators.required]
  })
}

showHidePass(){
  this.showpass=!this.showpass;
}

newHotel(){
  console.log(this.newHoteRegister.value);
  this.apiCallService.postApiCall(this.endPoint,this.newHoteRegister.value).subscribe(res=>{
    console.log("responce::>>",res);
    if(res){
      alert('Data submitted Successfuly...!!');
      this.router.navigateByUrl('/ownerMod/ownerSucces');
    }
  })
}
}
