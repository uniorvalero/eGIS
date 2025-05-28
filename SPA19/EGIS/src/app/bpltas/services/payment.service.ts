import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createPaymentDto, IPayment } from '../models/payment';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  readonly apibaseurl = environment.apibaseURL;
  constructor(private http:HttpClient) { }

  getPayments():Observable<IPayment[]>{
    return this.http.get<IPayment[]>(this.apibaseurl + '/Payment');
  }

  updatePayment(mcode:IPayment):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/Payment'}/${mcode.id}`,mcode);
  }

  createPayment(data:createPaymentDto):Observable<createPaymentDto>{
    data.id= 0;
    return this.http.post<createPaymentDto>(this.apibaseurl + '/Payment' + '/Create',data);
  }
  
  deletePayment(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apibaseurl + '/Payment'}/${id}`);
  }

}
