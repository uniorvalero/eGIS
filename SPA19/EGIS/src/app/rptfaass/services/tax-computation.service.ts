import { Injectable } from '@angular/core';
import { createTaxComputationtDto, ITaxComputation } from '../models/taxcomputation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TaxComputationService {

  readonly apibaseurl = environment.rptasfaasApiBaseURL;
  constructor(private http: HttpClient) { }

  getAllTax():Observable<ITaxComputation[]>{
    return this.http.get<ITaxComputation[]>(this.apibaseurl + '/TaxComputation');
  }

  getTaxByPaymentId(paymentId: number): Observable<ITaxComputation> {
    return this.http.get<ITaxComputation>(`${this.apibaseurl + '/TaxComputation'}/GetTaxByPaymentId/${paymentId}`);
  }

  getAllApprovedTaxId(status: string):Observable<number[]>{
    const params = { status: status}; 
    console.log('Fetching approved tax IDs with status:', status);
    return this.http.get<number[]>(this.apibaseurl + '/TaxComputation/GellAllTaxId/', { params });
  }

  updateTax(mcode:ITaxComputation):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/TaxComputation'}/${mcode.Id}`,mcode);
  }

  createTax(data:createTaxComputationtDto):Observable<createTaxComputationtDto>{
    console.log(data);
    return this.http.post<createTaxComputationtDto>(this.apibaseurl + '/TaxComputation' + '/Create',data);
  }

  deleteTax(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apibaseurl + '/TaxComputation'}/${id}`);
  }
}
