export interface ITaxCredit {
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
    taxdate: Date;
    refno: number;
    amount: number;
    remarks: string;
 }
 
    export type createTaxCreditDto =Omit<ITaxCredit, 'accountno'|'taxdate'|'refno'|'amount'|'remarks'>;