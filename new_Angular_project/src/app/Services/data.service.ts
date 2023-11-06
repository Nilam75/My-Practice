import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
formdataTransper:any;
sinUpData:any;
serviceEnterName:any;
city=new Subject<string>();
username=new Subject<string>();
  constructor() { }


   //services: : ng g s serviceName
   //services are used to share data amoung compo's,also, 
   //to write reusable code with a focused purpose, to use across multiple components in your application.
  //We can reuse the service at many places.


  logicOfCustomVal(customValue:any){
    let resvalue=customValue.value ? customValue.value.trim() == 0 :null;
     return resvalue ?{'whiteSpece':true} :null;
    // this.dataservice.sinUpData=this.customValue.customVal
  }

}
