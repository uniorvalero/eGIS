import { Injectable } from '@angular/core';
import { createBatchReceiptDto, IBatchReceipt } from '../models/batchreceipt';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { IOfficialReceipt } from '../models/officialreceipt';

@Injectable({
  providedIn: 'root'
})
export class BatchreceiptService {

  readonly apibaseurl = environment.apibaseURL;
  constructor(private http: HttpClient) { }

  getOfficialReceipt():Observable<IOfficialReceipt[]>{
    return this.http.get<IOfficialReceipt[]>(this.apibaseurl + '/OfficialReceipt');
  }

  updateBatchReceipt(data:IBatchReceipt):Observable<IOfficialReceipt>{
    data.id= 0;
    return this.http.put<IOfficialReceipt>(`${this.apibaseurl + '/OfficialReceipt'}/${data.id}`, data);
  }

  getBatchReceipt():Observable<IBatchReceipt[]>{
    return this.http.get<IBatchReceipt[]>(this.apibaseurl + '/BatchReceipt');
  }

  createBatchReceipt(data:IBatchReceipt):Observable<IBatchReceipt>{
    data.id= 0;
    return this.http.post<IBatchReceipt>(this.apibaseurl + '/BatchReceipt' + '/Create',data);
  }
}
