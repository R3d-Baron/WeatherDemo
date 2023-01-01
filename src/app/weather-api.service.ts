import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherApiService {

  // Dependancy Injection for HttpClient Class => HttpClientModule
  constructor(private http:HttpClient) { }

  // Getting all data source from the API
  getAllData(dynamicCity:string){

    return this.http.get(`https://weatherdbi.herokuapp.com/data/weather/${dynamicCity}`);
  }
}
