import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createBillingDto, IBilling } from '../models/billing';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  
  readonly apibaseurl = environment.apibaseURL;
  constructor(private http:HttpClient) { }

  getBillings():Observable<IBilling[]>{
    return this.http.get<IBilling[]>(this.apibaseurl + '/Billing');
  }

  updateBilling(mcode:IBilling):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/Billing'}/${mcode.id}`,mcode);
  }

  createBilling(data:createBillingDto):Observable<createBillingDto>{
    data.id= 0;
    return this.http.post<createBillingDto>(this.apibaseurl + '/Billing' + '/Create',data);
  }

  
  deleteBilling(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/Billing'}/${id}`);
  }

}
