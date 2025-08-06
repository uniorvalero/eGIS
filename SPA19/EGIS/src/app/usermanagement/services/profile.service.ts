import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { IAddress } from '../models/address';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  readonly apibaseurl = environment.toimsApiBaseURL;
  constructor(private http: HttpClient) { }

  createUserProfile(user: IUser, address: IAddress): Observable<any> {
    const payload = { user, address };
    return this.http.post(`${this.apibaseurl}/usermanagement/UsersMenu/Create`, payload);
  }
}
