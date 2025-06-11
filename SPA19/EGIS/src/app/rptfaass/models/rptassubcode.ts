export interface IRptasSubCode {
    id: number;
    code: number;
    description : string;
    rank: number;
    kind: string;
 }

 export type createRptassubcodeDto =Omit<IRptasSubCode,
    'id'|'code'|'description'|'rank'|'kind'>;
