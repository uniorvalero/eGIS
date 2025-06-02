export interface IFormIssuance {
    id: number;
    bookNumber : number;
    quantity : number;
    startReceipt : number;
    endReceipt : number;
    char: string
    tellerCode : number;
    tellerName : string;
    finalDate : Date;
    dateAssigned: Date;
 }

 export type createFormIssuanceDto =Omit<IFormIssuance,'bookNumber'|'quantity'|'startReceipt'|'endReceipt'|'char'|'tellerCode'|'tellerName'|'finalDate'|'dateAssigned'>; 