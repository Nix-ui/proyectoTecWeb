import { Injectable } from '@angular/core';
import { RegisterUser } from '../interfaces/register-user';
import { Usuario } from '../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  getUsers(): Observable<Usuario[]> {
    return this.http.request<Usuario[]>('GET', `${environment.API_BASE_URL}/users?page=1`, { headers: { 'x-api-key': environment.API_KEY } })
    .pipe(map((response: any) => {
      if (response && response.data) {
        return response.data as Usuario[];
      } else {
        return [];
      }
    }));
  }
}
