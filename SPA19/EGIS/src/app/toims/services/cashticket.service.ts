import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { IMastercode, createMasterCodeDto } from '../models/mastercode';
import { createCashTicketDto, ICashTicket } from '../models/cashticket';

@Injectable({
  providedIn: 'root'
})
export class CashticketService {

  readonly apibaseurl = environment.apibaseURL;
  constructor(private http: HttpClient) { }

  getCashTickets():Observable<ICashTicket[]>{
    return this.http.get<ICashTicket[]>(this.apibaseurl + '/CashTicket');
  }

  updateCashTicket(mcode:ICashTicket):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/CashTicket'}/${mcode.id}`,mcode);
  }

  createCashTicket(data:createCashTicketDto):Observable<createCashTicketDto>{
    data.id= 0;
    return this.http.post<createCashTicketDto>(this.apibaseurl + '/CashTicket' + '/Create',data);
  }

  deleteCashTicket(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/CashTicket'}/${id}`);
  }
}
