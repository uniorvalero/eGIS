export interface IUsers {
    userId: number;
    userName: string;
    password: string;
    role: string;
    email: string;
    phone: string;
 }

 export type createUsersDto =Omit<IUsers,
    'userId'|'userName'|'password'|'role'|'email'|'phone'>;
