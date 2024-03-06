import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../shared/authentication.service';
import LoginDto from '../../../entities/login.dto';

@Component({
  selector: 'app-signin',
  standalone: true,
  providers: [AuthService],
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  authService = inject(AuthService);
  router = inject(Router);

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
    this.authService.login(this.authForm.value as LoginDto, event);
  }
}
