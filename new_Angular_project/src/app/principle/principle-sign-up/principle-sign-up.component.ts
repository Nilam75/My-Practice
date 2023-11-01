import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-principle-sign-up',
  templateUrl: './principle-sign-up.component.html',
  styleUrls: ['./principle-sign-up.component.scss']
})
export class PrincipleSignUpComponent {
  SinUpForm!:FormGroup;
  age = 20;
  // todayDate = new Date();
  todayDate=new Date();
  userAge: any;
  datePattern = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
  isGenderSelected = false;
showPass=false;
  constructor(public fb:FormBuilder,private router:Router ,private dataService:DataService){}

  ngOnInit(){
    this.formDetails();
  }

  formDetails(){
    this.SinUpForm=this.fb.group({
      userName:['',[Validators.maxLength(10),Validators.minLength(5),Validators.pattern('[a-zA-Z ]+')]],
      // ['poonam',[Validators.maxLength(10)]],
      mobNo:['',[Validators.pattern('[0-9+]*')]],
      emailId:['',[Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      hobies:['',[Validators.requiredTrue]],
      password:[false,Validators.required],
      gender:[''],
      dob:['',Validators.pattern(this.datePattern)],
      cars:[],
      customVal:['',this.dataService.logicOfCustomVal],
      notOld:['',this.notAcceptOLD]
    })
  }

 
  gender(){
    this.isGenderSelected=false;
  }

  calYear(){
    
    let dobFieldValue = this.SinUpForm.value.dob;
    let todayFullYear = this.todayDate.getFullYear();
    let splitedDate = dobFieldValue?.split('/');
    let usersFullYear = splitedDate[2];
    this.userAge = todayFullYear - usersFullYear;
  }


  showPassword(){
    this.showPass=!this.showPass;
  }


  back(){
    this.router.navigateByUrl('principle/PrinceHome')
  }


 

  notAcceptOLD(enterVal:any){
    let isval=enterVal.value?.toLowerCase().split('  ');
    let isNotOld=isval.includes('old');
    return isNotOld?{ "valOld":true} :null


  }




  button(){
    let gender=this.SinUpForm.value.gender;
    if(gender){
      console.log('form Data',this.SinUpForm.value);
    }
    else{
      this.isGenderSelected=true
            return
    }
    
  }

}

