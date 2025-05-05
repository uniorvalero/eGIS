export interface IRevenueCodeChild {
    id: number;
    description: string;
    code : number;
    amount : number;
 }

 export type createRevenueCodeChildDto =Omit<IRevenueCodeChild,'code'|'description'|'amount'>;