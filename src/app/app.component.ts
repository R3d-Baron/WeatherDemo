import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from './weather-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'WeatherDemo';

  public currentregion: string = '';
  public currentWeatherData: any = [];
  public nextDay: any = [];

  public dynamicCity:string = '';

  searchCity(city:any){

    this.dynamicCity = city.value.toLowerCase();
    this.populate();
  }

  constructor(private apiService: WeatherApiService){}

  populate(){

    // card where Weather Report is loaded
    let card = document.getElementById('card') as HTMLDivElement;
    card.style.display = "none";

    // div where preloader is loaded
    let element = document.getElementById('preLoader') as HTMLDivElement;
    element.innerHTML = `
      <img src='./assets/images/weather_dribbble.gif' width='400px'  height='350px'/>
    `;

    if (this.dynamicCity == '') {
      this.dynamicCity = 'kolkata'
    }
     // app component will be loaded on browser or initialized
    let data = this.apiService.getAllData(this.dynamicCity);
    console.log(data);

    data.subscribe((res : any) => {

      // Observer res -> object of observer
      console.log(res);

      let waitTime = res.length * 100; // MS

      setTimeout(() => {
        
        // hide the weather report untill fully loaded
        element.innerHTML = '';
        card.style.display = "block";

        this.currentregion = res.region;

        this.currentWeatherData = res.currentConditions;
        console.log(this.currentWeatherData);

        this.nextDay = res.next_days;
      }, waitTime);

      

    });
  }

  // app component will be loaded on browser or initialized
  ngOnInit(): void {
    
    this.populate();
  }


}
