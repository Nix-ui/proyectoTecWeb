import { Routes } from '@angular/router';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { DetallesUsuarioComponent } from './paginas/detalles-usuario/detalles-usuario.component';
import { RegistroComponent } from './paginas/registro/registro.component';

export const routes: Routes = [
    { path: 'users',component: UsuariosComponent},
    { path: 'user/:id',component: DetallesUsuarioComponent},
    { path: 'register',component: RegistroComponent},
];
