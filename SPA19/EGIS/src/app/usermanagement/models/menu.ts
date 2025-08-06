export interface IMenu {
  id: number;
  menuName: string;
  appId: number;
}
export type createMenuDto = Omit<IMenu, 'menuName' | 'appId'>;