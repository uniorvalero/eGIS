export interface IBPLTASUser {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    role: string;
    status: boolean;
 }

 export type createBPLTASUserDto =Omit<IBPLTASUser,'id'|'firstName'|'lastName'|'middleName'|'email'|'role'|'status'>;