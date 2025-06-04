import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../servicios/users.service';
import { LoginRequest, LoginResponse } from '../../interfaces/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials: LoginRequest = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  };
  errorMessage: string | null = null;
  loginSuccessMessage: string | null = null; 

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  onSubmit(): void {
    console.log('LoginComponent: El método onSubmit() ha sido llamado.');
    this.errorMessage = null;
    this.loginSuccessMessage = null; 
    console.log('Enviando para login:', JSON.stringify(this.credentials));
    this.usersService.login(this.credentials).subscribe({
      next: (response: LoginResponse) => {
        console.log('Login exitoso. Token:', response.token);
        localStorage.setItem('authToken', response.token);
        this.loginSuccessMessage = '¡Inicio de sesión exitoso! Redirigiendo...';
        setTimeout(() => {
          this.router.navigate(['/users']);
        }, 2000);
      },
      error: (err) => {
        console.error('Error en el login:', err);
        this.errorMessage = 'Credenciales inválidas o error del servidor.';
        if (err.error && typeof err.error.error === 'string') {
          this.errorMessage = err.error.error;
        } else if (typeof err.error === 'string') {
          this.errorMessage = err.error;
        }
      }
    });
  }
}