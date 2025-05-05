import { Injectable } from '@angular/core';
import { createAccountAdjustmentDto, IAccountAdjustment } from '../models/accountadjustment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountadjustmentService {
  
  readonly apibaseurl = environment.apibaseURL;
  constructor(private http:HttpClient) { }

  getAccountAdjustments():Observable<IAccountAdjustment[]>{
    return this.http.get<IAccountAdjustment[]>(this.apibaseurl + '/accountadjustment');
  }

  updateAccountAdjustment(mcode:IAccountAdjustment):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/accountadjustment'}/${mcode.id}`,mcode);
  }

  createAccountAdjustment(data:createAccountAdjustmentDto):Observable<createAccountAdjustmentDto>{
    data.id= 0;
    return this.http.post<createAccountAdjustmentDto>(this.apibaseurl + '/accountadjustment' + '/Create',data);
  }

  
  deleteAccountAdjustment(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/accountadjustment'}/${id}`);
  }

}