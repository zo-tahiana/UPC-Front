import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  form: FormGroup;

  constructor(
    private readonly snackbar: MatSnackBar,
    private readonly router: Router
  ) {
    this.form = new FormGroup({
      fName: new FormControl('', [
        Validators.required
      ]),
      lName: new FormControl('', [
        Validators.required
      ]),
      pseudo: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', []),
      phone: new FormControl('', [
        Validators.pattern('[- +()0-9]+')
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      org: new FormControl('', [])
    });
  }

  ngOnInit(): void {}

  get fName() {
    return this.form.get('fName');
  }

  get lName() {
    return this.form.get('lName');
  }

  get pseudo() {
    return this.form.get('pseudo');
  }

  get email() {
    return this.form.get('email');
  }

  get phone() {
    return this.form.get('phone');
  }

  get password() {
    return this.form.get('password');
  }

  get org() {
    return this.form.get('org');
  }

  pwdGenerator(passwordLength) {
    const numberChars = '0123456789';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const allChars = numberChars + upperChars + lowerChars;
    let randPasswordArray = Array(passwordLength);
    randPasswordArray[0] = numberChars;
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray = randPasswordArray.fill(allChars, 3);
    return this.shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  generatePassword() {
    const password = this.pwdGenerator(10);
    this.password.setValue(password);
  }

  async save() {
    try {
      const data: any = {
        fName: this.fName.value,
        lName: this.lName.value,
        pseudo: this.pseudo.value,
        password: this.password.value
      };

      if (this.email.value) data.email = this.email.value;
      if (this.phone.value) data.phone = this.phone.value;
      if (this.org.value) data.org = this.org.value;
      console.log(data);

      // TODO: Save account
      return this.router.navigateByUrl('/admin/comptes');
    } catch (e) {
      this.snackbar.open('Une erreur est survenue lors de la création de ce compte', 'fermer');
    }
  }
}
