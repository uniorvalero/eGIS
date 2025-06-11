import { Injectable } from '@angular/core';
import { createRptassubcodeDto, IRptasSubCode } from '../models/rptassubcode';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RptassubcodeService {

  readonly apibaseurl = environment.apibaseURL;
  constructor(private http:HttpClient) { }

  getMasterSubCodes(code: number):Observable<IRptasSubCode[]>{
    const params = { code: code};
    return this.http.get<IRptasSubCode[]>(this.apibaseurl + '/MasterTableSubCode/GetCode/', { params });
  }

  updateMasterSubCode(mscode:IRptasSubCode):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/MasterTableSubCode'}/${mscode.id}`,mscode);
  }

  createMasterSubCode(data:createRptassubcodeDto):Observable<createRptassubcodeDto>{
    return this.http.post<createRptassubcodeDto>(this.apibaseurl + '/MasterTableSubCode' + '/Create',data);
  }
  
  deleteMasterSubCode(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/MasterTableSubCode'}/${id}`);
  }
}
