export interface IBPLTASInspection {
    id: number;
    inspectorId: number;
    applicationId: number;
    inspectionDate: Date;
    inspectionResult: string;
    inspectionStatus: boolean;
    remarks: string;
 }

 export type createBPLTASInspectionDto =Omit<IBPLTASInspection,'inspectorId'|'applicationId'|'inspectionDate'|'inspectionResult'|'inspectionStatus'|'remarks'>;