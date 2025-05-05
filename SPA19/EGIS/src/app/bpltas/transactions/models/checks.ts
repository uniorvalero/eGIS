export interface IChecks {
    id: number;
    checkno: number;
    checkdate : Date;
    amount: number;
    referenceno: number;
    status: string;
    issueby: string;
    bankaccountname: string;
    typeofcheck: string;
    bankname: string;
    branch: string;
    remarks: string;
    accountno: number;
    nameoftaxpayer: string;
 }
 
    export type createChecksDto =Omit<IChecks, 'checkno'|'checkdate'|'amount'>;