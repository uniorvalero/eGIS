import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createAccountLedgeDto, IAccountLedger } from '../models/accountledger';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountsubsidiaryledgerService {
  
  readonly apibaseurl = environment.bpltasApiBaseURL;
  constructor(private http:HttpClient) { }

  getAccountLedgers():Observable<IAccountLedger[]>{
    return this.http.get<IAccountLedger[]>(this.apibaseurl + '/AccountLedger');
  }

  updateAccountLedger(mcode:IAccountLedger):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/AccountLedger'}/${mcode.id}`,mcode);
  }

  createAccountLedger(data: createAccountLedgeDto):Observable< createAccountLedgeDto>{
    data.id= 0;
    return this.http.post< createAccountLedgeDto>(this.apibaseurl + '/AccountLedger' + '/Create',data);
  }

  deleteAccountLedger(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apibaseurl + '/AccountLedger'}/${id}`);
  }

}
