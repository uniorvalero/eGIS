export interface ITellerTransaction {
    id: number;
    tranno: number;
    cash: number;
    checks: number;
    taxcredit: number;
    transdate: Date;
    referenceno: number;
    amountchange: number;
    excesschecks: number;
    excesstaxcredit: number;
    remarks: string;
    //table list
    orno: number;
    char: string;
    amountpaid: number;
 }
 
    export type createTellerTransactionDto =Omit<ITellerTransaction, 'orno'|'char'|'amountpaid'|'amountchange'|'excesschecks'|'excesstaxcredit'>;