export interface IBank {
    id: number;
    bankname: string;
    bankcode : number;
    branch : string;
    contactname : string;
    contactno : string;
    address : string;
 }

 export type createBankDto =Omit<IBank,'bankname'|'bankcode'|'branch'|'contactname'|'contactno'|'address'>;