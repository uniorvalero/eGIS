import { Injectable } from '@angular/core';
import { createOfficialReceiptDetailDto, IOfficialReceiptDetail } from '../models/officialreceiptdetail';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class OfficialreceipttransactiondetailsService {

  readonly apibaseurl = environment.apibaseURL;
  constructor(private http: HttpClient) { }

  getOfficialReceiptDetails(orNumber: number): Observable<IOfficialReceiptDetail[]> {
    return this.http.get<IOfficialReceiptDetail[]>(
      `${this.apibaseurl}/OfficialReceiptDetail/GetReceiptNumber?orID=${orNumber}`
    );
  }

  updateOfficialReceiptDetail(mcode:IOfficialReceiptDetail):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/OfficialReceiptDetail'}/${mcode.id}`,mcode);
  }

  cancelOfficialReceiptDetail(receiptnumber:number):Observable<IOfficialReceiptDetail>{
    const params = { receiptnumber: receiptnumber};
    return this.http.put<IOfficialReceiptDetail>(this.apibaseurl + '/OfficialReceiptDetail/', { params });
  }

  createOfficialReceiptDetail(data:createOfficialReceiptDetailDto):Observable<createOfficialReceiptDetailDto>{
    return this.http.post<createOfficialReceiptDetailDto>(this.apibaseurl + '/OfficialReceiptDetail' + '/Create',data);
  }

  deleteOfficialReceiptDetail(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/OfficialReceiptDetail'}/${id}`);
  }
}
