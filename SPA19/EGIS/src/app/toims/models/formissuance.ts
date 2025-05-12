export interface IFormIssuance {
    id: number;
    booknumber : number;
    quantity : number;
    startreceipt : number;
    endreceipt : number;
    char: string
    tellercode : number;
    tellername : string;
    finaldate : Date;

 }

 export type createDto =Omit<IFormIssuance,'booknumber'|'Quantity'|'startreceipt'|'endreceipt'|'char'|'tellercode'|'tellername'|'finaldate'>; 