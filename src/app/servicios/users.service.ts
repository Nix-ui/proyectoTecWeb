import { Injectable } from '@angular/core';
import { RegisterUser } from '../interfaces/register-user';
import { Usuario } from '../interfaces/usuario';
import { CreateUser } from '../interfaces/create-user';
import { CreatedUserResponse } from '../interfaces/created-user-response';
import { LoginRequest, LoginResponse } from '../interfaces/auth'; 
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
  registerUser(user: RegisterUser): Observable<any> {
    return this.http.request<any>('POST', `${environment.API_BASE_URL}/register`, {
      headers: { 'x-api-key': environment.API_KEY },
      body: user
    }).pipe(
      map((response: any) => {
        return response;
      })
    );
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
deleteUser(id:number):Observable<any> {
    return this.http.request('DELETE', `${environment.API_BASE_URL}/users/${id}`, {
      headers: { 'x-api-key': environment.API_KEY }
    }).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.request<LoginResponse>('POST', `${environment.API_BASE_URL}/login`, {
      body: credentials,
      headers: { 'x-api-key': environment.API_KEY }}).pipe(
      map((response: LoginResponse) => {  
        return response;
      })
    );
  }
}
