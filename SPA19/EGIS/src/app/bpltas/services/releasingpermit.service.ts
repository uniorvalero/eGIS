import { Injectable } from '@angular/core';
import { createReleasingPermit, IReleasingPermit } from '../models/releasingpermit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ReleasingpermitService {
  
  readonly apibaseurl = environment.apibaseURL;
  constructor(private http:HttpClient) { }

  getReleasingPermits():Observable<IReleasingPermit[]>{
    return this.http.get<IReleasingPermit[]>(this.apibaseurl + '/releasingpermit');
  }

  updateReleasingPermit(mcode:IReleasingPermit):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/releasingpermit'}/${mcode.id}`,mcode);
  }

  createReleasingPermit(data:createReleasingPermit):Observable<createReleasingPermit>{
    data.id= 0;
    return this.http.post<createReleasingPermit>(this.apibaseurl + '/releasingpermit' + '/Create',data);
  }

  
  deleteReleasingPermit(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/releasingpermit'}/${id}`);
  }

}
