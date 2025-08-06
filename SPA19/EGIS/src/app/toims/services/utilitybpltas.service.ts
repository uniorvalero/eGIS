import { Injectable } from '@angular/core';
import { createBPLTASPaymentDto, IBPLTASPayment } from '../../bpltas/models/bpltaspayment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilitybpltasService {

  readonly apibaseurl = environment.toimsApiBaseURL;
  constructor(private http: HttpClient) { }

  getAllPayments():Observable<IBPLTASPayment[]>{
    return this.http.get<IBPLTASPayment[]>(this.apibaseurl + '/UtilityBPLTAS/GetByStatus?status=Paid');
  }

  getPaymentsByReceiptRange(start: number, end: number) {
    return this.http.get<IBPLTASPayment[]>(`${this.apibaseurl}/UtilityBPLTAS/ReceiptRange`, {
      params: {
        start: start.toString(),
        end: end.toString()
      }
    });
  }

  updatePayments(mcode:IBPLTASPayment):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/UtilityBPLTAS'}/${mcode.id}`,mcode);
  }

  batchUpdatePayments(payments: IBPLTASPayment[]): Observable<void> {
    return this.http.put<void>(`${this.apibaseurl}/UtilityBPLTAS/BatchUpdate`, payments);
  }

  createCollection(data:createBPLTASPaymentDto):Observable<createBPLTASPaymentDto>{
    return this.http.post<createBPLTASPaymentDto>(this.apibaseurl + '/UtilityBPLTAS' + '/Create',data);
  }
}
