import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { ILoginRequest } from '../models/loginrequest';
import { IOtpVerifyRequest } from '../models/otpverifyrequest';
import { IOTPToken } from '../models/otpToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly apibaseurl = environment.toimsApiBaseURL;
  constructor(private http: HttpClient) { }

  isAuthenticated = signal(false);

  login(request: ILoginRequest): boolean {
    if (request.email === 'admin' && request.password === 'admin') {
      this.isAuthenticated.set(true);
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated.set(false);
    return false;
  }
  // login(request: ILoginRequest): Observable<any> {
  //   return this.http.post(`${this.apibaseurl + '/usermanagement/Auth/' + '/Login'}`, request);
  // }

  signup(request: ILoginRequest): Observable<{ otpToken: IOTPToken }> {
    return this.http.post<{ otpToken: IOTPToken }>(this.apibaseurl + '/usermanagement/Auth' + '/Signup', request);
  }

  verifyOtp(request: IOtpVerifyRequest): Observable<any> {
    return this.http.post<{ otpTokenId: number }>(this.apibaseurl + '/usermanagement/Auth' + '/VerifyOtp', request);
  }

  resendOtp(request: IOtpVerifyRequest): Observable<any> {
    return this.http.post<{ otpTokenId: number }>(this.apibaseurl + '/usermanagement/Auth' + '/ResendOtp', request);
  }

  setUser(user: { email: string, password: string, loginId: number }) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  clearUser() {
    localStorage.removeItem('currentUser');
  }
}
