import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRevenueCodeChildDto, IRevenueCodeChild } from '../models/revenuecodechild';

@Injectable({
  providedIn: 'root'
})
export class RevenuecodechildService {

  readonly apibaseurl = environment.apibaseURL;
  constructor(private http:HttpClient) { }

  getRevenueCodeChildLst(code: string):Observable<IRevenueCodeChild[]>{
    const params = { code: code};
    return this.http.get<IRevenueCodeChild[]>(this.apibaseurl + '/RevenueCodeChild/GetCode', { params});
  }

  updateRevenueCodeChild(rcodes:IRevenueCodeChild):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/RevenueCodeChild'}/${rcodes.id}`,rcodes);
  }

  createRevenueCodeChild(data:createRevenueCodeChildDto):Observable<createRevenueCodeChildDto>{
    data.id= 0;
    return this.http.post<createRevenueCodeChildDto>(this.apibaseurl + '/RevenueCodeChild' + '/Create',data);
  }

  
  deleteRevenueCodeChild(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/RevenueCodeChild'}/${id}`);
  }
}
