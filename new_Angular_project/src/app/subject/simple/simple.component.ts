import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent {
 namee:any
  constructor(private dataservice:DataService ){}
  ngOnInit(){
    this.dataservice.username.subscribe(name=>{
      this.namee=name;
    })
  }
}
