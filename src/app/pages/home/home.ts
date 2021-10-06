import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data/data.service';
import { WeatherService } from 'src/app/services/weather-service/weather-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.html',
  styleUrls: ['home.scss']
})
export class HomePage implements OnInit {

  whater = [];
  taxes = [];

  inputInoviceNumber = '';
  inputNet = '';
  inputTotal = '';
  selectTax = '-1';
  taxToAadd = '';

  constructor(
    public router: Router,
    public weatherService: WeatherService,
    public toastController: ToastController,
    public dataService: DataService
    ) {

  }
  ngOnInit(): void {
    this.getWhaterTime();
  }

  async getWhaterTime() {
    const response = await this.weatherService.getWeather();
    const weathers = response.filter(element => element.dt_txt.includes('12:00:00'));

    for(const wather of weathers) {
      this.whater.push(
        { day: wather.dt_txt,
          feel: wather.main.feels_like,
          temp: wather.main.temp,
          max: wather.main.temp_max,
          min: wather.main.temp_min });
    }
  }

  calculate(){

    if(!this.checkInputs()) {
      this.inputTotal = '';
      return;
    }

    const net = parseInt(this.inputNet, 10);
    const tax = parseInt(this.selectTax, 10);

    let result = 1 + tax / 100;
    result = net * result;

    result = Math.round((result) * 100) / 100;

    this.inputTotal = result.toString();

    this.taxToAadd = (result - net).toString();

  }


  checkInputs(): boolean {
    if(this.inputInoviceNumber.length === 0 ||
      this.inputNet.length === 0 ||
      this.selectTax === '-1') {
      return false;
    }

    return true;
  }

  addTax() {
    if(!this.checkInputs()) {
      this.presentToast('Fill all inputs');
      return;
    }

    this.dataService.taxes.push(
      { invoiceNumber: this.inputInoviceNumber,
        net: this.inputNet,
        taxPersent: this.selectTax,
        tax: this.taxToAadd,
        total: this.inputTotal
      } );
      this.clearTax();
  }

  clearTax() {
    this.inputInoviceNumber = '';
    this.inputNet = '';
    this.selectTax = '-1';
    this.inputTotal = '';
  }

  removeTax(index) {
    this.dataService.taxes.splice(index, 1);
  }

  goToResults() {
    this.router.navigateByUrl('results');
  }


  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }


}
