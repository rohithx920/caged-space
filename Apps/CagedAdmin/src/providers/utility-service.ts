import { Injectable } from '@angular/core';
import { LoadingController, Loading, AlertController } from 'ionic-angular';

@Injectable()
export class UtilityService {

  private _spinner: Loading;

  constructor(private _loadingCtrl: LoadingController, private _alertCtrl: AlertController) { }

  // Common method for displaying 'loading' spinners.
  public StartSpinner(message: string) {

    this._spinner = this._loadingCtrl.create({
      content: message
    });

    this._spinner.present();

  }

  // Dismisses 'loading' spinner.
  public StopSpinner() {

    if (this._spinner) {

      this._spinner.dismiss();

    }

  }

  // Display simple alert.
  public ShowAlert(alertTitle: string, alertMessage: string) {

    let alert = this._alertCtrl.create({
      title: alertTitle,
      message: alertMessage,
      buttons: ['OK']
    });

    alert.present();

  }

}