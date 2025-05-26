export interface IInquiry {
    id: number;
    orNumber : number;
    char: string
    payor : string;
    particular : number;
    remarks : string;
    bookNumber : number;
    issuingTeller : string;
    issuingDate : Date;
    verificationDetail : string;
    validity : Date;
    formNumber: number;
 }

 export type createInquiryDto = Omit<IInquiry, 
    'id' | 'orNumber' | 'char' |'payor'|'particular'|'remarks'|'bookNumber' | 'issuingTeller' |'issuingDate'|'verificationDetail' | 'validity'| 'formNumber'>;