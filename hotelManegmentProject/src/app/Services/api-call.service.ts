import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  url = "http://localhost:3000";
  ownerName:any;
  id:any;
 recordById:any;
 userName:any;
  constructor( private httpclint:HttpClient) { }

  postApiCall(endPoint:any ,formData:any){
    let url = this.url + '/' + endPoint;
     return this.httpclint.post(url,formData);
  }

  getApiCall(endPoint:any){
    let url = this.url + "/" + endPoint;
     return this.httpclint.get(url)
  }

  updateApiCall(id:any,data:any){
    let url="http://localhost:3000/hotelDetails"
    let urlof=url + "/" + id;
  return  this.httpclint.patch(urlof,data);
  }

  deleteApiCall(endPoint:any,id:any ){
    let url=this.url +"/" + endPoint + "/" + id
    return this.httpclint.delete(url)
}
}