import { Injectable } from '@angular/core';
import { createApplicationRetirementDto, IApplicationRetirement } from '../models/applicationretirement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationretirementService {
  
  readonly apibaseurl = environment.apibaseURL;
  constructor(private http:HttpClient) { }

  getApplicationRetirements():Observable<IApplicationRetirement[]>{
    return this.http.get<IApplicationRetirement[]>(this.apibaseurl + '/applicationretirement');
  }

  updateApplicationRetirement(mcode:IApplicationRetirement):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/applicationretirement'}/${mcode.id}`,mcode);
  }

  createApplicationRetirement(data:createApplicationRetirementDto):Observable<createApplicationRetirementDto>{
    data.id= 0;
    return this.http.post<createApplicationRetirementDto>(this.apibaseurl + '/applicationretirement' + '/Create',data);
  }

  
  deleteApplicationRetirement(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/applicationretirement'}/${id}`);
  }

}