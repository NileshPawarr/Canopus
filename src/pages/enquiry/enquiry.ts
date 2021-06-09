import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'enquiry-list',
  templateUrl: 'enquiry.html'
})
export class EnquiryPage {
  public pageTitle: '';
  public event = {
    month: '',
    timeStarts: '',
    timeEnds: ''
  }
  private enquiryForm: FormGroup;

  constructor(public navCtrl: NavController, public params: NavParams, private formBuilder: FormBuilder) {
    this.enquiryForm = this.formBuilder.group({
      name: ['', Validators.required],
      phnNum: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }


  ngOnInit() {
    this.pageTitle = this.params.data;
  }
}