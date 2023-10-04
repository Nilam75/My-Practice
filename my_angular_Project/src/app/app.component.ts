import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
 //when radio botton use the event
 genderF='female';
 genderM='male';

 paying='criket';
 reading='story book';
 hobbiesArry:string[]=[];
 sudentName:any='nilam'

 num1:number=30;
 num2:number=40;
 result?:number;

 
  constructor(private router:Router){}    //to inject dependancies
  
//life cycle hooks 

//functions

//string interpolation: one way data binding technique: .ts to dom/html/template

learningInterpolation(){
  //return 'patil';
  return this.city2;
  
}

 //it make must be optional(?)
 gen(data?:any){
  console.log(data?.target.value);
   }
//when we use the checkbox to event

hobbies(event:any){
  console.log(event.target.value);
  //when we poot the all hobise in array use the this keyWord
  this.hobbiesArry.push(event.target.value);
  console.log(this.hobbiesArry);
  //when we want to acess the function.there are the argument and we not have requrment of that argument 
  //it make must be optional(?)
  this.gen();
 }

//  event binding
submit(event:any){
  console.log(event);
  
}

adition(){
  this.result = this.num1 + this.num2;
  //console.log(this.result);
  
  
}
}
