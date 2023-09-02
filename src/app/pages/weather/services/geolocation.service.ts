import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { weatherData, Coord } from '../../../interfaces/weather.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GeolocationService {

  public getLocation():Promise<any>{
    const options = {
      enableHightAccuracy: true,
      timeout: 3000,
      maximumAge: 0
    }

    return new Promise<any>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition( resolve, reject, options );
    })

  }



}
