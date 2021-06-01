import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private maxMinInactive = 15;

  constructor(private router: Router) {
    this.validateTimeSession();
  }

  // tslint:disable-next-line:variable-name
  private _credentials: any | null;

  get credentials(): any | null {
    return this._credentials;
  }

  public getMinutesInSessionI(): number {
    if (this.getTimeLogin() !== undefined) {
      return new Date(new Date().getTime() - this.getTimeLogin().getTime()).getMinutes();
    } else {
      return 0;
    }
  }

  validateTimeSession() {
    const savedCredentials = this.getValue('user');
    console.log('savedCredentials', savedCredentials);
    if (savedCredentials) {
      savedCredentials.timeLogin = new Date();
      this._credentials = savedCredentials;
    }
    setInterval(() => {
      if (this.getMinutesInSessionI() >= this.maxMinInactive) {
        if (this.router.url !== '/login') {
          // alerta de sesion inactiva
        }
      } else if (this.getTimeLogin === undefined || this._credentials === null) {
        this.router.navigate(['/'], {replaceUrl: true}).then();
      }
    }, 60000); // 60.000 milisegundos Referentes a 1 min
  }

  /**
   * Retorna el tiempo en que se identifico
   * @return Object Type Date
   */
  public getTimeLogin(): Date {
    if (this.credentials === null || this.credentials === undefined) {
      return new Date('01/01/1900'); // se manda una fecha expirada cuando no tenga session activa
    } else {
      console.log(this.credentials.timeLogin);
      return this.credentials.timeLogin;
    }
  }

  public getValue = (key: string): any | null => {
    let data: any;
    data = JSON.parse(sessionStorage.getItem(key));
    return data;
  };

  setValue = (key: string, data: any) => {
    if (data) {
      sessionStorage.setItem(key, JSON.stringify(data));
    } else {
      sessionStorage.removeItem(key);
    }
  };

  public getCredentials(): any | null {
    return this._credentials;
  }

  public setCredentials(credentials?: any) {
    this._credentials = credentials || null;
    this.setValue('user', this._credentials);
  }

  validaSessionActiva() {
    if (!this.isAuthenticated() || this.getTimeLogin === undefined) {
      this.router.navigateByUrl('/').then();
      return -1;
    }
  }

  /**
   * Checks is the user is authenticated.
   * @return True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    return !!this.credentials;
  }
}
