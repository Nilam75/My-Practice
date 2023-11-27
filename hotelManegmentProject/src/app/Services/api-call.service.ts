import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  url = "http://localhost:3000";
  constructor( private httpclint:HttpClient) { }

  postApiCall(endPoint:any ,formData:any){
    let url = this.url + '/' + endPoint;
     return this.httpclint.post(url,formData);
  }

  getApiCall(endPoint:any){
    let url = this.url + "/" + endPoint;
 return this.httpclint.get(url)
  }
}
