import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {UserEntity} from "../../model/user.entity";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signUpForm: FormGroup;

  constructor(public authService: AuthenticationService,
              public router: Router,
              public builder: FormBuilder) {
    this.signUpForm = this.builder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  get firstName() {return this.signUpForm.controls['firstName'];}

  get lastName() {return this.signUpForm.controls['lastName'];}

  get email() {return this.signUpForm.controls['email'];}

  get phoneNumber() {return this.signUpForm.controls['phoneNumber'];}

  get password() {return this.signUpForm.controls['password'];}

  get confirmPassword() {return this.signUpForm.controls['confirmPassword'];}

  signUp() {


    if (this.password.value !== this.confirmPassword.value) {
      console.log('Las contraseñas no coinciden.');
      return;
    }


    const user: UserEntity = {
      id: this.authService.getNextUserId(),
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      phoneNumber: this.phoneNumber.value,
      password: this.password.value,
    };

    this.authService.signUP(user).subscribe(
      (response: any) => {
        console.log('Usuario registrado exitosamente:', response);

        // Simula una respuesta de la API
        const simulatedResponse = {
          accessToken: 'your_access_token_here',
          user: user,
        };

        localStorage.setItem('accessToken', JSON.stringify(simulatedResponse.accessToken));
        localStorage.setItem('currentUser', JSON.stringify(simulatedResponse.user));

        this.signUpForm.reset();
        //this.router.navigate(['/sign-in']);
      },
      (error) => {
        console.error('Error al registrar el usuario:', error);
        // Puedes mostrar un mensaje de error al usuario si lo deseas

      });
  }
}
