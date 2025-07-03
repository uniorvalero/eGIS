export interface IAuditLog {
    logId: number;
    userId: number;
    action: string;
    entityAffected: string;
    timestamp: Date;
 }

 export type createAuditLogDto =Omit<IAuditLog,
    'logId'|'userId'|'action'|'entityAffected'|'timestamp'>;
