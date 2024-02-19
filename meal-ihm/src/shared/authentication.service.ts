import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authApiUrl = 'http://localhost:4000/auth';

  constructor(private http: HttpClient, private router: Router) {}

  login(
    {
      username,
      password,
    }: {
      username: string;
      password: string;
    },
    e: Event
  ): void {
    e.preventDefault();
    this.http
      .post<{ access_token: string }>(`${this.authApiUrl}/login`, {
        username: username,
        password,
      })
      .subscribe((response: { access_token: string }) => {
        localStorage.setItem('token', response.access_token);
        this.router.navigate(['/dashboard']);
      });
  }

  authenticate(): boolean {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      return !!token; // Utilisation de la double négation pour convertir la valeur en un booléen
    }
    return false; // Retourne false si localStorage n'est pas pris en charge
  }
}
