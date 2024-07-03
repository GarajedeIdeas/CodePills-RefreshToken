import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl = 'http://localhost:3000/api/usuarios';

  private httpClient = inject(HttpClient);

  registerUser(user: any) {
    return firstValueFrom(
      this.httpClient.post(`${this.baseUrl}/register`, user)
    )
  }

  loginUser(user: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/login`, user)
    )
  }

  refreshToken() {
    const refreshToken = this.getRefreshToken();
    return this.httpClient.post<any>(`${this.baseUrl}/refresh`, { refreshToken });
  }

  getAuthToken() {
    return localStorage.getItem('token') || '';
  }

  getRefreshToken() {
    return localStorage.getItem('refreshToken') || '';
  }

}
