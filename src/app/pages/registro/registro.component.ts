import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  usuariosService = inject(UsuariosService);

  formulario: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  async onSubmit() {
    const response = await this.usuariosService.registerUser(this.formulario.value);
    console.log(response);
  }

}
