export interface IAccountUpdate {
    id: number;
    enterdate: Date;
    orno: number;
    accountno: number;
    amount: number;
    taxpayername: string;
    remarks: string;
    encodedby: string;
    postedby: string;
    //table list
    nrc: string;
    paymentdescription: string;
    taxdue: number;
    discountandpenalty: number;
    total: number;
    period: string;
    year: number;
 }
 
    export type createAccountUpdateDto =Omit<IAccountUpdate, 'nrc'|'paymentdescription'|'taxdue'|'discountandpenalty'|'total'|'period'|'year'>;