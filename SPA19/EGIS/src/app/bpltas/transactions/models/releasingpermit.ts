export interface IReleasingPermit {
    id: number;
    datereleased: Date;
    seqno : Number;
    char: string;
    permitno: Number;
    seriesno: number;
    accountno: number;
    taxpayername: string;
    tradename: Date;
    orno: number;
    validuntil: Date;
    postedby: string;
    remarks: string;
    //table list
    lineofbusiness: string;
    capital: number;
    grossreceipts: number;
    status: string;
 }
 
    export type createReleasingPermit =Omit<IReleasingPermit, 'lineofbusiness'|'capital'|'grossreceipts'|'status'>;