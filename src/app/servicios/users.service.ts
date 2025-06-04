import { Injectable } from '@angular/core';
import { RegisterUser } from '../interfaces/register-user';
import { Usuario } from '../interfaces/usuario';
import { CreateUser } from '../interfaces/create-user';
import { CreatedUserResponse } from '../interfaces/created-user-response';
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
  getUsers(page?:number|1): Observable<Usuario[]> {
    return this.http.request<Usuario[]>('GET', `${environment.API_BASE_URL}/users?page=${page}`, { headers: { 'x-api-key': environment.API_KEY } })
    .pipe(map((response: any) => {
      if (response && response.data) {
        return response.data as Usuario[];
      } else {
        return [];
      }
    }));
  }
  createUser(user: CreateUser): Observable<CreatedUserResponse> {
    return this.http.request<CreatedUserResponse>('POST', `${environment.API_BASE_URL}/users`, {
      headers: { 'x-api-key': environment.API_KEY }}).pipe(
      map((response: CreatedUserResponse) => {  
        return response;
      })
    );
  }
  updateUser(userData: Partial<CreateUser>, user:CreatedUserResponse): Observable<CreatedUserResponse> {
    return this.http.request<CreatedUserResponse>('PUT', `${environment.API_BASE_URL}/users/${user.id}`, {
      headers: { 'x-api-key': environment.API_KEY },
      body: userData
    }).pipe(
      map((response: CreatedUserResponse) => {
        return response;
      })
    );
  }
  updateUserPartial(userData: Partial<CreateUser>,user:CreatedUserResponse): Observable<CreatedUserResponse> {
    return this.http.request<CreatedUserResponse>('PATCH', `${environment.API_BASE_URL}/users/${user.id}`, {
      headers: { 'x-api-key': environment.API_KEY },
      body: userData
    }).pipe(
      map((response: CreatedUserResponse) => {
        return response;
      })
    );
  }
}
