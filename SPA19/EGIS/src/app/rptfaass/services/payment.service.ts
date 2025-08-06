import { Injectable } from '@angular/core';
import { IPayment } from '../models/payment';
import { createPaymentDto } from '../../rptfaass/models/payment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  readonly apibaseurl = environment.rptasfaasApiBaseURL;
  constructor(private http: HttpClient) { }

  getAllPayments():Observable<IPayment[]>{
    return this.http.get<IPayment[]>(this.apibaseurl + '/Payment');
  }

  getAllPaymentsByStatus(status: string):Observable<IPayment[]>{
    return this.http.get<IPayment[]>(this.apibaseurl + '/Payment/Status', {
      params: { 
        status: status
      }
    });
  }

  getPaymentsByReceiptRange(start: number, end: number) {
    console.log('Fetching payments with start:', start, 'and end:', end);
    return this.http.get<IPayment[]>(`${this.apibaseurl}/UtilityRPTAS/ReceiptRange`, {
      params: {
        start: start.toString(),
        end: end.toString()
      }
    });
  }

  updatePayments(mcode:IPayment):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/Payment'}/${mcode.Id}`,mcode);
  }

  createPayments(data:createPaymentDto):Observable<createPaymentDto>{
    console.log('Creating payment with data:', data);
    return this.http.post<createPaymentDto>(this.apibaseurl + '/Payment' + '/Create',data);
  }

  deletePayments(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/Payment'}/${id}`);
  }
}
