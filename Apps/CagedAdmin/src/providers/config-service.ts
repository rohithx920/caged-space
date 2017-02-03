import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config';

@Injectable()
export class ConfigService {

  private _config: ConfigModel;

  constructor() {

    this._config = new ConfigModel();

  }

  get loginURL(): string {
    return this._config.loginURL;
  }

  // MailGun API properties.
  set mailGunAPIKey(value: string) {
    this._config.mailGunAPIKey = value;
  }

  get mailGunAPIKey(): string {
    return this._config.mailGunAPIKey;
  }

  set mailGunDomain(value: string) {
    this._config.mailGunDomain = value;
  }

  get mailGunDomain(): string {
    return this._config.mailGunDomain;
  }

  set mailGunURL(value: string) {
    this._config.mailGunURL = value;
  }

  get mailGunURL(): string {
    return this._config.mailGunURL;
  }

}