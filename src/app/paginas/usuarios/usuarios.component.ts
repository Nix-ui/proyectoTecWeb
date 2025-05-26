import { Component, Input , OnInit} from '@angular/core';
import { ApiClientService } from '../../servicios/api-client.service';

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {
  listaUsuarios: any[] = [];
  constructor(private apiClientService: ApiClientService) { }
  getUsers(){
    this.apiClientService.get('users').subscribe({
      next: (data) => {
        this.listaUsuarios = data.data;
        console.log('Data received:', this.listaUsuarios);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }
}
