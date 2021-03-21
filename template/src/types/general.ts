import React from 'react';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import rootReducer from 'store/reducers';
import configureStore from 'store/config';

export type Nullable<T> = T | null;

// Routing

export interface IRoute {
  path: string;
  layout: React.ElementType;
  component: React.ElementType
}

// Redux

export type ThunkOperationType<Response, State> = ThunkAction<Response, State, unknown, Action<string>>;
export type RootStateType = ReturnType<typeof rootReducer>;
export type DispatchType = typeof configureStore.dispatch;

// Errors

export type IApiError = {
  [key: string]: string
}

// Auth Token

export type TokenType = Nullable<string>;
export type TokenExpiresType = Nullable<number>;
export interface IGetToken {
  token: TokenType;
  token_expires: TokenExpiresType;
  isSession: boolean
}

// Validation

export type validationType = {
  isValid: boolean;
  error?: string;
};
