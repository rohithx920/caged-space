import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
import { UtilityService } from '../../providers/utility-service';
import { UserModel } from '../../models/user';
import { EventsPage } from '../pages/events-page/events-page';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'page-login',
  templateUrl: 'login-page.html'
})

export class LoginPage {

  loginForm: any;
  user: UserModel;
  errorMessage: string;

  constructor(private _userService: UserService, private _util: UtilityService, private _fb: FormBuilder, private _nav: NavController) {

  }

  ionViewLoaded() {

    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  // Sign in app user with email and password.
  public Login(isValid: boolean, email: string, password: string) {

    if (isValid) {

      // Instantiate spinner. 
      this._util.StartSpinner('Signing In...');

      // Initiate Login.
      this._userService.Login(email, password)
        .subscribe(user => {

          // Navigate to Home Page after successful loggin in.
          this._nav.setRoot(EventsPage);

        }, error => {

          this._util.StopSpinner();

          this._util.ShowAlert('Login Error', 'Username or password is not correct.');

        });

    }

  }

}