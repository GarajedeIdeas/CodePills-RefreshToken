import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuariosService = inject(UsuariosService);

  formulario: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  async onSubmit() {
    const response = await this.usuariosService.loginUser(this.formulario.value);
    console.log(response);

    if (response['accessToken']) {
      localStorage.setItem('token', response['accessToken']);
      localStorage.setItem('refreshToken', response['refreshToken']);
    }
  }

}
