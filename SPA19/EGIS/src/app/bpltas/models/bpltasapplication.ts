export interface IBPLTASApplication {
    id: number;
    ownerId: number;
    businessName: string;
    businessPermitNo: string;
    status: string;
    applicationDate: Date;
    releaseDate: Date;
 }

 export type createBPLTASApplicationDto =Omit<IBPLTASApplication,'ownerId'|'businessName'|'businessPermitNo'|'status'|'applicationDate'|'releaseDate'>;