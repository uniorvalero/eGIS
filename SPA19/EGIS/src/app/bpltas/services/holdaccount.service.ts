import { Injectable } from '@angular/core';
import { createHoldAccountDto, IHoldAccount } from '../models/holdaccount';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HoldaccountService {
  
  readonly apibaseurl = environment.apibaseURL;
  constructor(private http:HttpClient) { }

  getHoldAccounts():Observable<IHoldAccount[]>{
    return this.http.get<IHoldAccount[]>(this.apibaseurl + '/holdaccount');
  }

  updateHoldAccount(mcode:IHoldAccount):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/holdaccount'}/${mcode.id}`,mcode);
  }

  createHoldAccount(data:createHoldAccountDto):Observable<createHoldAccountDto>{
    data.id= 0;
    return this.http.post<createHoldAccountDto>(this.apibaseurl + '/holdaccount' + '/Create',data);
  }

  
  deleteHoldAccount(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/holdaccount'}/${id}`);
  }

}
