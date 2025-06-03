import { Component, Input , OnInit} from '@angular/core';
import { ApiClientService } from '../../servicios/api-client.service';
import { UsersService } from '../../servicios/users.service';
import { UserCardsComponent } from '../../elementos/user-cards/user-cards.component';
import { Usuario } from '../../interfaces/usuario';
import { Router } from '@angular/router';
import { RegisterUser } from '../../interfaces/register-user';
@Component({
  selector: 'app-usuarios',
  imports: [UserCardsComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent implements OnInit {
  listaUsuarios: Usuario[] = [];
  users: RegisterUser[] = [];
  page: number;
  constructor(private apiClientService: ApiClientService,private router: Router, private usersService: UsersService) { 
    this.page = 1;
  }
  ngOnInit(): void {
    this.getUsers();
    this.users = this.getAllUsersRegister();
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
  getAllUsersRegister(): RegisterUser[] {
    const users = this.usersService.getAllUsers();
    return users;
  }
  showUser(id:number){
    this.router.navigate(['/user', id]);
  }
}
