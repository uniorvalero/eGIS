export interface IOfficialReceiptDetail {
    id: number;
    receiptNumber: number;
    code: string
    description : string;
    amount : number;
  }
  
  export type createOfficialReceiptDetailDto =Omit<IOfficialReceiptDetail,'id'|'receiptNumber'|'code'|'description'|'amount'>;