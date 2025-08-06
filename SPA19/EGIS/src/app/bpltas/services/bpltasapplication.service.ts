import { Injectable } from '@angular/core';
import { createBPLTASApplicationDto, IBPLTASApplication } from '../models/bpltasapplication';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BpltasapplicationService {

  readonly apibaseurl = environment.bpltasApiBaseURL;
  constructor(private http:HttpClient) { }

  getApplications():Observable<IBPLTASApplication[]>{
    return this.http.get<IBPLTASApplication[]>(this.apibaseurl + '/BPLTASApplication');
  }

  getApplicationIds(status: string): Observable<number[]> {
    const params = { status: status };
    return this.http.get<number[]>(this.apibaseurl + '/BPLTASApplication/GetIds', { params });
  }

  updateApplication(mcode:IBPLTASApplication):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/BPLTASApplication'}/${mcode.id}`,mcode);
  }

  createApplication(data:createBPLTASApplicationDto):Observable<createBPLTASApplicationDto>{
    data.id= 0; // Ensure the ID is set to 0 for creation
    return this.http.post<createBPLTASApplicationDto>(this.apibaseurl + '/BPLTASApplication' + '/Create',data);
  }

  deleteAApplication(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/BPLTASApplication'}/${id}`);
  }
}
