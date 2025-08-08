import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { IAddress } from '../models/address';
import { IUser } from '../models/user';
import { ILoginRequest } from '../models/loginrequest';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  readonly apibaseurl = environment.toimsApiBaseURL;
  constructor(private http: HttpClient) { }

  insertLoginId(loginId: number): Observable<any> {
    return this.http.post(`${this.apibaseurl}/usermanagement/UsersMenu/Create`, { loginId });
  }

  updateUserId(userId: number): Observable<any> {
    return this.http.put<IUser>(`${this.apibaseurl}/usermanagement/Users/${userId}`, userId);
  }

  updateAddressId(addressId: number): Observable<any> {
    return this.http.put<IAddress>(`${this.apibaseurl}/usermanagement/Addresses/${addressId}`, addressId);
  }

  updateUserRoleId(userroleId: number): Observable<any> {
    return this.http.put<IUser>(`${this.apibaseurl}/usermanagement/Users/${userroleId}`, userroleId);
  }

  getUserProfile(userId: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.apibaseurl}/usermanagement/Users/${userId}`);
  }

  getAddressByUserId(userId: number): Observable<IAddress> {
    return this.http.get<IAddress>(`${this.apibaseurl}/usermanagement/Addresses/User/${userId}`);
  }
}