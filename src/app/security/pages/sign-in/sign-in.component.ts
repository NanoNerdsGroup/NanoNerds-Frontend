// sign-in.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";
import { UserEntity } from "../../model/user.entity";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm: FormGroup;
  errorMessage: string = '';

  constructor(public authService: AuthenticationService, public router: Router, public builder: FormBuilder) {
    this.signInForm = this.builder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]
      ]
    });
  }

  get email() {
    return this.signInForm.controls['email'];
  }

  get password() {
    return this.signInForm.controls['password'];
  }

  signIn() {

    let user: UserEntity = {
      id: 0, // Esto puede variar según tu backend
      firstName: '',
      lastName: '',
      email: this.email.value,
      phoneNumber: '',
      password: this.password.value,
    };

    this.authService.signIn(user).subscribe(
      (response: any) => {
        console.log('Inicio de sesión exitoso:', response);
        user= response.user;
        const accessToken = response.accessToken;


        const Response = {
          accessToken: accessToken,
          user: user,
        };

        localStorage.setItem('accessToken', JSON.stringify(Response.accessToken));
        localStorage.setItem('currentUser', JSON.stringify(Response.user));

        this.signInForm.reset();
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error en el inicio de sesión:', error);
        // Puedes mostrar un mensaje de error al usuario si lo deseas
        this.errorMessage = 'Credenciales incorrectas. Por favor, verifica tu correo y contraseña.';
      }
    );
  }
}
