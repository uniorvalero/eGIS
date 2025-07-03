export interface IProperty {
code: any;
    propertyId: number;
    taxDeclarationNo: number;
    ownerId: number;
    ownerName: string;
    titleNo : number;
    classification: string;
    location: string;
    landArea: string;
    propertyStatus: boolean;
 }

 export type createPropertyDto =Omit<IProperty,
    'propertyId'|'taxDeclarationNo'|'ownerId'|'ownerName'|'titleNo'|'classification'|'location'|'landArea'|'propertStatus'>;
