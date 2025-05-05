import { Injectable } from '@angular/core';
import { createTransmitalDto, ITransmital } from '../models/transmital';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TransmitalService {
  
  readonly apibaseurl = environment.apibaseURL;
  constructor(private http:HttpClient) { }

  getTransmitals():Observable<ITransmital[]>{
    return this.http.get<ITransmital[]>(this.apibaseurl + '/transmital');
  }

  updateTransmital(mcode:ITransmital):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/transmital'}/${mcode.id}`,mcode);
  }

  createTransmital(data:createTransmitalDto):Observable< createTransmitalDto>{
    data.id= 0;
    return this.http.post<createTransmitalDto>(this.apibaseurl + '/transmital' + '/Create',data);
  }

  
  deleteTransmital(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/transmital'}/${id}`);
  }

}