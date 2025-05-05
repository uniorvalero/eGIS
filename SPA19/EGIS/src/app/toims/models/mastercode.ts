export interface IMastercode {
    id: number;
    description: string;
    code : number;
 }

 export type createMasterCodeDto =Omit<IMastercode,'code'|'description'>;