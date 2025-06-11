import { Injectable } from '@angular/core';
import { createActualUseDto, IActualUse } from '../models/actualuse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ActualuseService {

  readonly apibaseurl = environment.apibaseURL;
  constructor(private http: HttpClient) { }

  getMasteCodes():Observable<IActualUse[]>{
    return this.http.get<IActualUse[]>(this.apibaseurl + '/ActualUse');
  }

  updateMasterCode(mcode:IActualUse):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/ActualUse'}/${mcode.id}`,mcode);
  }

  createMasterCode(data:createActualUseDto):Observable<createActualUseDto>{
    return this.http.post<createActualUseDto>(this.apibaseurl + '/ActualUse' + '/Create',data);
  }

  deleteMasterCode(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/ActualUse'}/${id}`);
  }
}
