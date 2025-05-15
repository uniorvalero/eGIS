export interface IOfficialReceiptDetails {
    id: number;
    receiptnumber : number;
    code : string;
    description : string;
    amount : number;
 }

 export type createOfficialReceiptDetailDto =Omit<IOfficialReceiptDetails,'officialreceiptid'|'code'|'description'|'amount'>;
