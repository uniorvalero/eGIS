import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { IBarangay } from '../models/barangay';

export interface barangay {
  id: number;
  barangayName: string;
}

@Injectable({
  providedIn: 'root'
})
export class BarangayService {

  readonly apibaseurl = environment.toimsApiBaseURL;
  constructor(private http: HttpClient) { }
  
  getBarangays(): Observable<IBarangay[]> {
    return this.http.get<IBarangay[]>(this.apibaseurl);
  }

  getBarangaysByCity(cityId: number): Observable<IBarangay[]> {
    return this.http.get<IBarangay[]>(`/api/barangays?cityId=${cityId}`);
  }

  createBarangay(barangay: IBarangay): Observable<IBarangay> {
    return this.http.post<IBarangay>(this.apibaseurl, barangay);
  }

  updateBarangay(barangay: IBarangay): Observable<IBarangay> {
    return this.http.put<IBarangay>(`${this.apibaseurl}/${barangay.id}`, barangay);
  }

  deleteBarangay(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apibaseurl}/${id}`);
  }
}
