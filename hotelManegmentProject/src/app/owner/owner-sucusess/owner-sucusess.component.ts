import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/Services/api-call.service';

@Component({
  selector: 'app-owner-sucusess',
  templateUrl: './owner-sucusess.component.html',
  styleUrls: ['./owner-sucusess.component.scss']
})
export class OwnerSucusessComponent {

  ownerData!:any[];
  allhotelData:any;
  ownerDetails:boolean=false;
  ownerName:any;
  showTable:boolean=false;
 ownerAllData:any
 id:any;
 recordById:any;
 searchText:any;
 updatedUrl:any
  tableHeadings=[ "Hotel Image","Hotel Name" ,"Hotel Address","Hotel Number","Hotel Menu","Rooms","Edit","Delete"];
  constructor(private router:Router,private apiCallService:ApiCallService){}

  ngOnInit(){
   this.ownerName=this.apiCallService.ownerName

    }

  
   
 async HotelList(){
  this.ownerData=[];
 this.allhotelData=await this.apiCallService.getApiCall("hotelDetails").toPromise();
  console.log('hotel Details data',this.allhotelData);
   this.getownerdata()
  }

  getownerdata(){
    this.allhotelData.forEach((itme:any)=>{
      if(itme.ownerName==this.ownerName){
        // this.updatedUrl=itme.ImageUrl.slice(12)
        // console.log("upated Url",this.updatedUrl);
        
        this.ownerData.push(itme);
       
      } 

      
  })
  // let imageUrl=this.ownerData.slice()
    if(this.ownerData.length>0){
      this.showTable=true;
    }
    console.log("owner data:",this.ownerData);
   
  }

  edit(id:any){
let recordById:any=[];
this.ownerData.forEach((itme:any)=>{
  if(itme.id==id){
    recordById.push(itme)
  }
})
console.log("Edited Itme",recordById);
this.apiCallService.id=id;
this.apiCallService.recordById=recordById;
this.router.navigateByUrl("/ownerMod/ownerNewHote")
  }

  delete(id:any){
  this.apiCallService.deleteApiCall("hotelDetails",id).subscribe(res=>{
    this.HotelList()
  })
  }

  newRecord(){
    this.apiCallService.newrecord=true
  }
}
