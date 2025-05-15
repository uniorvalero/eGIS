export interface IOfficialReceipt {
    id: number;
    receiptnumber: number;
    char: string
    payor : string;
    dateissue : Date;
 }

 export type createOfficialReceiptDto =Omit<IOfficialReceipt,'receiptnumber'|'char'|'payor'|'dateissue'>;