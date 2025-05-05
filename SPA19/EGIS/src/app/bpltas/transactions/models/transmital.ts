export interface ITransmital {
    id: number;
    recno: number;
    accountno: number;
    nameoftaxpayer: string;
    permitfee: number;
    transmitaldate: Date;
    transmitalno: number;
    dateprocess: Date;
    controlno: number;
    processby: string;
    remarks: string;
 }
 
    export type createTransmitalDto =Omit<ITransmital, 'recno'|'accountno'|'nameoftaxpayer'|'permitfee'>;