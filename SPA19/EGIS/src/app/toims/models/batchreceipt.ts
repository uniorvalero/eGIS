export interface IBatchReceipt {
    id: number;
    setupDate: Date;
    setupForm : string;
    startingSeries : number;
    endingSeries : number;
    char: string;
    payor: string;
    accountCode: string;
    description: string;
    bookNumber: number;
    amount: number; 
 }

 export type createBatchReceiptDto =Omit<IBatchReceipt,
    'id'|'setupDate'|'setupForm'|'startingSeries'|'endingSeries'|'char'|'payor'|'accountCode'|'description'|'bookNumber'|'amount'>;