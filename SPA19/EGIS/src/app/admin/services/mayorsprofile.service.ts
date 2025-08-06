import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { IMayor } from '../models/mayor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MayorsprofileService {
  readonly apibaseurl = environment.toimsApiBaseURL;
  constructor(private http: HttpClient) { }

  getMayorsProfile(id: number): Observable<IMayor> {
    return this.http.get<IMayor>(`${this.apibaseurl}/mayors/${id}`);
  }

  updateMayorsProfile(p0: number, file: File, user: IMayor): Observable<IMayor> {
    return this.http.put<IMayor>(`${this.apibaseurl}/mayors/${user.id}`, user);
  }

  uploadMayorImage(userId: number, image: Blob): Observable<any> {
    const formData = new FormData();
    formData.append('profileImage', image, 'profile.jpg'); // Adjust filename as needed

    return this.http.post(`${this.apibaseurl}/mayors/${userId}/upload-image`, formData);
  }
}
