import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { weatherData, Coord } from '../../../interfaces/weather.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private http = inject(HttpClient)
  private  baseUrl = `${environment.openWeather.baseUrl}weather`
  private  key = `${environment.openWeather.key}`

  public getWeatherData(city:string):Observable<weatherData> {
    const params = new HttpParams()
    .set('q', city)

    return this.http.get<weatherData>(`${this.baseUrl}`, {params})
  }

  public getWeatherByCoord(coord:Coord): Observable<weatherData> {
    const params = new HttpParams()
      .set('lat', coord.latitude)
      .set('lon', coord.longitude)

    return this.http.get<weatherData>(`${this.baseUrl}`, {params})
  }



}
