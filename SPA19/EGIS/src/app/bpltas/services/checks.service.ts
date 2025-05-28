import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { createChecksDto, IChecks } from '../models/checks';


@Injectable({
  providedIn: 'root'
})
export class ChecksService {

  readonly apibaseurl = environment.apibaseURL;
  constructor(private http:HttpClient) { }

  getChecks():Observable<IChecks[]>{
    return this.http.get<IChecks[]>(this.apibaseurl + '/Checks');
  }

  updateCheck(mcode:IChecks):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/Checks'}/${mcode.id}`,mcode);
  }

  createCheck(data:createChecksDto):Observable<createChecksDto>{
    data.id= 0;
    return this.http.post<createChecksDto>(this.apibaseurl + '/Checks' + '/Create',data);
  }

  deleteCheck(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apibaseurl + '/Checks'}/${id}`);
  }

}
