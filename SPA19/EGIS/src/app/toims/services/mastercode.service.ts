import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createMasterCodeDto, IMastercode } from '../models/mastercode';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MastercodeService {
  
  readonly apibaseurl = environment.apibaseURL;
  constructor(private http:HttpClient) { }

  getMasteCodes():Observable<IMastercode[]>{
    return this.http.get<IMastercode[]>(this.apibaseurl + '/MasterTableCode');
  }

  updateMasterCode(mcode:IMastercode):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/MasterTableCode'}/${mcode.id}`,mcode);
  }

  createMasterCode(data:createMasterCodeDto):Observable<createMasterCodeDto>{
    data.id= 0;
    return this.http.post<createMasterCodeDto>(this.apibaseurl + '/MasterTableCode' + '/Create',data);
  }

  
  deleteMasterCode(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/MasterTableCode'}/${id}`);
  }

}
