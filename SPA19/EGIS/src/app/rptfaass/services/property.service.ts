import { Injectable } from '@angular/core';
import { createPropertyDto, IProperty } from '../models/property';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  readonly apibaseurl = environment.rptasfaasApiBaseURL;
  constructor(private http: HttpClient) { }

  getAllProperties():Observable<IProperty[]>{
    return this.http.get<IProperty[]>(this.apibaseurl + '/Property');
  }

  getPropertyById(id: number): Observable<IProperty> {
    return this.http.get<IProperty>(`${this.apibaseurl + '/Property'}/${id}`);
  }

  updateProperty(mcode:IProperty):Observable<void>{
    return this.http.put<void>(`${this.apibaseurl + '/Property'}/${mcode.propertyId}`,mcode);
  }

  createProperty(data:createPropertyDto):Observable<createPropertyDto>{
    return this.http.post<createPropertyDto>(this.apibaseurl + '/Property' + '/Create',data);
  }

  deleteProperty(id:number):Observable<void>{
    
    return this.http.delete<void>(`${this.apibaseurl + '/Property'}/${id}`);
  }
}
