import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private baseUrl = 'http://localhost:3000/api/empleados';

  private httpClient = inject(HttpClient);

  getEmpleados() {
    return firstValueFrom(this.httpClient.get<any[]>(this.baseUrl));
  }
}
