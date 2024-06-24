export interface otpData {
  email: string | string[] | undefined;
  otp: string;
}

export interface loginData {
  email: string | undefined;
  password?: string;
}

export interface emailData {
  email: string;
}

export interface resetPassData {
  email: string;
  password: string;
}
