import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
 
  constructor(private router:Router){}
  home(){
    this.router.navigateByUrl('home')
  }
  addCircle(){
    this.router.navigateByUrl('circle')
  }
  
  test(){
    this.router.navigateByUrl('test');
  }
  admin(){
    this.router.navigateByUrl("admin/adminCoponent")
  }
  
}

