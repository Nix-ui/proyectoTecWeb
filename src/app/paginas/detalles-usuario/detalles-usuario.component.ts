import { Component,Input,OnInit } from '@angular/core';
import { ApiClientService } from '../../servicios/api-client.service';
import { Usuario } from '../../interfaces/usuario';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalles-usuario',
  imports: [],
  templateUrl: './detalles-usuario.component.html',
  styleUrl: './detalles-usuario.component.scss'
})
export class DetallesUsuarioComponent implements OnInit {
  @Input() id?: number;
  user?: Usuario;
  constructor(private api: ApiClientService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
  ngOnInit(): void {
    console.log('ID received:', this.id);
    this.api.get(`users/${this.id}`).subscribe({
      next: (data) => {
        this.user = data.data;
        console.log('Data received:', data);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }
}
