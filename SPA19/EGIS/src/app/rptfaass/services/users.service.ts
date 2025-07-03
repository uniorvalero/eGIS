import { Injectable } from '@angular/core';
import { createUsersDto, IUsers } from '../models/users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

export interface User {
  id: number;
  userName: string;
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  readonly apibaseurl = environment.rptasfaasApiBaseURL;
  constructor(private http: HttpClient) { }

  getAllUsers():Observable<IUsers[]>{
    return this.http.get<IUsers[]>(this.apibaseurl + '/Users');
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apibaseurl + '/Users'}/${id}`);
  }

  getUserIDName(role: string): Observable<User[]> {
    const params = { role: role}; 
    return this.http.get<User[]>(this.apibaseurl +'/Users/UserIDName/', { params});
  }

  getNameByRoleList(role: string): Observable<string[]> {
    const params = { role: role}; 
    return this.http.get<string[]>(this.apibaseurl + '/Users/GetUserName/', { params});   
  }

  updateUser(mcode:IUsers):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/Users'}/${mcode.userId}`,mcode);
  }

  createUser(data:createUsersDto):Observable<createUsersDto>{
    return this.http.post<createUsersDto>(this.apibaseurl + '/Users' + '/Create',data);
  }

  deleteUser(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/Users'}/${id}`);
  }
}
