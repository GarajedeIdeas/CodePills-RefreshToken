import { Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './pages/lista-empleados/lista-empleados.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: '', component: ListaEmpleadosComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent }
];
