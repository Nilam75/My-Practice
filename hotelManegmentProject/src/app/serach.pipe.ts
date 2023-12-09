import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serach'
})
export class SerachPipe implements PipeTransform {

  transform(tableData:any, searchText:any): any {
    console.log("pipe detected");
    let text=searchText?.toLowerCase();
    if(!searchText){
      return tableData;
    }
    if(searchText){
    return  tableData.filter((item:any)=>{
      return  JSON.stringify(item).toLowerCase().includes(text)


      })
    }
  
  }

}
