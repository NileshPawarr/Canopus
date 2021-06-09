import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  educationalInternational: any;
  tours:any;

  constructor(public http: HttpClient) {

  }

  // getHighlights() {
  //   return new Promise(resolve => {
  //     this.http.get('./assets/resources/highlights.json').subscribe(data => {
  //       resolve(data);
  //     }, err => {
  //       console.log(err);
  //     });
  //   });
  // }

  getEducationalInternational() {
    return new Promise(resolve => {
      this.http.get('./assets/resources/educational_int.json').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // getLocations(){
  //   return new Promise(resolve => {
  //     this.http.get('./assets/resources/locations.json').subscribe(data => {
  //       resolve(data);
  //     }, err => {
  //       console.log(err);
  //     });
  //   });
  // }

  getTours() {
    return new Promise(resolve => {
      this.http.get('./assets/resources/tours.json').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
