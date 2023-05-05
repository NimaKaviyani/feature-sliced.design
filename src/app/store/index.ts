import {configureStore} from '@reduxjs/toolkit';
import {userReducer} from '@features/user-login/model';

export const store = configureStore({
  reducer: {user: userReducer},
});
