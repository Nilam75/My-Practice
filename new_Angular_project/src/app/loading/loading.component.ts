import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';
import { ApiCallingService } from '../Services/api-calling.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  InputName: any;
  formData: any;

  id: any


  constructor(private router: Router, private dataService: DataService
    , private apiCallingService: ApiCallingService) { }



  principleMod() {
    // set the service data
    this.dataService.serviceEnterName = this.InputName;
    this.router.navigateByUrl('principle/PrinceHome')
  }

  sujectData() {
    this.router.navigateByUrl('subject/subLand')
  }

  getApi() {
    this.apiCallingService.getapicall().subscribe(ress => {
      this.formData = ress;
      console.log("form data:", ress);

    })
  }

  deleteApi() {
    let id = 2;
    this.apiCallingService.deleteApiCall(id).subscribe(ress => {
      console.log("record deleted", ress);

    })
  }

  async putApi() {
    let id = 6;
    // this.apiCallingService.getapicall(id).subscribe(res => {
    //   console.log("record of update", res);
    //   this.dataService.dataToUpdate = res;
    //   this.dataService.idToUpdate = id;

    // })
    this.dataService.dataToUpdate = await this.apiCallingService.getapicall(id).toPromise()
     this.dataService.idToUpdate = id;
    this.router.navigateByUrl('/principle/principleSingUp')
  }
}
