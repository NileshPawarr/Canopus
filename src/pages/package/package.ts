import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'package-list',
  templateUrl: 'package.html'
})
export class PackagePage {
  private pageTitle: string = '';
  private currentDestId: string = '';
  private currentItinerary: any;

  constructor(public navCtrl: NavController, public params: NavParams, private restProvider: RestProvider) {
    this.currentDestId = this.params.data.destinationId;
  }


  ngOnInit() {
    this.getDestinationItinerary();
  }

  getDestinationItinerary() {
    //this.currentItinerary = this.restProvider.itinerary.filter(a => this.currentDestId.toString() === a.packageId.toString())[0];
  }
}