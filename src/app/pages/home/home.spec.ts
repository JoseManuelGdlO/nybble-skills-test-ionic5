import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { ResultsPage } from '../results/results';
import { HomePage } from './home';
import { RouterTestingModule } from '@angular/router/testing';
import { WeatherService } from 'src/app/services/weather-service/weather-service';
import { DataService } from 'src/app/services/data/data.service';
import { ToastController } from '@ionic/angular';


describe('HomePage', () => {

  beforeEach(waitForAsync(() => {

    const weatherServiceSpy = () => ({getWeather: () => ({})});
    const dataServiceSpy = () => ({taxes: []});
    const toastControllerSpy = () => ({create: (message, duration) => ({
      present: () => ({})
    })});

    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        RouterTestingModule.withRoutes(
          [{path: 'home', component: HomePage},
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
    const fixture = TestBed.createComponent(HomePage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('ngOnInit', () => {
    const fixture = TestBed.createComponent(HomePage);
    const component = fixture.componentInstance;

    const bodyReturn = [{
      // eslint-disable-next-line @typescript-eslint/naming-convention
      dt_txt: '12:00:00',
      main : {
        feels_like: '',
        temp: '',
        temp_max: '',
        temp_min: ''}
  }];

    spyOn(component.weatherService, 'getWeather').and.returnValue(Promise.resolve(bodyReturn));
    component.ngOnInit();
    expect(component.whater.length).toEqual(0);
  });

  it('calculate empty inputs', () => {
    const fixture = TestBed.createComponent(HomePage);
    const component = fixture.componentInstance;
    component.calculate();
    expect(component.inputTotal.length).toEqual(0);
  });

  it('calculate', () => {
    const fixture = TestBed.createComponent(HomePage);
    const component = fixture.componentInstance;

    component.inputNet = '1000';
    component.inputInoviceNumber = '58454';
    component.selectTax = '10';
    component.calculate();
    expect(component.inputTotal).toEqual('1100');
  });

  it('clear', () => {
    const fixture = TestBed.createComponent(HomePage);
    const component = fixture.componentInstance;

    component.inputNet = '1000';
    component.inputInoviceNumber = '58454';
    component.selectTax = '10';
    component.clearTax();
    expect(component.inputTotal).toEqual('');
  });

  it('addTax', () => {
    const fixture = TestBed.createComponent(HomePage);
    const component = fixture.componentInstance;

    component.inputNet = '1000';
    component.inputInoviceNumber = '58454';
    component.selectTax = '10';
    component.addTax();
    expect(component.inputTotal).toEqual('');
  });

  it('addTax empty inputs', () => {
    const fixture = TestBed.createComponent(HomePage);
    const component = fixture.componentInstance;
    component.addTax();
    expect(component.inputTotal.length).toEqual(0);
  });

  it('removeTax', () => {
    const fixture = TestBed.createComponent(HomePage);
    const component = fixture.componentInstance;
    component.dataService.taxes = [{test:'test'}];
    component.removeTax(0);
    expect(component.dataService.taxes.length).toEqual(0);
  });

  it('goToResults', () => {
    const fixture = TestBed.createComponent(HomePage);
    const component = fixture.componentInstance;
    component.goToResults();
    expect(component.inputTotal.length).toEqual(0);
  });

});

