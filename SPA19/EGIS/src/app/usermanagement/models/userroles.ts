export interface IUserRole {
  id: number;
  userId: number;
  roleId: number;
}
export type createUserRoleDto = Omit<IUserRole, 'userId' | 'roleId'>;