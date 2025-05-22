import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { createCheckReceivedDayDto, ICheckReceivedDay } from '../models/checkreceivedday';

@Injectable({
  providedIn: 'root'
})
export class CheckreceiveddayService {

  readonly apibaseurl = environment.apibaseURL;
  constructor(private http: HttpClient) { }

  getCheckReceivedDays():Observable<ICheckReceivedDay[]>{
    return this.http.get<ICheckReceivedDay[]>(this.apibaseurl + '/CheckReceivedDay');
  }

  updateCheckReceivedDay(mcode:ICheckReceivedDay):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/CheckReceivedDay'}/${mcode.id}`,mcode);
  }

  createCheckReceivedDay(data:createCheckReceivedDayDto):Observable<createCheckReceivedDayDto>{
    data.id= 0;
    return this.http.post<createCheckReceivedDayDto>(this.apibaseurl + '/CheckReceivedDay' + '/Create',data);
  }

  deleteCheckReceivedDay(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apibaseurl + '/CheckReceivedDay'}/${id}`);
  }
}
