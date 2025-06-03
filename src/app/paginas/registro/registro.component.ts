import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../servicios/api-client.service';
import { ReactiveFormsModule,FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUser } from '../../interfaces/register-user';
import { Usuario } from '../../interfaces/usuario';
import { UsersService } from '../../servicios/users.service';
@Component({
  selector: 'app-registro',
  imports: [ ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  listaUsuarios: Usuario[] = [];
  users: RegisterUser[] = [];
  constructor(private api: ApiClientService, private router: Router, private usersService: UsersService) { }
  onSubmit() {
    const user: RegisterUser = {
      id: Date.now(),
      email: this.form.value.email ?? '',
      password: this.form.value.password ?? '',
      first_name: 'generic User',
      last_name: 'generic User',
      avatar: 'https://cdn-icons-png.flaticon.com/512/6522/6522516.png'
    };
    const existingUsers = localStorage.getItem('users');
    if (existingUsers) {
      this.users = JSON.parse(existingUsers);
    }
    this.users.push(user);
    this.api.post('register', this.users);
  }
  ngOnInit(): void {
    this.usersService.getUsers().then((usuarios: Usuario[]) => {
      this.listaUsuarios = usuarios;
    });
  }
}
