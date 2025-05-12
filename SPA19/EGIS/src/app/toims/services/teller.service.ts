import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createTellerDto, ITeller } from '../models/teller';

@Injectable({
  providedIn: 'root'
})
export class TellerService {

  readonly apibaseurl = environment.apibaseURL;
    constructor(private http:HttpClient) { }
  
    getTellers():Observable<ITeller[]>{
      return this.http.get<ITeller[]>(this.apibaseurl + '/Teller');
    }
  
    updateTeller(data:ITeller):Observable<void>{
      return this.http.put<void>(`${this.apibaseurl + '/Teller'}/${data.id}`,data);
    }
  
    createTeller(data:createTellerDto):Observable<createTellerDto>{
      data.id= 0;
      return this.http.post<createTellerDto>(this.apibaseurl + '/Teller' + '/Create',data);
    }
  
    
    deleteTeller(id:number):Observable<void>{
      
      return this.http.delete<void>(`${this.apibaseurl + '/Teller'}/${id}`);
    }
  
}
