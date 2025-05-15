import { Injectable } from '@angular/core';
import { createOfficialReceiptDetailDto, IOfficialReceiptDetails } from '../models/officialreceiptdetails';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class OfficialreceipttransactiondetailsService {

  readonly apibaseurl = environment.apibaseURL;
  constructor(private http: HttpClient) { }

  getOfficialReceiptDetails(receiptnumber: number):Observable<IOfficialReceiptDetails[]>{
    const params = { receiptnumber: receiptnumber};
    return this.http.get<IOfficialReceiptDetails[]>(this.apibaseurl + '/OfficialReceiptDetail/GetReceiptNumber/', { params });
  }

  updateOfficialReceiptDetail(mcode:IOfficialReceiptDetails):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/OfficialReceiptDetail'}/${mcode.id}`,mcode);
  }

  createOfficialReceiptDetail(data:createOfficialReceiptDetailDto):Observable<createOfficialReceiptDetailDto>{
    data.id= 0;
    return this.http.post<createOfficialReceiptDetailDto>(this.apibaseurl + '/OfficialReceiptDetail' + '/Create',data);
  }

  deleteOfficialReceiptDetail(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/OfficialReceiptDetail'}/${id}`);
  }
}
