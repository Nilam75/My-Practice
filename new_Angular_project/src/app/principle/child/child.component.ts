import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() dataFromParent: any

  @Output() childData = new EventEmitter<any>();
  @Input() colorFromparent: any;
  @Output() studentEvent = new EventEmitter<any>()
  sudent = {
    name: "name",
    age: 30,
    cit: "pune"
  };
  data: any;
  city:any;
constructor(private dataService:DataService){}

ngOnInit(){
  this.dataService.city.subscribe(cityname=>{
this.city=cityname
  })
}




  submit() {
    this.childData.emit(this.data);
    this.studentEvent.emit(this.sudent)
  }
}
