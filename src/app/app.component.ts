import { Component , OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiClientService } from './servicios/api-client.service';
import { environment } from '../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { UsuariosComponent } from "./paginas/usuarios/usuarios.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UsuariosComponent,UsuariosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyectoTecWeb';
  constructor(private apiClientService: ApiClientService) { }
  ngOnInit() {
    this.apiClientService.get('users').subscribe({
      next: (data) => {
        console.log('Data received:', data);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }
}
