import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PackagePage } from '../package/package';
import { EnquiryPage } from '../enquiry/enquiry';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'tourInfo-list',
  templateUrl: 'tourInfo.html'
})
export class TourInfoPage {
  public pageTitle: '';
  selectedTab: number = 0;
  topSlides: any = [];
  tourInfoTabs: any = [];
  tours: any = [];
  packages: any = [];

  constructor(public navCtrl: NavController, public params: NavParams, private restProvider: RestProvider) {

  }

  ngOnInit() {
    this.pageTitle = this.params.data.tour.name;
    this.selectedTab = 0;
    this.tourInfoTabs = [
      {
        title: 'Itinerary'
      },
      {
        title: 'Highlights'
      }
    ];

    this.topSlides = [
      {
        img: 'bali.jpg'
      },
      {
        img: 'austria.jpg'
      },
      {
        img: 'singapore.jpg'
      }
    ];
    
    this.packages = this.restProvider['itinerary'].filter(pck => pck.locationId.indexOf(this.params.data.tour.locationId) > -1);
  }

  goBack() {
    this.navCtrl.pop();
  }

  slideChanged() {
    // let currentIndex = this.slides.getActiveIndex();
  }

  goToPackageDetails(destinationId) {
    this.navCtrl.push(PackagePage, {
      destinationId: destinationId
    });
  }

  openEnquiryForm() {
    this.navCtrl.push(EnquiryPage, {
      title: 'Package1'
    });
  }

  setSelectedTab(index, tab) {
    this.selectedTab = index;
    this.pageTitle = tab.title;
  }
}
