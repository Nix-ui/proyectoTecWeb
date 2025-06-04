import { Routes } from '@angular/router';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { DetallesUsuarioComponent } from './paginas/detalles-usuario/detalles-usuario.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { RecursosComponent } from './paginas/recursos/recursos.component';
import { CreateUserComponent } from './paginas/create-user/create-user.component';
import { LoginComponent } from './paginas/login/login.component';

export const routes: Routes = [
    { path: 'users',component: UsuariosComponent},
    { path: 'user/:id',component: DetallesUsuarioComponent},
    { path: 'register',component: RegistroComponent},
    { path: 'resource',component: RecursosComponent},
    {path: 'create', component: CreateUserComponent},
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
