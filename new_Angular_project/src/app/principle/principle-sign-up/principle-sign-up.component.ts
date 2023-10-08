import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-principle-sign-up',
  templateUrl: './principle-sign-up.component.html',
  styleUrls: ['./principle-sign-up.component.scss']
})
export class PrincipleSignUpComponent {
  SinUpForm!:FormGroup;

  constructor(public fb:FormBuilder){}

  ngOnInit(){
    this.formDetails();
  }

  formDetails(){
    this.SinUpForm=this.fb.group({
      userName:['',[Validators .maxLength(10)]],
      emailId:[]
    })
  }

  button(){
    console.log('form Data',this.SinUpForm.value);
    
  }
}

