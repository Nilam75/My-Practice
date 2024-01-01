import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/Services/api-call.service';

@Component({
  selector: 'app-user-succes',
  templateUrl: './user-succes.component.html',
  styleUrls: ['./user-succes.component.scss']
})
export class UserSuccesComponent {
dataOfHotel:any=[];
showDiv:boolean=false;
searchText:any
shoWhotelDetails:boolean=false;
hedings=["ownerName","mobileNumber","hotelName","hotelAdress","hotelNumber", "hotelMenu", "rooms","Book The Hotel","View the Hotel"]

constructor(private router:Router,private apiCallService:ApiCallService){}
ngOnInit(){
}

  AllHotelData(){
    this.showDiv=true;
    this.dataOfHotel=[];
    this.apiCallService.getApiCall("hotelDetails").subscribe(res=>{
      this.dataOfHotel=res;
      console.log("Hotel Deatails",this.dataOfHotel);
      //  this.showAllHotels()
    })
  }

  // showAllHotels(){
  //   this.allHotelData.forEach((item:any)=>{
  //     this.dataOfHotel.push(item);
  //   })
  //   // if(dataOfHotel){}
  //   console.log("all Hotels",this.dataOfHotel);
    
  // }

  hotelDetails(hotel: any) {
    hotel.shoWhotelDetails = !hotel.shoWhotelDetails;
  }
}
