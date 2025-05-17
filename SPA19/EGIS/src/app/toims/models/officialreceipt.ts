export interface IOfficialReceipt {
    id: number;
    receiptNumber: number;
    char: string
    payor : string;
    dateissue : Date;
 }

 export type createOfficialReceiptDto =Omit<IOfficialReceipt,'receiptNumber'|'char'|'payor'|'dateissue'>;