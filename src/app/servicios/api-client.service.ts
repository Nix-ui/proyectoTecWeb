import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private  client: HttpClient) { }
  get(endpoint: string ): Observable<any> {
    return this.client.request('GET', `${environment.API_BASE_URL}/${endpoint}`, { headers: { 'x-api-key': environment.API_KEY } });
  }
  post(endpoint: string, body: any){
    if(localStorage.getItem('users') === null){
      localStorage.setItem('users', JSON.stringify(body));
    }else{
      const users = localStorage.getItem('users');
      localStorage.setItem('users', JSON.stringify([...JSON.parse(users!), body]));
    }
  }
}
