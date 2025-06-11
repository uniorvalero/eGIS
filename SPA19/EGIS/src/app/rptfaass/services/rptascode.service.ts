import { Injectable } from '@angular/core';
import { createRptascodeDto, IRptasCode } from '../models/rptascode';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RptascodeService {

  readonly apibaseurl = environment.apibaseURL;
  constructor(private http: HttpClient) { }

  getMasteCodes():Observable<IRptasCode[]>{
    return this.http.get<IRptasCode[]>(this.apibaseurl + '/MasterTableCode');
  }

  updateMasterCode(mcode:IRptasCode):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/MasterTableCode'}/${mcode.id}`,mcode);
  }

  createMasterCode(data:createRptascodeDto):Observable<createRptascodeDto>{
    return this.http.post<createRptascodeDto>(this.apibaseurl + '/MasterTableCode' + '/Create',data);
  }

  deleteMasterCode(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/MasterTableCode'}/${id}`);
  }
}
