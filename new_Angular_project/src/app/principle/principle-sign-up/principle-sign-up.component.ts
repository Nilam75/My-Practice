import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallingService } from 'src/app/Services/api-calling.service';
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
recordToUpdate:any;
id:any;
  constructor(public fb:FormBuilder,private router:Router ,
              private dataService:DataService,private apiCallingService:ApiCallingService){}

  ngOnInit(){
    this.recordToUpdate=this.dataService.dataToUpdate;
    this.id=this.dataService.idToUpdate;
    console.log("data to ubdate Come::--",this.recordToUpdate);
    
    this.formDetails();
  }

  formDetails(){
    this.SinUpForm=this.fb.group({
      userName:[this.recordToUpdate ? this.recordToUpdate.userName :'',[Validators.maxLength(10),Validators.minLength(5),Validators.pattern('[a-zA-Z ]+')]],
      // ['poonam',[Validators.maxLength(10)]],
      mobNo:[this.recordToUpdate ? this.recordToUpdate.mobNo :'',[Validators.pattern('[0-9+]*')]],
      emailId:[this.recordToUpdate ? this.recordToUpdate.emailId :'',[Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      hobies:[this.recordToUpdate ? this.recordToUpdate.hobies:'',[Validators.requiredTrue]],
      password:[this.recordToUpdate ? this.recordToUpdate.password: false,Validators.required],
      gender:[this.recordToUpdate ? this.recordToUpdate.gender:''],
      dob:[this.recordToUpdate ? this.recordToUpdate.dob:'',Validators.pattern(this.datePattern)],
      cars:[this.recordToUpdate ? this.recordToUpdate.cars:""],
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




  submit(){
    let gender=this.SinUpForm.value.gender;
    if(gender){
      console.log('form Data',this.SinUpForm.value);
      this.apiCallingService.postApiCall(this.SinUpForm.value).subscribe(res=>{
        console.log("responce::>>",res);
        if(res){
          alert('Data submitted Successfuly...!!');
          this.router.navigateByUrl('/PrincipleMod/PrincipalSuccess');
        }
      })
    
    }
    else{
      this.isGenderSelected=true
            return
    }
    
  }
  update(){
    this.apiCallingService.putApiCall(this.id, this.SinUpForm.value).subscribe(res=>{
      console.log(res);
    })
    alert('Data updated Successfuly...!!');
    this.router.navigateByUrl('/PrincipleMod/PrincipalSuccess');
  }

    
  }


