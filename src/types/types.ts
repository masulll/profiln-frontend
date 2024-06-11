interface otpData {
  email: string | string[] | undefined;
  otp: string;
}

interface loginData {
  email: string | undefined;
  password?: string;
}

interface emailData {
  email: string;
}

interface resetPassData {
  email: string;
  password: string;
}

interface PersonalDataProps {}
