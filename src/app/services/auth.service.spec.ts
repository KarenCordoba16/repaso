// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://tu-api.com'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  register(firstName: string, lastName: string, email: string, password: string): Observable<any> {
    const body = { firstName, lastName, email, password };
    return this.http.post<any>(`${this.apiUrl}/register`, body);
  }
}
