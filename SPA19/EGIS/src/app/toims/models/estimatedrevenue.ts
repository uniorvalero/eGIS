export interface IEstimatedRevenue {
    id: number;
    code : number;
    description : string;
    amount : number;
    setupyear : number;

 }

 export type createERDto =Omit<IEstimatedRevenue,'code'|'description'|'amount'|'setupyear'>;