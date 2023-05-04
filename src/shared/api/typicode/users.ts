import type {AxiosPromise} from 'axios';
import {apiInstance} from './base';
import type {User} from './models';

const API_URL = '/users';

export const getUsersList = (): AxiosPromise<User[]> => {
  return apiInstance.get(API_URL);
};

export type GetUserByIdParams = {
  userId: number;
};

export const getUserById = ({userId, ...params}: GetUserByIdParams): AxiosPromise<User> => {
  return apiInstance.get(`${API_URL}/${userId}`, {params});
};
