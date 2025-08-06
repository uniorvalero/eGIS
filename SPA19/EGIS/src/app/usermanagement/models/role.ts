export interface IRole {
  id: number;
  roleName: string;
}
export type createRoleDto = Omit<IRole, 'roleName'>;