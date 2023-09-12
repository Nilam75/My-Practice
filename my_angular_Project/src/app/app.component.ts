import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //class to write code here
  title = 'my_angular_Project';
  //let/var/const city = 'pune';
//any Data type: city:any 
//property
 city? : string ; //declaration of property

 city2 : string = 'pune'; //declration + def of proprty

 city3 = 'mumbai.....';
 name='nilam';
 no1 = 10;
 no2= 200;
  constructor(){}    //to inject dependancies
  
//life cycle hooks 

//functions

//string interpolation: one way data binding technique: .ts to dom/html/template

learningInterpolation(){
  //return 'patil';
  return this.city2;
  
}
}
