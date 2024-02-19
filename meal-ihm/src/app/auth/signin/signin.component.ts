import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/authentication.service';
import LoginDto from '../../../entities/login.dto';


@Component({
  selector: 'app-signin',
  standalone: true,
  providers: [AuthService],
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  authService = inject(AuthService);

  authForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  loginForm(event: Event) {
    event.preventDefault();
    this.authService.login(this.authForm.value as LoginDto, event);
  }
}
