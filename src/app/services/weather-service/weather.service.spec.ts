import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { WeatherService } from './weather-service';
import { HttpService } from '../http/http-service';

describe('WeatherService', () => {

  const httpSpy = () => ({getMethod: (url) => {Promise.resolve({});}});

  beforeEach(() => TestBed.configureTestingModule({
    imports : [HttpClientTestingModule],
    providers: [
      WeatherService,
      { provide: HttpService, useFactory: httpSpy }
    ]
  }));

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });

  it('getWheater', async () => {
    const service: WeatherService = TestBed.get(WeatherService);

    const bodyReturn = new Observable(() => {});
    spyOn(service.httpConnectionService, 'getMethod').and.returnValue(Promise.resolve({}));
    service.getWeather();
    expect(service).toBeTruthy();
  });

  it('getWheater fail', async () => {
    const service: WeatherService = TestBed.get(WeatherService);

    const bodyReturn = new Observable(() => {});
    spyOn(service.httpConnectionService, 'getMethod').and.returnValue(Promise.reject({}));
    service.getWeather();
    expect(service).toBeTruthy();
  });
});
