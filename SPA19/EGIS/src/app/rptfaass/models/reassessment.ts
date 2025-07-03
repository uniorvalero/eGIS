export interface IReAssessment {
    requestId: number;
    propertyId: number;
    requestedBy: string;
    reason: string;
    status: string;
    requestedDate: Date;
    reviewedDate: Date;
    
 }

 export type createReAssessmentDto =Omit<IReAssessment,
    'requestId'|'propertyId'|'requestedBy'|'reason'|'status'|'requestedDate'|'reviewedDate'>;
    
