export interface IPayment {
    Id: number;
    taxId: number;
    payerId: number;
    paymentDate: Date;
    amountPaid: number;
    paymentMethod: string;
    receiptNo: number;
    verifiedBy: number;
    status: string;
 }

 export type createPaymentDto =Omit<IPayment,
    'taxId'|'payerId'|'paymentDate'|'amountPaid'|'paymentMethod'|'receiptNo'|'verifiedBy'|'status'>
