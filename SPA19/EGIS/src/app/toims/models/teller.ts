export interface ITeller {
    id: number;
    name: string;
    code : number;
    designation:string;
    userId :string;

 }

 export type createTellerDto =Omit<ITeller,'code'|'name'|'designation'|'userId'>;