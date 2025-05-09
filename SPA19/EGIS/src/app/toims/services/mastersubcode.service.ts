import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createMasterSubCodeDto, IMasterSubcode } from '../models/submastercode';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class MastersubcodeService {

  readonly apibaseurl = environment.apibaseURL;
 
  constructor(private http:HttpClient) { }

  getMasterSubCodes(code: number):Observable<IMasterSubcode[]>{
    const params = { code: code};
    return this.http.get<IMasterSubcode[]>(this.apibaseurl + '/MasterTableSubCode/GetCode/', { params });
  }

  updateMasterSubCode(mscode:IMasterSubcode):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/MasterTableSubCode'}/${mscode.id}`,mscode);
  }

  createMasterSubCode(data:createMasterSubCodeDto):Observable<createMasterSubCodeDto>{
    data.id= 0;
    return this.http.post<createMasterSubCodeDto>(this.apibaseurl + '/MasterTableSubCode' + '/Create',data);
  }

  
  deleteMasterSubCode(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/MasterTableSubCode'}/${id}`);
  }
}

