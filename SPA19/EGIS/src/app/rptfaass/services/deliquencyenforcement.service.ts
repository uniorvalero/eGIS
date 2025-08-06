import { Injectable } from '@angular/core';
import { createDelinquenciesDto, IDelinquencies } from '../models/delinquencies';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DeliquencyenforcementService {

  readonly apibaseurl = environment.rptasfaasApiBaseURL;
  constructor(private http: HttpClient) { }

  getAllBaranggays():Observable<IDelinquencies[]>{
    return this.http.get<IDelinquencies[]>(this.apibaseurl + '/Delinquencies');
  }

  updateBaranggay(mcode:IDelinquencies):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/Delinquencies'}/${mcode.delinquencyId}`,mcode);
  }

  createBaranggay(data:createDelinquenciesDto):Observable<createDelinquenciesDto>{
    return this.http.post<createDelinquenciesDto>(this.apibaseurl + '/Delinquencies' + '/Create',data);
  }

  deleteBaranggay(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/Delinquencies'}/${id}`);
  }
}
