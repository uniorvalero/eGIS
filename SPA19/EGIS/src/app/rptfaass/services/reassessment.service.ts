import { Injectable } from '@angular/core';
import { createReAssessmentDto, IReAssessment } from '../models/reassessment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ReassessmentService {

  readonly apibaseurl = environment.rptasfaasApiBaseURL;
  constructor(private http: HttpClient) { }

  getAllUsers():Observable<IReAssessment[]>{
    return this.http.get<IReAssessment[]>(this.apibaseurl + '/ReAssessment');
  }

  getOwnerList(): Observable<{ id: number, name: string }[]> {
    return this.http.get<{ id: number, name: string }[]>('/api/ReAssessment');
  }

  getOwnerName(userId:number):Observable<string[]>{
    const params = { userId: userId};
    return this.http.get<string[]>(this.apibaseurl + '/ReAssessment/OwnerName/', { params });
  }

  updateProperty(mcode:IReAssessment):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/ReAssessment'}/${mcode.propertyId}`,mcode);
  }

  createProperty(data:createReAssessmentDto):Observable<createReAssessmentDto>{
    return this.http.post<createReAssessmentDto>(this.apibaseurl + '/ReAssessment' + '/Create',data);
  }

  deleteProperty(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/ReAssessment'}/${id}`);
  }
}
