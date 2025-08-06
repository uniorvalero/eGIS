export interface IBPLTASBank {
    id: number;
    bankName: string;
    bankCode : number;
    branch : string;
    address : string;
 }

 export type createBPLTASBankDto =Omit<IBPLTASBank,'id'|'bankName'|'bankCode'|'branch'|'address'>;