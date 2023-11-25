import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  url="  http://localhost:3000/hotelBooking"
  constructor( private httpclint:HttpClient) { }

  postApiCall(formData:any){
     return this.httpclint.post(this.url,formData);
  }
}
