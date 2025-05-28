import { Injectable } from '@angular/core';
import { createTellerTransactionDto, ITellerTransaction } from '../models/tellertransaction';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TellertransactionService {
  
  readonly apibaseurl = environment.apibaseURL;
  constructor(private http:HttpClient) { }

  getTellerTransaction():Observable<ITellerTransaction[]>{
    return this.http.get<ITellerTransaction[]>(this.apibaseurl + '/tellertransaction');
  }

  updateTellerTransaction(mcode:ITellerTransaction):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/tellertransaction'}/${mcode.id}`,mcode);
  }

  createTellerTransaction(data:createTellerTransactionDto):Observable<createTellerTransactionDto>{
    data.id= 0;
    return this.http.post<createTellerTransactionDto>(this.apibaseurl + '/tellertransaction' + '/Create',data);
  }

  
  deleteTellerTransaction(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/tellertransaction'}/${id}`);
  }

}
