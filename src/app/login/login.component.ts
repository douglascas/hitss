import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    public snackBar: MatSnackBar,
    fb: FormBuilder,
  ) {
    this.loginForm = fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    console.log('fez login');
    this.openSnackBar('Você está logado.', 'fechar');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
    });
  }

}
