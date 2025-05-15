import { Injectable } from '@angular/core';
import { createOfficialReceiptDto, IOfficialReceipt } from '../models/officialreceipt';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class OfficialreceipttransactionService {
  readonly apibaseurl = environment.apibaseURL;
  constructor(private http: HttpClient) { }

  getOfficialReceipts():Observable<IOfficialReceipt[]>{
    return this.http.get<IOfficialReceipt[]>(this.apibaseurl + '/OfficialReceipt');
  }

  updateOfficialReceipt(mcode:IOfficialReceipt):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/OfficialReceipt'}/${mcode.id}`,mcode);
  }

  createOfficialReceipt(data:createOfficialReceiptDto):Observable<createOfficialReceiptDto>{
    data.id= 0;
    return this.http.post<createOfficialReceiptDto>(this.apibaseurl + '/OfficialReceipt' + '/Create',data);
  }

  deleteOfficialReceipt(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/OfficialReceipt'}/${id}`);
  }
}
