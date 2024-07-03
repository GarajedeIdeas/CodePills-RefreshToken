import { Component, inject } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [],
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent {

  arrEmpleados: any[] = [];

  empleadosService = inject(EmpleadosService);

  async ngOnInit() {
    const response = await this.empleadosService.getEmpleados();
    console.log(response);
    this.arrEmpleados = response;
  }

}
