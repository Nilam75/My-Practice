import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherAppService {
  apiKey = 'https://api.openweathermap.org/data/2.5/weather?q=';
  apiUrl = '&appid=d85d6b62cd5b3d11e07f09beffd5f12b&units=metric';
  constructor(private httpclint:HttpClient) { }

getdata(city:any){
let url=this.apiKey + city + this.apiUrl
return this.httpclint.get( url)
}
 
}
