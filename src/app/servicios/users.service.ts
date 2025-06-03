import { Injectable } from '@angular/core';
import { RegisterUser } from '../interfaces/register-user';
import { Usuario } from '../interfaces/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor( private http: HttpClient) { }

  getAllUsers(): RegisterUser[] {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }
  getUsersPage(page: number): Promise<Usuario[]> {
    return this.http.get<any>('https://reqres.in/api/users?page=1')
      .toPromise()
      .then(data => data.data as Usuario[]);
  }
  getUsers(): Promise<Usuario[]> {
    return this.http.get<any>('https://reqres.in/api/users?page=1')
      .toPromise()
      .then(data => data.data as Usuario[]);
  }
}
