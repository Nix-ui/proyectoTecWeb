import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recurso } from '../interfaces/recurso';
@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(private http: HttpClient) { }
  getRecursos(page?:number| 1): Observable<Recurso[]> {
    return this.http.get<Recurso[]>(`${environment.API_BASE_URL}/unknows/?page=${page}`, { headers: { 'x-api-key': environment.API_KEY } })
      .pipe(map((response: any) => {
        if (response && response.data) {
          return response.data as Recurso[];
        } else {
          return [];
        }
      }));
  }
}
