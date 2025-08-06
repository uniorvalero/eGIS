export interface IBPLTASPayment {
    id: number;
    applicationId: number;
    receiptNo: number
    typesOfPayment: string;
    amount: number;
    status: string;
    paymentDate: Date;
 }

 export type createBPLTASPaymentDto =Omit<IBPLTASPayment, 'applicationId'| 'receiptNo'| 
    'typesOfPayment' | 'amount' | 'status'| 'paymentDate'>