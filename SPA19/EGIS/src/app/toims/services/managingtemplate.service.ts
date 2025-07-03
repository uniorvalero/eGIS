import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createMTDto, IManagingtemplate } from '../models/managingtemplate';

@Injectable({
  providedIn: 'root'
})
export class ManagingtemplateService {

   readonly apibaseurl = environment.toimsApiBaseURL;
        constructor(private http:HttpClient) { }
      
        getMTList():Observable<IManagingtemplate[]>{
          return this.http.get<IManagingtemplate[]>(this.apibaseurl + '/ManagingTemplate');
        }
      
        updateMT(data:IManagingtemplate):Observable<void>{
          return this.http.put<void>(`${this.apibaseurl + '/ManagingTemplate'}/${data.id}`,data);
        }
      
        createMT(data:createMTDto):Observable<createMTDto>{
          data.id= 0;
          return this.http.post<createMTDto>(this.apibaseurl + '/ManagingTemplate' + '/Create',data);
        }
      
        
        deleteER(id:number):Observable<void>{
          
          return this.http.delete<void>(`${this.apibaseurl + '/ManagingTemplate'}/${id}`);
        }
}
