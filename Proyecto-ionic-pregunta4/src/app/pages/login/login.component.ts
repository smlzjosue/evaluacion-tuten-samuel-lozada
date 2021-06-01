import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../../core/services/session.service';
import { LoginService } from '../../core/services/login.service';
import { GlobalService } from '../../core/services/global.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  rememberLogin: any = localStorage.getItem('rememberLogin');

  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required]),
    remember: new FormControl(false)
  });

  loading = false;

  constructor(private router: Router,
              private loginService: LoginService,
              private sessionService: SessionService,
              private global: GlobalService) {
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('userName') !== '') {
      if (sessionStorage.getItem('user')) {
        // this.router.navigate(['/shop'], {replaceUrl: true});
      }
    }
  }

  activate(): void {
    if (this.loginForm.value.remember) {
      this.sessionService.setValue('userName', this.loginForm.value.user);
      this.sessionService.setValue('password', this.loginForm.value.password);
      localStorage.setItem('rememberLogin', 'true');
    } else {
      this.sessionService.setValue('userName', null);
      this.sessionService.setValue('password', null);
      localStorage.removeItem('rememberLogin');
    }
    this.rememberLogin = localStorage.getItem('rememberLogin');
  }

  submitForm(): void {
    if (this.loginForm.value.user === '' || this.loginForm.value.password === '') {
      this.global.notification('Aviso', 'Debe ingresar Usuario y contraseña');
      return;
    }
    const user = {
      userName: this.loginForm.value.user,
      password: this.loginForm.value.password,
    };
    if (this.rememberLogin) {
      sessionStorage.setItem('userName', this.loginForm.value.user);
    } else {
      sessionStorage.removeItem('userName');
    }
    this.loading = true;
    this.loginService.login(user.userName, user.password).subscribe(
      resp => {
        this.loading = !this.loading;
        this.sessionService.setCredentials(user);
        this.sessionService.setValue('wsp', this.loginForm.value.password);
        this.loginForm.value.remember = !this.loginForm.value.remember;
        this.global.token = resp.sessionTokenBck;
        this.router.navigate(['data'], {replaceUrl: true}).then();
      },
      e => {
        this.loading = !this.loading;
        this.global.notification('Aviso', 'Usuario o Clave incorrecta');
      }
    );
  }
}
