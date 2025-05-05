export interface IBilling {
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
    description: string;
    taxdue: number;
    discount: number;
    penalty: number;
    totaldue: number;
    period: string;
    year: number;
 }
 
    export type createBillingDto =Omit<IBilling, 'accountno'|'description'|'taxdue'|'discount'|'penalty'|'totaldue'|'period'|'year'>;