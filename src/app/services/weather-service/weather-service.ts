import { Injectable } from '@angular/core';
import { HttpService } from '../http/http-service';
//import { Geolocation, Position } from '@capacitor/geolocation';

const API_KEY = 'f253dc5f280232e043b75cfdca10a340';

/*
  Generated class for the WeatherServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherService {

  constructor(
    public httpConnectionService: HttpService
  ) {
  }

  async getWeather() {
    // const coordinates: Position = await Geolocation.getCurrentPosition();
    // console.log('Current position:', coordinates);

    // const url =
    //   `http://api.openweathermap.org/data/2.5/forecast?lat=$
    // {coordinates.coords.latitude}&lon=${coordinates.coords.longitude}&appid=${API_KEY}&lang=es&units=metric`;

      const url =
      `http://api.openweathermap.org/data/2.5/forecast?q=Durango&appid=${API_KEY}&lang=es&units=metric`;

    try {
      const response: any = await this.httpConnectionService.getMethod(url);
      console.log(response);

      return response.list;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

}
