export interface IHoldAccount {
    id: number;
    controlno: number;
    date : Date;
    accountno: number;
    holdaccount: boolean;
    name: string;
    taxpayeraddress: string;
    businessname: string;
    businessaddress: string;
    remarks: string;
 }
 
    export type createHoldAccountDto =Omit<IHoldAccount, 'controlno'|'date'|'accountno'|'holdaccount'>;