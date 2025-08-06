import { Injectable } from '@angular/core';
import { createBaranggayDto, IBaranggay } from '../models/baranggay';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BaranggayService {

  readonly apibaseurl = environment.rptasfaasApiBaseURL;
  constructor(private http: HttpClient) { }

  getAllBaranggays():Observable<IBaranggay[]>{
    return this.http.get<IBaranggay[]>(this.apibaseurl + '/Baranggay');
  }

  updateBaranggay(mcode:IBaranggay):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/Baranggay'}/${mcode.baranggayId}`,mcode);
  }

  createBaranggay(data:createBaranggayDto):Observable<createBaranggayDto>{
    return this.http.post<createBaranggayDto>(this.apibaseurl + '/Baranggay' + '/Create',data);
  }

  deleteBaranggay(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/Baranggay'}/${id}`);
  }
}
