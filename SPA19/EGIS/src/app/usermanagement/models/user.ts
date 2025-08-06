export interface IUser {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  contactNo: string;
  age: number;
  birthDate: Date;
  gender: string;
  status: string;
  isVerified: boolean;
  loginId: number;
  profileImage: string;
}
 export type createUserDto =Omit<IUser, 'firstName'|'middleName'|'lastName'|'email'|'isVerified'>;