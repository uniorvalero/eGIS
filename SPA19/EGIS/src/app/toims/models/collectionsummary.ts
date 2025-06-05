export interface ICollectionSummary {
    id: number;
    code: string;
    description: string;
    beginningBalance : number;
    amount : number;
    actual : number;
    year : number;
    month : string;
 }

 export type createCollectionSummaryDto = Omit<ICollectionSummary,
    'code' | 'description' | 'beginningBalance' | 'amount' | 'actual' | 'year' | 'month'>;