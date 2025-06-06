export interface ICollectionSummaryDetails {
    id: number;
    code: string;
    setDate : Date;
    perDayAmount : number;
 }

 export type createCollectionSummaryDetailsDto = Omit<ICollectionSummaryDetails,
    'id' |'code' | 'setDate' | 'perDayAmount'>;