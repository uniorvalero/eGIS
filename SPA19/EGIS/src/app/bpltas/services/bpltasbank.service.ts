import { Injectable } from '@angular/core';
import { createBPLTASBankDto, IBPLTASBank } from '../models/bpltasbank';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BpltasbankService {

  readonly apibaseurl = environment.bpltasApiBaseURL;
  constructor(private http:HttpClient) { }

  getBanks():Observable<IBPLTASBank[]>{
    return this.http.get<IBPLTASBank[]>(this.apibaseurl + '/Bank');
  }

  updateBank(mcode:IBPLTASBank):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/Bank'}/${mcode.id}`,mcode);
  }

  createBank(data:createBPLTASBankDto):Observable<createBPLTASBankDto>{
    data= 0;
    return this.http.post<createBPLTASBankDto>(this.apibaseurl + '/Bank' + '/Create',data);
  }

  deleteBank(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/Bank'}/${id}`);
  }
}
