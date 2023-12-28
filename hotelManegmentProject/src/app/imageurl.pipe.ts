import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageurl'
})
export class ImageurlPipe implements PipeTransform {

  transform(value: any): any {

    console.log("imageUrl");
    if(value){
      console.log("value of ",value);
      
      let url=value.slice(12);
      console.log("updated url",url);
      return url
    }
   
    
  }

}
