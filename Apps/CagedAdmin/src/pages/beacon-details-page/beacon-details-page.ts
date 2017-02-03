import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-beacon-details',
  templateUrl: 'beacon-details-page.html'
})
export class BeaconDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeaconDetailsPage');
  }

}
