import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpHeaders } from '@angular/common/http';
import { Constants } from '../utilities/constants';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private api: ApiService, private global: GlobalService) {
  }

  getData(): Observable<any> {
    const headers = new HttpHeaders(
      {
        Accept: 'application/json; charset=utf-8',
        app: Constants.app,
        adminemail: Constants.adminEmail,
        token: this.global.token,
      }
    );
    const url = 'https://dev.tuten.cl:443/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true';
    return this.api.apiGetListener(url, headers);
  }
}
