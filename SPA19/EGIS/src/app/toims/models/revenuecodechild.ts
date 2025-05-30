export interface IRevenueCodeChild {
    id: number;
    description: string;
    code : string;
    amount : number;
 }

 export type createRevenueCodeChildDto =Omit<IRevenueCodeChild,'code'|'description'|'amount'>;