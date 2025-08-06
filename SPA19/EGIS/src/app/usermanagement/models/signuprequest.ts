import { ILoginRequest } from "./loginrequest";
import { IOtpVerifyRequest } from "./otpverifyrequest";

export interface ISignupRequest {
  otp: IOtpVerifyRequest;
  login: ILoginRequest;
}