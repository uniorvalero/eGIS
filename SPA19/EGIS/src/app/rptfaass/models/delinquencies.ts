export interface IDelinquencies {
    delinquencyId: number;
    taxId: number;
    status: string;
    actionTaken: string;
    flaggedDate: Date;
 }

 export type createDelinquenciesDto =Omit<IDelinquencies,
    'delinquencyId'|'taxId'|'status'|'actionTaken'|'flaggedDate'>;
