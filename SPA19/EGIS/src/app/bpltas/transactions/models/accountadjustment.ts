export interface IAccountAdjustment {
    id: number;
    tranno: number;
    trandate: Date;
    amount: number;
    accountno: number;
    taxpayername: string;
    remarks: string;
    //table list
    nrc: string;
    paymentdescription: string;
    taxdue: number;
    discountandpenalty: number;
    total: number;
    period: string;
    year: number;
 }
 
    export type createAccountAdjustmentDto =Omit<IAccountAdjustment, 'nrc'|'paymentdescription'|'taxdue'|'discountandpenalty'|'total'|'period'|'year'>;