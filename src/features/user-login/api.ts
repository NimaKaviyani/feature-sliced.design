import {LoginParameter, LoginRequestParams, LoginResponse} from '@features/user-login/types';
import {REFRESH_TOKEN, USER_TOKEN} from '@shared/helpers/cookie/types';
import cookie from '@shared/helpers/cookie';

const sampleLoginRequest = async (values: LoginRequestParams) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        'isSuccess': true,
        'statusCode': 200,
        'data': {
          'token': 'eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.lbmMiOiJBMjU2Q0JDLUhTNTEyIiwidHlwIjoiSldUIiwiY3R5IjoiSldUIn0...',
          'tokenExpireTime': '2025-12-122T00:00:00.0000000+00:00',
          'refreshToken': 'eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.lbmMiOiJBMjU2Q0JDLUhTNTEyIiwidHlwIjoiSldUIiwiY3R5IjoiSldUIn0...',
          'refreshTokenExpireTime': '2025-12-12T00:00:00.0000000+00:00',
          'user': {
            'email': values.email,
            'emailIsValidate': false,
            'fullName': 'Nima Kaviyani',
            'type': 'User',
          },
        },
        'message': 'Success!!',
      });
    }, 1500);
  });
};


export const handleLogin = async (values: LoginParameter) => {
  const response = <LoginResponse>await sampleLoginRequest(values);
  if (response?.isSuccess) {
    const {data, message} = response;
    const cookies = {
      [USER_TOKEN]: {
        value: data.token,
        days: 0,
        expires: data.tokenExpireTime,
      },
      [REFRESH_TOKEN]: {
        value: data.refreshToken,
        days: 0,
        expires: data.refreshTokenExpireTime,
      },
    };
    cookie.setCookies(cookies);
    const {user} = data;
    return {message, user};
  }
};