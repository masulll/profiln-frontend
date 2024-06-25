export interface otpData {
  email: string | string[] | undefined;
  otp: string;
}

export interface loginData {
  email: string;
  fullname?: string;
  password?: string;
}

export interface registerData {
  email: string;
  fullname: string;
  password: string;
  agreement: boolean;
}

export interface emailData {
  email: string;
}

export interface resetPassData {
  email: string;
  password: string;
}
