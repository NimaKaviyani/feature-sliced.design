import {createSlice} from "@reduxjs/toolkit";
import localStorage from "@shared/helpers/localStorage";
import {USER} from "@shared/helpers/localStorage/types";
import cookie from "@shared/helpers/cookie";
import {REFRESH_TOKEN, USER_TOKEN} from "@shared/helpers/cookie/types";
import {UserState} from '@features/user-login/types';

export const lang = {
  title: 'Welcome back',
  description: 'Welcome back! Please enter your login information.',
  emailLabel: 'Email',
  emailPlaceholder: 'Email Address',
  passwordLabel: 'Password',
  passwordPlaceholder: 'Password',
  submit: 'Submit',
  validation: {
    emailValidation: 'Invalid email address',
    emailRequired: 'Email is required',
    passwordValidation: 'Password is too short',
    passwordRequired: 'Password is required',
  },
};

const getInitialUserState = (): UserState => {
  const userState = localStorage.getItem(USER);
  if (userState) return userState;
  return {
    email: '',
    emailIsValidate: false,
    fullName: '',
    type: '',
    isLoggedIn: false,
  };
};

const userSlice = createSlice({
  name: 'user',
  initialState: getInitialUserState(),
  reducers: {
    setUser(state, action) {
      const {email, emailIsValidate, fullName, type, isLoggedIn} = action.payload;
      state.email = email ?? '';
      state.emailIsValidate = emailIsValidate ?? false;
      state.fullName = fullName ?? '';
      state.type = type ?? '';
      state.isLoggedIn = isLoggedIn ?? false;
      localStorage.setItem(USER, state);
    },
    deleteUser(state) {
      state.email = '';
      state.emailIsValidate = false;
      state.fullName = '';
      state.type = '';
      state.isLoggedIn = false;
      localStorage.removeItem(USER)
      cookie.deleteCookies([USER_TOKEN, REFRESH_TOKEN])
    }
  },
});

export const selectUser = (state: any) => state.user;
export const {setUser, deleteUser} = userSlice.actions;
export const userReducer = userSlice.reducer;