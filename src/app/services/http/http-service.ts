import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicesHttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpService {

  constructor(public http: HttpClient) {
  }

  getMethod(url: string){

    return new Promise ( (resolve, reject) => {
      this.http.get(url).subscribe( response => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }

  deleteMethod(url: string){
    return new Promise ( (resolve, reject) => {
      this.http.delete(url).subscribe( response => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }

  postMethod(url: string, body = {}){
    return new Promise ( (resolve, reject) => {
      this.http.post(url, body).subscribe( response => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }

}
