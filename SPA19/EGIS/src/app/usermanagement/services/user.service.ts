import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly apibaseurl = environment.toimsApiBaseURL;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apibaseurl + '/usermanagement/UsersUser');
  }

  createUser(user: IUser): Observable<IUser> {
    user.id = 0;
    return this.http.post<IUser>(this.apibaseurl + '/usermanagement/UsersUser' + '/Create', user);
  }

  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.apibaseurl + '/usermanagement/UsersUser'}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apibaseurl + '/usermanagement/UsersUser'}/${id}`);
  }
}
