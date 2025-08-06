import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { createMenuDto, IMenu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  readonly apibaseurl = environment.toimsApiBaseURL;
  constructor(private http: HttpClient) { }
  
  getMenus(): Observable<IMenu[]> {
    return this.http.get<IMenu[]>(this.apibaseurl + '/usermanagement/UsersMenu');
  }

  getMenusByApp(appId: number) {
    return this.http.get<IMenu[]>(`${this.apibaseurl}/usermanagement/UsersMenu?appId=${appId}`);
  }

  createMenu(menu: createMenuDto): Observable<createMenuDto> {
    menu.id = 0; // Ensure the ID is set to 0 for creation
    return this.http.post<createMenuDto>(this.apibaseurl + '/usermanagement/UsersMenu' + '/Create', menu);
  }

  updateMenu(menu: IMenu): Observable<void> {
    return this.http.put<void>(`${this.apibaseurl + '/usermanagement/UsersMenu'}/${menu.id}`, menu);
  }

  deleteMenu(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apibaseurl + '/usermanagement/UsersMenu'}/${id}`);
  }
}
