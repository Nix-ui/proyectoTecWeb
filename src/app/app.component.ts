import { Component , OnInit} from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { ApiClientService } from './servicios/api-client.service';
import { environment } from '../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { UsuariosComponent } from "./paginas/usuarios/usuarios.component";
import { NavbarComponent } from './elementos/navbar/navbar.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UsuariosComponent, RouterLink, RouterLinkActive,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyectoTecWeb';
  constructor(private apiClientService: ApiClientService) { }
  
}
