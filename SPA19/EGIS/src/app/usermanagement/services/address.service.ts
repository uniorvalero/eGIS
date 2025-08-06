import { Injectable } from '@angular/core';
import { IAddress } from '../models/address';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  readonly apibaseurl = environment.toimsApiBaseURL;
  constructor(private http: HttpClient) { }

  getAddresses(): Observable<IAddress[]> {
    return this.http.get<IAddress[]>(this.apibaseurl);
  }

  createAddress(address: IAddress): Observable<IAddress> {
    return this.http.post<IAddress>(this.apibaseurl, address);
  }

  updateAddress(address: IAddress): Observable<IAddress> {
    return this.http.put<IAddress>(`${this.apibaseurl}/${address.id}`, address);
  }

  deleteAddress(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apibaseurl}/${id}`);
  }
}
