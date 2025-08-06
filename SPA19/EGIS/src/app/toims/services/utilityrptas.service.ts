import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { IPayment, createPaymentDto } from '../../rptfaass/models/payment';

@Injectable({
  providedIn: 'root'
})
export class UtilityrptasService {

  readonly apibaseurl = environment.toimsApiBaseURL;
  constructor(private http: HttpClient) { }

  getAllPayments():Observable<IPayment[]>{
    return this.http.get<IPayment[]>(this.apibaseurl + '/UtilityRPTAS');
  }

  getPaymentsByReceiptRange(start: number, end: number) {
    return this.http.get<IPayment[]>(`${this.apibaseurl}/UtilityRPTAS/ReceiptRange`, {
      params: {
        start: start.toString(),
        end: end.toString()
      }
    });
  }

  updatePayments(mcode:IPayment):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/UtilityRPTAS'}/${mcode.Id}`,mcode);
  }

  batchUpdatePayments(payments: IPayment[]): Observable<void> {
    return this.http.put<void>(`${this.apibaseurl}/UtilityRPTAS/BatchUpdate`, payments);
  }

  createCollection(data:createPaymentDto):Observable<createPaymentDto>{
    return this.http.post<createPaymentDto>(this.apibaseurl + '/UtilityRPTAS' + '/Create',data);
  }
}
