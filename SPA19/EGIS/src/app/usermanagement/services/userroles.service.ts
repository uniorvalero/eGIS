import { Injectable } from '@angular/core';
import { IUserRole } from '../models/userroles';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserrolesService {

  readonly apibaseurl = environment.toimsApiBaseURL;
  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<IUserRole[]> {
    return this.http.get<IUserRole[]>(this.apibaseurl);
  }

  createUser(user: IUserRole): Observable<IUserRole> {
    return this.http.post<IUserRole>(this.apibaseurl, user);
  }

  updateUser(user: IUserRole): Observable<IUserRole> {
    return this.http.put<IUserRole>(`${this.apibaseurl}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apibaseurl}/${id}`);
  }
}
