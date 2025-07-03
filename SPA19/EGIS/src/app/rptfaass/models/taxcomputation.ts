export interface ITaxComputation {
    Id: number;
    assessmentId: number;
    taxYear: number;
    basicTax: number;
    sefTax: number;
    idleLandTax: number;
    totalDue: number;
    discount: number;
    penalty: number;
    finalAmount : number;
    status: string;
    
 }

 export type createTaxComputationtDto =Omit<ITaxComputation,
    'Id'|'assessmentId'|'taxYear'|'basicTax'|'sefTax'|'idleLandTax'|'totalDue'|'discount'|'penalty'|'finalAmount'|'status'>;       
    
