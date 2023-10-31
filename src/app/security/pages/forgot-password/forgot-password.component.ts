import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  showConfirmationMessage: boolean = false;

  constructor(public router: Router, public builder: FormBuilder) {
    this.forgotPasswordForm = this.builder.group({
      email: ['', [Validators.email, Validators.required]]
    });
  }

  get email() {
    return this.forgotPasswordForm.controls['email'];
  }

  submitForgotPassword() {
    this.showConfirmationMessage = true;
  }

  cancelForgotPassword() {
    // Implementa la lógica para cancelar la solicitud de recuperación de contraseña, si es necesario.
  }
}
