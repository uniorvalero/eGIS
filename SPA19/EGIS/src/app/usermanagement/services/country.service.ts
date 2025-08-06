import { Injectable } from '@angular/core';
import { ICountry } from '../models/country';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

export interface country {
  id: number;
  countryName: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  readonly apibaseurl = environment.toimsApiBaseURL;
  constructor(private http: HttpClient) { }

  getCountries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(this.apibaseurl);
  }

  createCountry(country: ICountry): Observable<ICountry> {
    return this.http.post<ICountry>(this.apibaseurl, country);
  }

  updateCountry(country: ICountry): Observable<ICountry> {
    return this.http.put<ICountry>(`${this.apibaseurl}/${country.id}`, country);
  }

  deleteCountry(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apibaseurl}/${id}`);
  }
}
