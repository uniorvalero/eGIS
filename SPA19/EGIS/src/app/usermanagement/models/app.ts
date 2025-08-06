export interface IApp {
  id: number;
  name: string;
  description: string;
  version: string;
}
export type createAppDto = Omit<IApp, 'name' | 'description' | 'version'>;