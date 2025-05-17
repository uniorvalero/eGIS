export interface IMasterSubcode {
    id: number;
    description: string;
    code : number;
    subcode : number;
 }

 export type createMasterSubCodeDto =Omit<IMasterSubcode,'code'|'description'|'subcode'>;