export interface ICashTicket {
    id: number;
    controlNumber: number;
    quantity : number;
    amount : number;
    tellerName : string;
    tellerCode : number;
 }

 export type createCashTicketDto =Omit<ICashTicket,'controlNumber'|'quantity'|'amount'|'tellerCode'|'tellerName'>;