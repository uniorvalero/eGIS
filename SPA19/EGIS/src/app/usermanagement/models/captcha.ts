export interface ICaptcha {
  id: number;
  captchaCode: string;
  isUsed: boolean;
}
export type Captcha = 'captchaCode' | 'isUsed';