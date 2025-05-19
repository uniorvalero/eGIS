export interface ITeller {
    id: number;
    name: string;
    code : number;
    designation:string;
    userid :string;

 }

 export type createTellerDto =Omit<ITeller,'code'|'name'|'designation'|'userid'>;