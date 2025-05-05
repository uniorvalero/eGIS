export interface IAccountLedger {
    id: number;
    accountno: number;
    payername : string;
    address: string;
    tradename: string;
    type: string;
    president: string;
    contactno: string;
    datestablished: Date;
    dti: string;
    regdate: Date;
    tin: string;
    sss: string;
    areasqm: number;
    trucks: number;
    empno: number;
    baranggay: string;
    zone: string;
    district: string;
    //table list
    note: string;

 }
 
    export type createAccountLedgeDto =Omit<IAccountLedger, 'accountno'|'note'>;