import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-child-data',
  templateUrl: './child-data.component.html',
  styleUrls: ['./child-data.component.scss']
})
export class ChildDataComponent {
  nameof:any;
  viwchidData:any;
  constructor(private dataservice:DataService){}
  ngOnInit(){
    this.dataservice.username.subscribe(name=>{
      this.nameof=name
    })
  }

}
