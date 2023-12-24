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
  newrecord: boolean=false;
  constructor( private httpclint:HttpClient) { }

  postApiCall(endPoint:any ,formData:any){
    let url = this.url + '/' + endPoint;
     return this.httpclint.post(url,formData);
  }

  getApiCall(endPoint:any){
    let url = this.url + "/" + endPoint;
     return this.httpclint.get(url)
  }

  updateApiCall(endpoint:any,id:any,data:any){
    let url=this.url + "/"+ endpoint + "/" + id;
  return  this.httpclint.patch(url,data);
  }

  deleteApiCall(endPoint:any,id:any ){
    let url=this.url +"/" + endPoint + "/" + id
    return this.httpclint.delete(url)
}

forgatApi(url:any,data:any){
  return this.httpclint.patch(url,data)
  
}
}