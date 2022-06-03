import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthentificationService } from 'app/shared/services/authentification.service';
import { SigninService } from './service/signin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  checking: boolean = false;
  errorMsg: any;

  constructor(
    private readonly signinService: SigninService,
    private readonly router: Router,
    private readonly snackbar: MatSnackBar,
    private readonly authService: AuthentificationService
  ) {
    this.form = new FormGroup({
      identification: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(value => {
      if (this.errorMsg) this.errorMsg.dismiss();
    });
  }

  get identification() {
    return this.form.get('identification');
  }

  get password() {
    return this.form.get('password');
  }

  isEmail(email) {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
  }

  async signin() {
    this.checking = true;
    try {
      const data: any = { password: this.password.value };
      if (this.isEmail(this.identification.value)) {
        data.email = this.identification.value;
      } else {
        data.pseudo = this.identification.value;
      }
      const res: any = await this.signinService.signin(data);
      if (res.token) {
        this.authService.setToken(res.token);
      }
      return this.router.navigateByUrl('/');
    } catch (e) {
      if (e.error.message) {
        this.errorMsg = this.snackbar.open(e.error.message, 'Fermer');
      }
    } finally {
      this.checking = false;
    }
  }
}
