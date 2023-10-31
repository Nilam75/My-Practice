import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-principl-suceess',
  templateUrl: './principl-suceess.component.html',
  styleUrls: ['./principl-suceess.component.scss']
})
export class PrinciplSuceessComponent {
  
  name:any;
  constructor(public dataservice:DataService){}

  ngOnInit(){
    this.name=this.dataservice.formdataTransper;
  }
}
