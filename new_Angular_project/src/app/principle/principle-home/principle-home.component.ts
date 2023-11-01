import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-principle-home',
  templateUrl: './principle-home.component.html',
  styleUrls: ['./principle-home.component.scss']
})
export class PrincipleHomeComponent {
  getName: any;

  constructor(private router: Router,private  dataService:DataService  ) { };

  ngOnInit(){
    this.getName=this.dataService.serviceEnterName;
  }

  princeLogin() {
    this.router.navigateByUrl('principle/principleLogin')
  }
  princeSingUp() {
    this.router.navigateByUrl('principle/principleSingUp')
  }
}
