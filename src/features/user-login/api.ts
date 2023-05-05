export const handleLogin = async (values: LoginParameter) => {
  const response = <LoginResponse>await postRequest(userAddress.login, values);
  if (response?.isSuccess) {
    const {data, message} = response;
    const cookies = {
      [USER_TOKEN]: {
        value: data.accessToken,
        days: 0,
        expires: data.accessTokenExpireTime,
      },
      [REFRESH_TOKEN]: {
        value: data.refreshToken,
        days: 0,
        expires: data.refreshTokenExpireTime
      },
    }
    cookie.setCookies(cookies);
    const {user} = data;
    return {message, user}
  }
}