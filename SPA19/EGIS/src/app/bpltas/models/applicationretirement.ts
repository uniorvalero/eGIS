export interface IApplicationRetirement {
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
    billingdate: Date;
    remarks: string;
    totaltaxdue: number;
    //table list
    description: string;
    year: number;
    retire: boolean;
    taxdue: number;
 }
 
    export type createApplicationRetirementDto =Omit<IApplicationRetirement, |'description'|'year'|'retire'|'taxdue'>;