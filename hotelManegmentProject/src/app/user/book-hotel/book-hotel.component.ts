import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/Services/api-call.service';

@Component({
  selector: 'app-book-hotel',
  templateUrl: './book-hotel.component.html',
  styleUrls: ['./book-hotel.component.scss']
})
export class BookHotelComponent {
  bookingForm!:FormGroup
  panPattern="^[A-Za-z]{5}[0-9]{4}[A-Za-z]$" ;
  endpoint="HotelBooking"
  constructor(private fb:FormBuilder ,private apiCallService:ApiCallService,private router:Router){}


  ngOnInit(){

    this.bookingDetails();
  }

  bookingDetails(){
    this.bookingForm=this.fb.group({
      userName:['',Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('[0-9+]*')]],
      address:['',Validators.required],
      panNumber:['',[Validators.required, Validators.pattern(this.panPattern)]],
      checkIn:['',Validators.required],
      checkOut:['',Validators.required],
      bookAmout:['1000',Validators.required]
    })
  }

  submit(){

    console.log("booking form details:",this.bookingForm.value);
    
    this.apiCallService.postApiCall(this.endpoint, this.bookingForm.value).subscribe(res=>{
      console.log("book hotel details",res);
      if(res){
        alert('Data submitted Successfuly...!!');
        this.router.navigateByUrl('/userMod/userSucces');
  }
    })
    
  }
}