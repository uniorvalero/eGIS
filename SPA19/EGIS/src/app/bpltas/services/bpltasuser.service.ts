import { Injectable } from '@angular/core';
import { createBPLTASUserDto, IBPLTASUser } from '../models/bpltasuser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

export interface BPLTASUsers {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class BpltasuserService {

  readonly apibaseurl = environment.bpltasApiBaseURL;
  constructor(private http:HttpClient) { }

  getUsers():Observable<IBPLTASUser[]>{
    return this.http.get<IBPLTASUser[]>(this.apibaseurl + '/BPLTASUser');
  }

  getUserIDName(role: string): Observable<BPLTASUsers[]> {
    const params = { role: role}; 
    return this.http.get<BPLTASUsers[]>(this.apibaseurl +'/BPLTASUser/UserIDName/', { params});
  }

  updateUser(mcode:IBPLTASUser):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/BPLTASUser'}/${mcode.id}`,mcode);
  }

  createUser(data:createBPLTASUserDto):Observable<createBPLTASUserDto>{
    return this.http.post<createBPLTASUserDto>(this.apibaseurl + '/BPLTASUser' + '/Create',data);
  }

  deleteUser(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/BPLTASUser'}/${id}`);
  }
}
