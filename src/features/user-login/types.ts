export type LoginRequestParams = { email: string; password: string; };

export type LoginParameter = {
  email: string;
  password: string;
}

export interface LoginResponse {
  isSuccess: boolean;
  data: LoginData;
  message: string;
}

export interface LoginData {
  token: string;
  tokenExpireTime: string;
  refreshToken: string;
  refreshTokenExpireTime: string;
  user: UserObject;
}

export interface UserObject {
  email: string;
  emailIsValidate: boolean;
  fullName: string;
  type: string;
}

export interface UserState {
  email: string;
  emailIsValidate: boolean;
  fullName: string;
  type: string;
  isLoggedIn: boolean;
}