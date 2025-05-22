export interface ICheckReceivedDay {
    id: number;
    receiptNumber: number;
    bankNumber : number;
    bankName : string; 
    checkNumber : number;
    checkAmount : number;
    checkDate : Date;
 }

 export type createCheckReceivedDayDto =Omit<ICheckReceivedDay,'receiptNumber'|'bankNumber'|'bankName'|'checkNumber'|'checkAmount'|'checkDate'>;