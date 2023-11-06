import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  name:any;
dataOffChild:any
colr=["red","black","green"];
sudentdatachild:any;

constructor(private dataServiec:DataService){}

  dataFormChild(event:any){
    console.log(event);
    this.dataOffChild=event;
  }

  studentData(stud:any){
    console.log(stud);
    this.sudentdatachild=stud;
  }

  subjectBtm(){
    this.dataServiec.city.next("Pune")
  }
}
