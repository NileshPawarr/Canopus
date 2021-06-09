import { Component, ViewChildren, QueryList } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { TourPage } from '../tours/tour';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChildren(Slides) slides: QueryList<Slides>;

  private topSlides: any[] = [];
  private tours: any[] = [];

  constructor(public navCtrl: NavController, private restProvider: RestProvider) {
  }

  ngOnInit() {
    this.getAPIData();


    this.topSlides = [
      {
        img: 'bali_new.jpg'
      },
      {
        img: 'austria_new.jpg'
      },
      {
        img: 'singapore_new.jpg'
      }
    ];

  }
  getAPIData() {
   
    this.restProvider.getEducationalInternational().then(data => {
      this.restProvider.educationalInternational = data;
    });
    this.restProvider.getTours().then(data => {
      this.restProvider.tours = data;
      this.tours = this.restProvider.tours.tours;
    });

   
  }

  goToPage(tour) {
    this.navCtrl.push(TourPage, { tour: tour });
  }

  slideChanged() {
    // let currentIndex = this.slides.getActiveIndex();
  }

  nextSlide(index) {
    this.slides.toArray()[index].slideNext();
  }

  prevSlide(index) {
    this.slides.toArray()[index].slidePrev();
  }
  bottomSlideChanged() {
    console.log('bottom');
  }

}
