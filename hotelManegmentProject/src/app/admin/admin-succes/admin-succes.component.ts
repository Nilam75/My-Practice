import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/Services/api-call.service';

@Component({
  selector: 'app-admin-succes',
  templateUrl: './admin-succes.component.html',
  styleUrls: ['./admin-succes.component.scss']
})
export class AdminSuccesComponent {
  searchText:any
  tableHeadings=["Owner Name", "Owner Number" ,"Hotel Name" ,"Hotel Address","Hotel Number","Hotel Menu","Rooms","Delete"];
  showAllHotels:any;
  hideButon:boolean=false;

  image="hotel1.jpeg"
  constructor( private apiCallService:ApiCallService ,private router:Router){}

  ngOnInit(){
    this.getHotel()
  }

  getHotel(){
    this.apiCallService.getApiCall("hotelDetails").subscribe(res=>{
     this.showAllHotels=res
     this.viewHotelDetails()
      
    })
  }
  viewHotelDetails(){
   this.hideButon=!this.hideButon
    console.log("hjbnv c");
    
  }
  deleteRecord(id:any){
    console.log("delete");
    this.apiCallService.deleteApiCall("hotelDetails",id).subscribe(res=>{
      this.viewHotelDetails()
      alert("Rcord Deleted Succssfully.......!")
    })
  }
}