import { Injectable } from '@angular/core';
import { createAccountUpdateDto, IAccountUpdate } from '../models/accountupdate';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountupdateService {
  
  readonly apibaseurl = environment.apibaseURL;
  constructor(private http:HttpClient) { }

  getAccountUpdates():Observable<IAccountUpdate[]>{
    return this.http.get<IAccountUpdate[]>(this.apibaseurl + '/accountupdate');
  }

  updateAccountUpdate(mcode:IAccountUpdate):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/accountupdate'}/${mcode.id}`,mcode);
  }

  createAccountUpdate(data:createAccountUpdateDto):Observable<createAccountUpdateDto>{
    data.id= 0;
    return this.http.post<createAccountUpdateDto>(this.apibaseurl + '/accountupdate' + '/Create',data);
  }

  
  deleteAccountUpdate(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/accountupdate'}/${id}`);
  }

}