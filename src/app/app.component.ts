import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { weatherData } from './interfaces/weather.interface';
import { GeolocationService } from './pages/weather/services/geolocation.service';
import { WeatherService } from './pages/weather/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public weather$!: Observable<weatherData>;
  private readonly weatherService = inject(WeatherService)
  private readonly GeolocationService = inject(GeolocationService)

  public onSearch(city:string):void{
    this.weather$ = this.weatherService.getWeatherData(city)
  }

  ngOnInit(): void {
    if(navigator?.geolocation){
      this.getLocation()
    }
  }

  private async getLocation(): Promise<any>{
    try {
        const { coords } = await this.GeolocationService.getLocation()
        this.weather$ = this.weatherService.getWeatherByCoord( coords )
    } catch (err) {
        console.log(err)
    }
  }

}
