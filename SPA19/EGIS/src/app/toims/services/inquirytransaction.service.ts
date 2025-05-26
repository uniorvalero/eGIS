import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { IInquiry } from '../models/inquiry';

@Injectable({
  providedIn: 'root'
})
export class InquirytransactionService {
  readonly apibaseurl = environment.apibaseURL;
  constructor(private http: HttpClient) { }

  getInquiryList():Observable<IInquiry[]>{
    return this.http.get<IInquiry[]>(this.apibaseurl + '/OfficialReceipt');
  }
}
