import { Dispatch, ActionCreator, Action } from 'redux';
import {
  badRequest,
  notFound,
  serviceUnavailable,
  internalServerError,
  forbidden,
  unauthorized,
  unprocessableEntity
} from 'constants/errorTypes';

export const errorHandler = (error: XMLHttpRequest, dispatch: Dispatch, action: ActionCreator<any>): Action<string> => {
  const errorStatus: number = error.response.status;
  const errorData = error.response.data;
  const simpleErrors: Array<number> = [
    badRequest,
    notFound,
    serviceUnavailable,
    forbidden,
    internalServerError,
    unauthorized
  ];
  const nestedErrors: Array<number> = [unprocessableEntity];

  if (nestedErrors.includes(errorStatus)) {
    const errorMessage: string | Array<string> = errorData.errors?.[Object.keys(errorData.errors)[0]][0];
    return dispatch(action({ [Object.keys(errorData.errors)[0]]: typeof errorMessage === 'string' ? errorMessage : errorMessage[0] }));
  }

  if (simpleErrors.includes(errorStatus))
    if (errorData.errors) return dispatch(action(errorData.errors));

  return dispatch(action(errorData));
};
