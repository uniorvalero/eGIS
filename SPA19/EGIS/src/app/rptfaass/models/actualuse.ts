export interface IActualUse {
    id: number;
    class: string;
    code: string;
    description : string;
    createdAt: Date;
 }

 export type createActualUseDto =Omit<IActualUse,
    'id'|'class'|'code'|'description'>;
