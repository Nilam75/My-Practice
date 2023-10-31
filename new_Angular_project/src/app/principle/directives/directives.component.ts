import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  showAdres = false;
  city = false;
  showTable:boolean=false;
  color ="yellow";
  toCars=['Audi','Swift','jagwar','Alto'];
  student=[
    { name:'Nilam',age:'30Y',city:'Pune'},
    { name:'VAibhav',age:'31Y',city:'Pune'},
    { name:'Neev',age:'4Y',city:'Pune'}
  ];
  tableHeding=["name","age",'city'];
  inputValue:any;
  isNumber:any=50;
  rating:any=4
  constructor() { }


  showAddress() {
   // this.showAdres = true; only show on click button.
   //we want to show and hide the data on click button it is possible to toggel effect
   this.showAdres=!this.showAdres;
  }

  showCity() {
    // this.city = true;
    this.city=!this.city;
  }

  shotable(){
    this.showTable=!this.showTable
  }

  inputBox(){
    console.log("inpute val",this.inputValue);
    
  }

  getCss() {
    return 'yellow';
    
  }

}