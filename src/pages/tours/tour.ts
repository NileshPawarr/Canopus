import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { TourInfoPage } from '../tourInfo/tourInfo';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'tours-list',
  templateUrl: 'tour.html'
})
export class TourPage {
  public pageTitle: '';
  selectedTab: number = 0;
  tourTabs: any = [];
  selectedTours: any = [];
  locationsList: any = [];

  constructor(public navCtrl: NavController, public params: NavParams, private loadingCtrl: LoadingController, private restProvider: RestProvider) {

  }

  ngOnInit() {
    this.pageTitle = this.params.data.tour.state;
    this.selectedTab = parseInt(this.params.data.tour.id);
    //this.locationsList = this.restProvider.locations;

    this.tourTabs = [
      {
        title: 'International'
      },
      {
        title: 'Domestic'
      }
    ];


    //this.setTourType(this.pageTitle);
    this.setSelectedTab(0, this.tourTabs[0]);
  }

  goBack() {
    this.navCtrl.pop();
  }

  setSelectedTab(index, tab) {
    this.selectedTab = index;
    //this.pageTitle = tab.title;
    this.selectedTours = [];
    let loading = this.loadingCtrl.create({
      showBackdrop: false,
      spinner: 'crescent'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.setTourType(tab.title);
    }, 500);
  }
  setTourType(title: string) {
    switch (title) {
      case "International":
        this.selectedTours = this.restProvider.educationalInternational;
        break;

      case "Domestic":
        this.selectedTours = this.locationsList.domestic;
        break;
/* 
      case "Educational":
        this.selectedTours = this.toursEducational;
        break; */

      default:
        this.selectedTours = this.locationsList.international;
        break;
    }
  }

  goToPage(tour) {
    this.navCtrl.push(TourInfoPage, { tour: tour });
  }

}
