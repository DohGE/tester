import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUp } from './../../../../shared/models/signUp.model';

@Component({
  selector: 'app-auth-login-presenter',
  templateUrl: './auth-login-presenter.component.html',
  styleUrls: ['./auth-login-presenter.component.scss'],
})
export class AuthLoginPresenterComponent {
  @Output() register = new EventEmitter<SignUp>();
  @Output() login = new EventEmitter<SignUp>();
  hide = true;

  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  onLogin(): void {
    if (this.form.valid) {
      this.login.emit(this.form.value);
      this.form.reset();
    }
  }

  onRegister(signUp: SignUp): void {
    this.register.emit(signUp);
  }
}
