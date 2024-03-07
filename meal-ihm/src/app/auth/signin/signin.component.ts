import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/authentication.service';
import LoginDto from '../../../entities/login.dto';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-signin',
  standalone: true,
  providers: [AuthService],
  imports: [ReactiveFormsModule, MatProgressSpinnerModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  authService = inject(AuthService);
  router = inject(Router);
  isloading: boolean = false;

  usernameIsValid: boolean = true;
  passwordIsValid: boolean = true;

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      if (
        localStorage.getItem('token') !== null ||
        localStorage.getItem('token') !== 'undefined'
      ) {
        this.router.navigate(['/dashboard']);
      }
    }
  }

  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  loginForm(event: Event) {
    event.preventDefault();
    
    if(!this.authForm.value.password){
      this.passwordIsValid = false;
      return;
    }
    
    if(!this.authForm.value.username){
      this.usernameIsValid = false;
      return;
    }
    
    this.isloading = true;

    // Utiliser setTimeout pour réinitialiser isloading à false après 5 secondes
    setTimeout(() => {
      this.authService.login(this.authForm.value as LoginDto, event);
      this.isloading = false;
    }, 5000);
  }
}
