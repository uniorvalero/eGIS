export interface IAssessment {
    propertyId: number;
    assessmentId: number;
    assessedValue: string;
    marketValue: string;
    assessmentLevel: string;
    assessmentDate: Date;
    validUntil: Date;
    assessedBy: number;
 }

 export type createAssessmentDto =Omit<IAssessment,
   'propertyId'|'assessedValue'|'marketValue'|'assessmentLevel'|'assessmentDate'|'validUntil'|'assessedBy'>;
