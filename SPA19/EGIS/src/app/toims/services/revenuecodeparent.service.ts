import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { createRevenueCodeParentDto, IRevenueCodeParent } from '../models/revenuecodeparent';
import { Observable } from 'rxjs';
import { EnvironmentInjector } from '@angular/core';
import { EnvironmentProviders } from '@angular/core';
import { makeEnvironmentProviders } from '@angular/core';
import { createEnvironmentInjector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RevenuecodeparentService {

   readonly apibaseurl = environment.apibaseURL;
    constructor(private http:HttpClient) { }
  
    getRevenueCodeParentLst():Observable<IRevenueCodeParent[]>{
      return this.http.get<IRevenueCodeParent[]>(this.apibaseurl + '/RevenueCodeParent');
    }
  
    updateRevenueCodeParent(rcodes:IRevenueCodeParent):Observable<void>{
      return this.http.put<void>(`${this.apibaseurl + '/RevenueCodeParent'}/${rcodes.id}`,rcodes);
    }
  
    createRevenueCodeParent(data:createRevenueCodeParentDto):Observable<createRevenueCodeParentDto>{
      data.id= 0;
      return this.http.post<createRevenueCodeParentDto>(this.apibaseurl + '/RevenueCodeParent' + '/Create',data);
    }
  
    
    deleteRevenueCodeParent(id:number):Observable<void>{
      
      return this.http.delete<void>(`${this.apibaseurl + '/RevenueCodeParent'}/${id}`);
    }
}
