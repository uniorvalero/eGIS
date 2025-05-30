export interface IRevenueCodeParent {
    id: number;
    description: string;
    code : string;
    kind : number;
    seqNo : number;
 }

 export type createRevenueCodeParentDto =Omit<IRevenueCodeParent,'code'|'description'|'SeqNO'|'kind'>;