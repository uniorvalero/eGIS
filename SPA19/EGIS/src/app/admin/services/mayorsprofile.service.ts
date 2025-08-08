import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { IMayor } from '../models/mayor';
import { Observable } from 'rxjs';
import { IAddress } from '../models/address';
import { IProfile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class MayorsprofileService {
  readonly apibaseurl = environment.toimsApiBaseURL;
  constructor(private http: HttpClient) { }

  getMayorsProfile(id: number): Observable<IMayor> {
    return this.http.get<IMayor>(`${environment.toimsApiBaseURL}/usermanagement/UsersUser/${id}`);
  }

  getAddressByUserId(userId: number): Observable<IAddress> {  
    return this.http.get<IAddress>(`${environment.toimsApiBaseURL}/usermanagement/UsersAddress/address/${userId}`);
  }
  // updateMayorsProfile(p0: number, file: File, user: IProfile): Observable<IProfile> {
  //   return this.http.put<IProfile>(`${this.apibaseurl}/mayors/${user.id}`, user);
  // }
  updateMayorsProfile(user: IMayor): Observable<IMayor> {
    return this.http.put<IMayor>(`${environment.toimsApiBaseURL}/mayors/${user.id}`, user);
  }

  uploadMayorImage(userId: number, image: Blob): Observable<any> {
    const formData = new FormData();
    formData.append('profileImage', image, 'profile.jpg'); // Adjust filename as needed

    return this.http.post(`${this.apibaseurl}/mayors/${userId}/upload-image`, formData);
  }
}
