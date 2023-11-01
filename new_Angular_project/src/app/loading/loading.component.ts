import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  InputName:any;



constructor(private router:Router ,private dataService:DataService){}



principleMod(){
  // set the service data
 this.dataService.serviceEnterName =this.InputName;
  this.router.navigateByUrl('principle/PrinceHome')
}
}
