import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createDto, IFormIssuance } from '../models/formissuance';

@Injectable({
  providedIn: 'root'
})
export class FormissuanceService {
  readonly apibaseurl = environment.apibaseURL;
  constructor(private http:HttpClient) { }

  getFormIssuances():Observable<IFormIssuance[]>{
    return this.http.get<IFormIssuance[]>(this.apibaseurl + '/FormIssuanceTransaction');
  }

  updateFormIssuances(data:IFormIssuance):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/FormIssuanceTransaction'}/${data.id}`,data);
  }

  createFormIssuance(data:createDto):Observable<createDto>{
    data.id= 0;
    return this.http.post<createDto>(this.apibaseurl + '/FormIssuanceTransaction' + '/Create',data);
  }

  
  deleteFormIssuance(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/FormIssuanceTransaction'}/${id}`);
  }
}
