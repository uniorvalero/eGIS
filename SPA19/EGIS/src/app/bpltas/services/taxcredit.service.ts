import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';
import { createTaxCreditDto, ITaxCredit } from '../models/taxcredit';

@Injectable({
  providedIn: 'root'
})
export class TaxcreditService {

  readonly apibaseurl = environment.apibaseURL;
  constructor(private http:HttpClient) { }

  getTaxCredits():Observable<ITaxCredit[]>{
    return this.http.get<ITaxCredit[]>(this.apibaseurl + '/TaxCredit');
  }

  updateTaxCredit(mcode:ITaxCredit):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/TaxCredit'}/${mcode.id}`,mcode);
  }

  createTaxCredit(data:createTaxCreditDto):Observable<createTaxCreditDto>{
    data.id= 0;
    return this.http.post< createTaxCreditDto>(this.apibaseurl + '/TaxCredit' + '/Create',data);
  }
  
  deleteTaxCredit(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apibaseurl + '/TaxCredit'}/${id}`);
  }
}
