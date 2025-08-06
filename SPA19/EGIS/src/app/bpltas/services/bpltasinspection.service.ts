import { Injectable } from '@angular/core';
import { createBPLTASInspectionDto, IBPLTASInspection } from '../models/bpltasinspection';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BpltasinspectionService {

  readonly apibaseurl = environment.bpltasApiBaseURL;
  constructor(private http:HttpClient) { }

  getInspection():Observable<IBPLTASInspection[]>{
    return this.http.get<IBPLTASInspection[]>(this.apibaseurl + '/BPLTASInspection');
  }

  updateInspection(mcode:IBPLTASInspection):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/BPLTASInspection'}/${mcode.id}`,mcode);
  }

  createInspection(data:createBPLTASInspectionDto):Observable<createBPLTASInspectionDto>{
    data.id = 0; // Ensure the ID is set to 0 for creation
    return this.http.post<createBPLTASInspectionDto>(this.apibaseurl + '/BPLTASInspection' + '/Create',data);
  }

  deleteInspection(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/BPLTASInspection'}/${id}`);
  }
}
