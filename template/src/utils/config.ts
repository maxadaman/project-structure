/*
  IMPORTANT!
  URL_API - ✘
  REACT_APP_URL_API - ✔

  See link below for more information
  https://create-react-app.dev/docs/adding-custom-environment-variables/
*/
// Remove comment if needed

import { setToken, removeToken } from './token';

interface ProcessEnv {
  [key: string]: string | undefined
}

export const { REACT_APP_URL_API }: ProcessEnv = process.env;
const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
const tempToken: string | null = urlParams.get('token');
if (tempToken) {
  removeToken();
  setToken(tempToken);
}
