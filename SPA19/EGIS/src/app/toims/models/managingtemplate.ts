export interface IManagingtemplate {
    id: number;
    description: string;
    code : number;
    amount : number;
    name :string;
 }

 export type createMTDto =Omit<IManagingtemplate,'name'|'amount'|'code'|'description'>;