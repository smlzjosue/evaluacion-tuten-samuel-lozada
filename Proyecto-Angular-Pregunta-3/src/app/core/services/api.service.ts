import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  apiPutListener(url, headers): Observable<any> {
    return this.http.put(url, {}, {headers});
  }

  apiGetListener(url, headers): Observable<any> {
    return this.http.get(url, {headers});
  }
}
