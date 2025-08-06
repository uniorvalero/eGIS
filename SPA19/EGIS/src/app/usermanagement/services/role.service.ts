import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { createRoleDto, IRole } from '../models/role';
import { IMenu } from '../models/menu';
import { IApp } from '../models/app';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  readonly apibaseurl = environment.toimsApiBaseURL;
  constructor(private http: HttpClient) { }

  getRoles(): Observable<IRole[]> {
    return this.http.get<IRole[]>(this.apibaseurl + '/usermanagement/UsersRole');
  }

  createRole(role: createRoleDto): Observable<createRoleDto> {
    role.id = 0;
    return this.http.post<createRoleDto>(this.apibaseurl + '/usermanagement/UsersRole' + '/Create', role);
  }

  updateRole(role: IRole): Observable<IRole> {
    return this.http.put<IRole>(`${this.apibaseurl + '/usermanagement/UsersRole'}/${role.id}`, role);
  }

  deleteRole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apibaseurl + '/usermanagement/UsersRole'}/${id}`);
  }

  // assignRoleToUser(userId: number, roleId: number) {
  //   return this.http.post(`${this.apibaseurl}/assign-role?userId=${userId}&roleId=${roleId}`, {});
  // }

  // assignMenuToRole(roleId: number, menuId: number) {
  //   return this.http.post(`${this.apibaseurl}/assign-menu?roleId=${roleId}&menuId=${menuId}`, {});
  // }

  // getUserRoles(userId: number) {
  //   return this.http.get<IRole[]>(`${this.apibaseurl}/user-roles/${userId}`);
  // }

  // getRoleMenus(roleId: number) {
  //   return this.http.get<IMenu[]>(`${this.apibaseurl}/role-menus/${roleId}`);
  // }
}
