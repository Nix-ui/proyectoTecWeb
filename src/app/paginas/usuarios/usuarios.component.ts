import { Component, Input , OnInit} from '@angular/core';
import { ApiClientService } from '../../servicios/api-client.service';
import { UserCardsComponent } from '../../elementos/user-cards/user-cards.component';

@Component({
  selector: 'app-usuarios',
  imports: [UserCardsComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent implements OnInit {
  listaUsuarios: any[] = [];
  page: number;
  constructor(private apiClientService: ApiClientService) { 
    this.page = 1;
  }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(page?:number): void {
    let finalEndpoint= 'users';
    if(page){
      this.page = page;
      finalEndpoint += `?page=${page}`;
    }
    this.apiClientService.get(finalEndpoint).subscribe({
      next: (data) => {
        this.listaUsuarios = data.data;
        console.log('Data received:', data);
      },  
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }
}
