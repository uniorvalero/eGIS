export interface IRptasCode {
    id: number;
    code: number;
    description : string;
    createdAt: Date;
 }

 export type createRptascodeDto =Omit<IRptasCode,
    'id'|'code'|'description'>;
