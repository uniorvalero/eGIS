import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createERDto, IEstimatedRevenue } from '../models/estimatedrevenue';

@Injectable({
  providedIn: 'root'
})
export class EstimatedrevenueService {

  readonly apibaseurl = environment.toimsApiBaseURL;
      constructor(private http:HttpClient) { }
    
      getEstimatedRevenue():Observable<IEstimatedRevenue[]>{
        return this.http.get<IEstimatedRevenue[]>(this.apibaseurl + '/EstimatedRevenue');
      }
    
      updateEstimatedRevenue(data:IEstimatedRevenue):Observable<void>{
        return this.http.put<void>(`${this.apibaseurl + '/EstimatedRevenue'}/${data.id}`,data);
      }
    
      createEstiamatedRevenue(data:createERDto):Observable<createERDto>{
        data.id= 0;
        return this.http.post<createERDto>(this.apibaseurl + '/EstimatedRevenue' + '/Create',data);
      }
    
      
      deleteER(id:number):Observable<void>{
        
        return this.http.delete<void>(`${this.apibaseurl + '/EstimatedRevenue'}/${id}`);
      }
  
}
