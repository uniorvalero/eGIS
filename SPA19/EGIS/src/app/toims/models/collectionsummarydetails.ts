export interface ICollectionSummaryDetails {
    id: number;
    code: string;
    setDate : Date;
    perdayAmount : number;
 }

 export type createCollectionSummaryDetailsDto = Omit<ICollectionSummaryDetails,
    'code' | 'setDate' | 'perdayAmount'>;