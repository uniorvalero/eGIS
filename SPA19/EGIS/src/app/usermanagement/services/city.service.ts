import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { ICity } from '../models/city';

export interface city {
  id: number;
  cityName: string;
}

@Injectable({
  providedIn: 'root'
})
export class CityService {

  readonly apibaseurl = environment.toimsApiBaseURL;
  constructor(private http: HttpClient) { }

  getCities(): Observable<ICity[]> {
    return this.http.get<ICity[]>(this.apibaseurl);
  }

  getCitiesByProvince(provinceId: number) {
    return this.http.get<ICity[]>(`/api/cities?provinceId=${provinceId}`);
  }

  createCity(city: ICity): Observable<ICity> {
    return this.http.post<ICity>(this.apibaseurl, city);
  }

  updateCity(city: ICity): Observable<ICity> {
    return this.http.put<ICity>(`${this.apibaseurl}/${city.id}`, city);
  }

  deleteCity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apibaseurl}/${id}`);
  }
}
