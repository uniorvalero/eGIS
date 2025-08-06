export interface IMayor {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  contactNo?: string;
  age?: number;
  birthDate?: Date;
  gender?: string;
  status?: string;
  isVerified?: boolean;
  loginId?: number;
  profileImage?: Blob | string;
}
