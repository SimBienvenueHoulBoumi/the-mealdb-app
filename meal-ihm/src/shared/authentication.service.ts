import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authApiUrl = 'http://localhost:4000/auth';

  constructor(private http: HttpClient, private router: Router) {}

  login({
    email,
    password,
  }:{
    email: string;
    password: string;
  },e: Event): void {
    e.preventDefault();
    this.http
   .post<{ access_token: string }>(`${this.authApiUrl}/login`, {
        email,
        password,
      })
   .subscribe((response: { access_token: string }) => {
        localStorage.setItem('token', response.access_token);
        this.router.navigate(['/dashboard']);
      });
  }
}
