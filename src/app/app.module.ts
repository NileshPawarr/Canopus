import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TourPage } from '../pages/tours/tour';
import { TourInfoPage } from '../pages/tourInfo/tourInfo';
import { PackagePage } from '../pages/package/package';
import { EnquiryPage } from '../pages/enquiry/enquiry';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ContactUs } from '../pages/contactUs/contactUs';
import { AboutUs } from '../pages/about-us/about-us';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TourPage,
    TourInfoPage,
    PackagePage,
    EnquiryPage,
    ContactUs,
    AboutUs
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TourPage,
    TourInfoPage,
    PackagePage,
    EnquiryPage,
    ContactUs,
    AboutUs
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider
  ]
})
export class AppModule { }