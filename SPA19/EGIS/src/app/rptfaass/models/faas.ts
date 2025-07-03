export interface IFaas{
    userId: number;
    userName: string;
    propertyId: number;
    assessmentId: number;
    propertyLocation: string;
    taxDeclarationNo: number;
    titleNo: number;
    classification: string;
    location: string;
    landArea: string;
    assessedValue: string;
    marketValue: string;
    assessmentLevel: string;
    assessmentDate: Date;
    validUntil: Date;
    assessedBy: number;
    assessedByUserName?: string;
 }

 export type createFaasDto =Omit<IFaas,
    'propertyId'|'assessmentId'|'userId'|'userName'|'propertyLocation'|'taxDeclarationNo'|'titleNo'|'classification'|'location'|
    'landArea'|'assessedValue'|'marketValue'|'assessmentLevel'|'assessmentDate'|'validUntil'|'assessedBy'>;
