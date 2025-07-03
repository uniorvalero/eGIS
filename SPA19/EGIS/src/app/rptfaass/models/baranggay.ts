export interface IBaranggay {
    baranggayId: number;
    name: string;
    zoneNo: number;
    city : string;
    province: string;
 }

 export type createBaranggayDto =Omit<IBaranggay,
    'baranggayId'|'name'|'zoneNo'|'city'|'province'>;
