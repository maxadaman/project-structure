import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { IGetToken } from 'types/general';
import { getToken, setToken, removeToken } from 'utils/token';
import { REACT_APP_URL_API } from 'utils/config';

declare module 'axios' {
  export interface AxiosRequestConfig {
    notAuthorizeHeader?: boolean
  }
}

const twoDay = 172800000;

const checkTokenExpiresDate = async (): Promise<void> => {
  const { token, token_expires, isSession } = getToken();

  if (token_expires) {
    const currentDate: number = new Date().getTime();
    const tokenSetTime: number = new Date(token_expires).getTime();

    if (tokenSetTime - currentDate <= twoDay)
      try {
        const { data: { token: newToken } } = await axios.post(`${REACT_APP_URL_API}/api/refresh`, { token }, {
          headers: {
            'Content-Type': 'application/json; application/ld+json; text/html; charset=utf-8',
            Authorization: token
          }
        });
        setToken(newToken, isSession);
      } catch (err) {
        removeToken();
      }
  }
};

const request = (): AxiosInstance => {
  const defaultOptions: AxiosRequestConfig = {
    baseURL: `${REACT_APP_URL_API}/`,
    method: 'GET',
    headers: { 'Content-Type': 'application/json; application/ld+json; text/html; charset=utf-8' }
  };
  const instance: AxiosInstance = axios.create(defaultOptions);

  instance.interceptors.request.use(async (config: AxiosRequestConfig) => {
    const { token }: IGetToken = getToken();

    if (!token || config.notAuthorizeHeader) return config;

    await checkTokenExpiresDate();

    const { token: currentToken }: IGetToken = getToken();

    const authConfig: AxiosRequestConfig = config;

    authConfig.headers.Authorization = token ? `Bearer ${currentToken}` : '';
    authConfig.headers['Content-Type'] = 'application/json; application/ld+json; text/html; charset=utf-8';

    return authConfig;
  });

  return instance;
};

export default request();
