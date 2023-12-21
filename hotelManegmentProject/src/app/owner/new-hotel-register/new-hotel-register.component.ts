import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/Services/api-call.service';
import { SanckBarComponent } from 'src/app/sanck-bar/sanck-bar.component';

@Component({
  selector: 'app-new-hotel-register',
  templateUrl: './new-hotel-register.component.html',
  styleUrls: ['./new-hotel-register.component.scss']
})
export class NewHotelRegisterComponent {
  newHoteRegister!: FormGroup
  showpass: boolean = false;
  endPoint: string = "hotelDetails"
  id: any;
  recordById: any;
  alrtMseege:any;
  durationInSeconds=5
  newRecord:any;
  constructor(private fb: FormBuilder, private apiCallService: ApiCallService,
             private router: Router,  private matSnackBar:MatSnackBar) { }
  ngOnInit() {
    this.id = this.apiCallService.id;
    this.recordById = this.apiCallService.recordById

    console.log(this.id, this.recordById);
    this.newRecord=this.apiCallService.newrecord
    this.formDetails()
  }

  formDetails() {
    this.newHoteRegister = this.fb.group({
      ownerName: [this.recordById ? this.recordById[0]?.ownerName : '', Validators.required],
      mobileNumber: [this.recordById ? this.recordById[0]?.mobileNumber : '', [Validators.required, Validators.pattern('[0-9+]*')]],
      hotelName: [this.recordById ? this.recordById[0]?.hotelName : '', Validators.required],
      hotelAdress: [this.recordById ? this.recordById[0]?.hotelAdress : '', Validators.required],
      hotelNumber: [this.recordById ? this.recordById[0]?.hotelNumber : '', [Validators.required, Validators.pattern('[0-9+]*')]],
      hotelMenu: [this.recordById ? this.recordById[0]?.hotelMenu : '', Validators.required],
      rooms: [this.recordById ? this.recordById[0]?.rooms : '', Validators.required],

      pass: [this.recordById ? this.recordById[0]?.pass : '', [Validators.required, Validators.minLength(8)]],
      checkBox: [this.recordById ? this.recordById[0]?.checkBox : '', Validators.required]
    })
  }

  showHidePass() {
    this.showpass = !this.showpass;
  }

  submit() {
    console.log(this.newHoteRegister.value);
    this.apiCallService.postApiCall(this.endPoint, this.newHoteRegister.value).subscribe(res => {
      console.log("responce::>>", res);
      this.matSnackBar.openFromComponent(SanckBarComponent,{
        duration: this.durationInSeconds * 1000,
        verticalPosition: 'top',
        panelClass: ['positioned-snackbar']

      })
    })
    this.router.navigateByUrl('ownerMod/ownerSucces')
  }



  apdate(){
    this.apiCallService.updateApiCall("hotelDetails",this.id, this.newHoteRegister.value).subscribe(res=>{
      console.log("record update ::",res);
      this.matSnackBar.openFromComponent(SanckBarComponent,{
        duration: this.durationInSeconds * 10000,
        verticalPosition: 'top',
        panelClass: ['positioned-snackbar']

      })
  
      this.router.navigateByUrl("ownerMod/ownerSucces")

   
      
    })
 
      // alert("Record Updated Sucessfully.........")

     
  }

  ngOnDestroy(){
    this.apiCallService.newrecord=false
    this.apiCallService.recordById=[]
  }
}