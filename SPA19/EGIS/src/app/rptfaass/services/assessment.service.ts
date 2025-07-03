import { Injectable } from '@angular/core';
import { createAssessmentDto, IAssessment } from '../models/assessment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { IFaas } from '../models/faas';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  readonly apibaseurl = environment.rptasfaasApiBaseURL;
  constructor(private http: HttpClient) { }

  getAllAssessment():Observable<IFaas[]>{
    return this.http.get<IFaas[]>(this.apibaseurl + '/Assessment');
  }

  getAssessmentById(id:number):Observable<IFaas>{
    return this.http.get<IFaas>(`${this.apibaseurl + '/Assessment'}/${id}`);
  }

  updateAssessment(mcode:IAssessment):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/Assessment'}/${mcode.assessmentId}`,mcode);
  }

  createAssessment(data:createAssessmentDto):Observable<createAssessmentDto>{
    data.assessmentId=0;
    return this.http.post<createAssessmentDto>(this.apibaseurl + '/Assessment/Create',data);
  }

  deleteAssessment(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apibaseurl + '/Assessment'}/${id}`);
  }
}
