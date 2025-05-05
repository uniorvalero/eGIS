import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createBusinessPermitDto, IBusinessPermit } from '../models/businesspermit';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinesspermitService {
  
  readonly apibaseurl = environment.apibaseURL;
  constructor(private http:HttpClient) { }

  getBusinessPermits():Observable<IBusinessPermit[]>{
    return this.http.get<IBusinessPermit[]>(this.apibaseurl + '/BusinessPermit');
  }

  updateBusinesspermit(mcode:IBusinessPermit):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/BusinessPermit'}/${mcode.id}`,mcode);
  }

  createBusinessPermit(data:createBusinessPermitDto):Observable< createBusinessPermitDto>{
    data.id= 0;
    return this.http.post< createBusinessPermitDto>(this.apibaseurl + '/BusinessPermit' + '/Create',data);
  }

  deleteBusinessPermit(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apibaseurl + '/BusinessPermit'}/${id}`);
  }

}
