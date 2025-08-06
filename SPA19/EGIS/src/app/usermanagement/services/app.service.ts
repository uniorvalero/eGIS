import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';
import { createAppDto, IApp } from '../models/app';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  //readonly apibaseurl = environment.toimsApiBaseURL;
  constructor(private http: HttpClient) { }

  getApps(): Observable<IApp[]> {
    return this.http.get<IApp[]>(`${environment.toimsApiBaseURL}/usermanagement/UsersApp`);
  }

  createApp(app: createAppDto): Observable<createAppDto> {
    app.id = 0;
    return this.http.post<createAppDto>(`${environment.toimsApiBaseURL}/usermanagement/UsersApp/Create`, app);
  }

  updateApp(app: IApp): Observable<IApp> {
    return this.http.put<IApp>(`${environment.toimsApiBaseURL}/usermanagement/UsersApp/${app.id}`, app);
  }

  deleteApp(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.toimsApiBaseURL}/usermanagement/UsersApp/${id}`);
  }
}
