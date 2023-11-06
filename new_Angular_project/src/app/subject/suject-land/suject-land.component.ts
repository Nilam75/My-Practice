import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/Services/data.service';
import { ChildDataComponent } from '../child-data/child-data.component';

@Component({
  selector: 'app-suject-land',
  templateUrl: './suject-land.component.html',
  styleUrls: ['./suject-land.component.scss']
})
export class SujectLandComponent {
  sujectland!:FormGroup;
  @ViewChild('para') parRef!:ElementRef;
  @ViewChild('ChildDataComponent') childCompRef!:ChildDataComponent
  constructor( private fb:FormBuilder ,private dataservice:DataService ){ }
  

  ngOnInit(){
    this.formDeatails();
  }

  ngAfterViewInit(){
    this.parRef.nativeElement.innerHTML='kale';
    console.log(this.parRef);
    
  }

  formDeatails(){
    this.sujectland=this.fb.group({
      name:[""]
    })
  }

  submit(){

    console.log(this.sujectland.value);
    this.dataservice.username.next(this.sujectland.value.name);//set the suject data
    
  }

  viewchildcomp(){
    this.childCompRef.viwchidData=this.sujectland.value.name
  }
}
