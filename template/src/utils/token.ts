import { IGetToken, TokenExpiresType, TokenType } from 'types/general';

export const getToken = (): IGetToken => {
  const token: TokenType = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
  const token_expires: TokenExpiresType = parseInt(JSON.parse(localStorage.getItem('auth_token_expires')!));

  return {
    token,
    token_expires,
    isSession: !!sessionStorage.getItem('auth_token')
  };
};

export const setToken = (token: string, isSession?: boolean): void => {
  const setTokenExpires = (): string => JSON.stringify(new Date().getTime() + 1209600000);

  localStorage.setItem('auth_token_expires', setTokenExpires());
  isSession ? sessionStorage.setItem('auth_token', token) : localStorage.setItem('auth_token', token);
};

export const removeToken = (): void => {
  localStorage.removeItem('auth_token_expires');
  localStorage.removeItem('auth_token');
  sessionStorage.removeItem('auth_token');
};
