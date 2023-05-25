import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { appConfig } from '@configs/app';
import { plainToClass } from 'class-transformer';
import { initialState } from 'store/reducers/authentication';

const axiosInstance = axios.create({
  baseURL: appConfig.apiURL,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return err.response;
  }
);

axiosInstance.interceptors.request.use(async (config: any) => {
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/json';

  if (typeof window != 'undefined') {
    let authData = window.localStorage.getItem(appConfig.authSecretKey);

    if (!authData) {
      authData = window.sessionStorage.getItem(appConfig.authSecretKey);
    }

    let payloadData = { ...initialState };

    if (authData) {
      payloadData = JSON.parse(authData);
    }

    if (payloadData.token) {
      config.headers['Authorization'] = `Bearer ${payloadData.token}`;
    }
  }

  return config;
});

export async function request<T>(config: AxiosRequestConfig, Model: any): Promise<T> {
  const response = await axiosInstance.request<T>(config);
  const a = plainToClass<T, AxiosResponse['data']>(Model, response.data);
  return a;
}

export default axiosInstance;
