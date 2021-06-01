import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment';
import { Constants } from '../utilities/constants';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api: ApiService) {
  }

  login(user, password): Observable<any> {
    const headers = new HttpHeaders(
      {
        Accept: 'application/json; charset=utf-8',
        app: Constants.app,
        password
      }
    );
    const fixUserInfo = user.split('@');
    const userUrl = `${fixUserInfo[0]}%40tuten.cl`;
    const url = `${environment.apiUrl}user/${userUrl}`;
    return this.api.apiPutListener(url, headers);
  }
}
