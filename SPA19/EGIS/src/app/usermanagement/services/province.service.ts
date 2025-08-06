import { Injectable } from '@angular/core';
import { IProvince } from '../models/province';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

export interface province {
  id: number;
  provinceName: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  readonly apibaseurl = environment.toimsApiBaseURL;
  constructor(private http: HttpClient) { }

  getProvinces(): Observable<IProvince[]> {
    return this.http.get<IProvince[]>(this.apibaseurl);
  }

  getProvincesByCountry(countryId: number) {
    return this.http.get<IProvince[]>(`/api/provinces?countryId=${countryId}`);
  }

  createProvince(province: IProvince): Observable<IProvince> {
    return this.http.post<IProvince>(this.apibaseurl, province);
  }

  updateProvince(province: IProvince): Observable<IProvince> {
    return this.http.put<IProvince>(`${this.apibaseurl}/${province.id}`, province);
  }

  deleteProvince(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apibaseurl}/${id}`);
  }
}
