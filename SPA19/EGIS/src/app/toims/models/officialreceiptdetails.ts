export interface IOfficialReceiptDetails {
    id: number;
    receiptnumber : number;
    code : string;
    description : string;
    amount : number;
 }

 export type createOfficialReceiptDetailDto =Omit<IOfficialReceiptDetails,'receiptnumber'|'code'|'description'|'amount'>;
