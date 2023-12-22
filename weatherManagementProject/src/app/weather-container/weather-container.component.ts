import { Component } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss']
})
export class WeatherContainerComponent {
city:string= " pune"
weatherData: any = {}; 
showhid:boolean=false;
// heading=["City Name","Tempreture" ,"Min Tempreture ","Max Tempreture ","Pressure","Humidity","Wind Speed","Country"]

constructor(private weatherApiService:WeatherApiService){}
// ngOnInit(){
//   this.getdata();
// }

getdata(){

}

fetchdata(city:string){
 // const city = event.target.value
 var cityName=city.toUpperCase()
  console.log("cityName",cityName);
  
  this.weatherApiService.getApiData(cityName).subscribe(res=>{
    this.weatherData=res;
    console.log("weather data",this.weatherData);
   
  })
  if(this.weatherData){
    this.showhid=true
  }
}


}
