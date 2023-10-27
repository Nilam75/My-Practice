import { Component } from '@angular/core';

@Component({
  selector: 'app-principl-suceess',
  templateUrl: './principl-suceess.component.html',
  styleUrls: ['./principl-suceess.component.scss']
})
export class PrinciplSuceessComponent {
  showAdres = false;
  city = false;
  toCars=['Audi','Swift','jagwar','Alto'];
  student=[
    { name:'Nilam',age:'30Y',city:'Pune'},
    { name:'VAibhav',age:'31Y',city:'Pune'},
    { name:'Neev',age:'4Y',city:'Pune'}
  ]

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
}
