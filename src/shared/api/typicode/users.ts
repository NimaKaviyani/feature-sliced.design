import type {AxiosPromise} from 'axios';
import {apiInstance} from './base';
import type {User} from './models';
import {userAddress} from '@shared/constants/relative-url';

export const getUsersList = (): AxiosPromise<User[]> => {
  return apiInstance.get(userAddress.getUserList);
};

export type GetUserByIdParams = {
  userId: number;
};

export const getUserById = ({userId, ...params}: GetUserByIdParams): AxiosPromise<User> => {
  return apiInstance.get(userAddress.getUser(userId), {params});
};
