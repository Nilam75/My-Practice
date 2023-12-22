import { Component } from '@angular/core';
import { WeatherAppService } from '../weather-app.service';

@Component({
  selector: 'app-main-data',
  templateUrl: './main-data.component.html',
  styleUrls: ['./main-data.component.scss']
})
export class MainDataComponent {
  city: string = '';
 weatherData:any=[]
 heading=["City Name","Tempreture" ,"Min Tempreture ","Max Tempreture ","Pressure","Humidity","Wind Speed","Country"]
  constructor(private weatherAppService:WeatherAppService){}

  ngOnInit(){
    this.getdata();
  }


  getdata(){
 
  this.weatherAppService.getdata(this.city).subscribe(res=>{
  this.weatherData=res;
  console.log(" datadata",this.weatherData);
  
 
  })
  }

  getWetherData(){
    
    if (this.city) {
      console.log("city name",this.city);
    this.getdata();
  } else {
      alert("please Enter the city name.......!")
  }
    
  }
}
