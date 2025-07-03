import { Injectable } from '@angular/core';
import { createFaasDto, IFaas } from '../models/faas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class FieldappraisalassessmentsheetService {

  readonly apibaseurl = environment.rptasfaasApiBaseURL;
  constructor(private http: HttpClient) { }

  getAllFaas():Observable<IFaas[]>{
    return this.http.get<IFaas[]>(this.apibaseurl + '/faas');
  }

  // This method retrieves the admin name and user ID by role as admin.
  getAdminNameIdList():Observable<{ UserId: number, userName: string }[]>{
    return this.http.get<{ UserId: number, userName: string }[]>('/api/adminList');
  }

  getProperty(): Observable<{ propertyId: any; taxDeclarationNo: any}[]>{
    return this.http.get<{ propertyId: number, taxDeclarationNo: any }[]>('/faas/getTaxDeclarationNoList');
  }

  updateFaas(mcode:IFaas):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/faas'}/${mcode.assessmentId}`,mcode);
  }

  createFaas(data:createFaasDto):Observable<createFaasDto>{
    return this.http.post<createFaasDto>(this.apibaseurl + '/faas' + '/Create',data);
  }

  deleteFaas(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/faas'}/${id}`);
  }
}
 