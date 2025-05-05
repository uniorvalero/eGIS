export interface ITeller {
    id: number;
    description: string;
    code : number;
    designation:string;
    userid :string;

 }

 export type createTellerDto =Omit<ITeller,'code'|'description'|'designation'|'userid'>;