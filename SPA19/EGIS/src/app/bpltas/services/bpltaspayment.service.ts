import { Injectable } from '@angular/core';
import { createBPLTASApplicationDto, IBPLTASApplication } from '../models/bpltasapplication';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { createBPLTASPaymentDto, IBPLTASPayment } from '../models/bpltaspayment';

@Injectable({
  providedIn: 'root'
})
export class BpltaspaymentService {

  readonly apibaseurl = environment.bpltasApiBaseURL;
  constructor(private http:HttpClient) { }

  getPayment():Observable<IBPLTASPayment[]>{
    return this.http.get<IBPLTASPayment[]>(this.apibaseurl + '/BPLTASPayment');
  }

  updatePayment(mcode:IBPLTASPayment):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/BPLTASPayment'}/${mcode.id}`,mcode);
  }

  createPayment(data:createBPLTASPaymentDto):Observable<createBPLTASPaymentDto>{
    data.id = 0; // Ensure the ID is set to 0 for creation
    console.log('Creating payment with data:', data);
    return this.http.post<createBPLTASPaymentDto>(this.apibaseurl + '/BPLTASPayment' + '/Create',data);
  }

  deletePayment(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/BPLTASPayment'}/${id}`);
  }
}
