import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { ResultsPage } from './results';
import { RouterTestingModule } from '@angular/router/testing';
import { WeatherService } from 'src/app/services/weather-service/weather-service';
import { Observable, of } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';
import { ToastController } from '@ionic/angular';


describe('resultsPage', () => {

  beforeEach(waitForAsync(() => {

    const weatherServiceSpy = () => ({getWeather: () => ({})});
    const dataServiceSpy = () => ({taxes: [{net: '10', tax: '10', total: '10'}]});
    const toastControllerSpy = () => ({create: (message, duration) => ({
      present: () => ({})
    })});

    TestBed.configureTestingModule({
      declarations: [ResultsPage],
      imports: [
        RouterTestingModule.withRoutes(
          [{path: 'home', component: ResultsPage},
          {path: 'results', component: ResultsPage}])
      ],
      providers: [
        { provide: WeatherService, useFactory: weatherServiceSpy },
        { provide: DataService, useFactory: dataServiceSpy },
        { provide: ToastController, useFactory: toastControllerSpy }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ResultsPage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('ngOnInit', () => {
    const fixture = TestBed.createComponent(ResultsPage);
    const component = fixture.componentInstance;
    component.ngOnInit();
    expect(component.total).toEqual(10);
  });

  it('delete', () => {
    const fixture = TestBed.createComponent(ResultsPage);
    const component = fixture.componentInstance;
    component.delete();
    expect(component.total).toEqual(0);
  });

});

