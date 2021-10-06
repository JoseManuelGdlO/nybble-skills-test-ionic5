import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-results',
  templateUrl: 'results.html',
  styleUrls: ['results.scss']
})
export class ResultsPage implements OnInit {

  taxes = [];

  totalNet = 0;
  totalTax = 0;
  total = 0;

  constructor(
    public router: Router,
    public dataProvider: DataService
    ) {
  }

  ngOnInit(): void {
    for(const tax of this.dataProvider.taxes) {
      this.totalNet = (parseInt(tax.net, 10) + this.totalNet);
      this.totalTax = (parseInt(tax.tax, 10) + this.totalTax);
      this.total = (parseInt(tax.total, 10) + this.total);
    }
  }

  delete() {
    this.dataProvider.taxes = [];
    this.router.navigateByUrl('');
  }

}
