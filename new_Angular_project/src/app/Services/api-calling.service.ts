import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallingService {
  
  url="  http://localhost:3000/principle"
  constructor(private httpclient:HttpClient) { }

  postApiCall(formData:any){
   return this.httpclient.post(this.url,formData);

  }

  getapicall(id ?:any){
    let url=id ? this.url + "/" + id :this.url;
    return this.httpclient.get(url);
  }

  deleteApiCall(id: number) {
   let url= id ? this.url + "/" + id :this.url
   return this.httpclient.delete(url);
  }

  putApiCall(id:any,data:any) {
    let url = this.url + "/" + id ;
     return this.httpclient.put(url,data)
  }
}
