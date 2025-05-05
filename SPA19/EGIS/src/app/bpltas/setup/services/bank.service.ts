import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createBankDto, IBank } from '../models/bank';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  readonly apibaseurl = environment.apibaseURL;
  constructor(private http:HttpClient) { }

  getBanks():Observable<IBank[]>{
    return this.http.get<IBank[]>(this.apibaseurl + '/Bank');
  }

  updateBank(mcode:IBank):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/Bank'}/${mcode.id}`,mcode);
  }

  createBank(data:createBankDto):Observable<createBankDto>{
    data.id= 0;
    return this.http.post<createBankDto>(this.apibaseurl + '/Bank' + '/Create',data);
  }

  
  deleteBank(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/Bank'}/${id}`);
  }
}
