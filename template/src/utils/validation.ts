import { validationType } from 'types/general';
// Remove comment for use constants
const emailRegEx = /^[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[-@$!%*?&#^()_=+\\/.,|{}[\]»№;:<>~'"])[A-Za-z\d-@$!%*?&#^()_=+\\/.,|{}[\]»№;:<>~'"]{8,}$/;
// const creditCardRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$/;
const minStringLength = 2;
// const middleStringLength = 128;
const maxStringLength = 255;
// const minAgeValue = 18;
// const maxAgeValue = 100;
const minUrlLength = 5;
const maxUrlLength = 255;
const minPasswordLength = 8;
const maxPasswordLength = 72;
// const specCharsRegEx1 = /-{2,10}$/;
// const specCharsRegEx2 = /\.{2,10}$/;
// const specCharsRegEx3 = /\.-/g;
// const specCharsRegEx4 = /\-\./g;
const required: validationType = { isValid: false, error: 'This field is required' };
const valid: validationType = { isValid: true };

export const testEmail = (value: string, requiredField: boolean): validationType => {
  const invalid: validationType = {
    isValid: false,
    error: 'Invalid input. Valid characters include A-z, @, 0-9, \'.\' ,\'+\', \'_\' and \'-\'.'
  };

  if (requiredField)
    if (!value)
      return required;

  if (value)
    if (!emailRegEx.test(value) || value.length > 180)
      return invalid;

  return valid;
};

export const testSimpleField = (value: string, requiredField: boolean): validationType => {
  const invalid: validationType = {
    isValid: false,
    error: 'This is not a valid input. Valid characters include A-z, 0-9, \'.\' and \'-\''
  };

  if (requiredField)
    if (!value)
      return required;

  if (value)
    if (value.length < minStringLength || value.length > maxStringLength)
      return invalid;

  return valid;
};

export const testUrl = (value: string, requiredField: boolean): validationType => {
  const invalid: validationType = {
    isValid: false,
    error:
      'This is not a valid input. Valid characters include A-z, 0-9 and \'.\' and \'-\'. Example: http://www.mywebsite.com'
  };

  if (requiredField)
    if (!value)
      return required;

  if (value)
    if (
      value.length < minUrlLength ||
      value.length > maxUrlLength ||
      !/^(https?\:)(\/{2})([a-zA-Z0-9]([a-zA-Z0-9\-]{0,241}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}\/?$/.test(value)
    )
      return invalid;

  return valid;
};

export const testPassword = (value: string, requiredField: boolean): validationType => {
  const invalid: validationType = {
    isValid: false,
    error: 'This is not a valid input. Password should include lower and uppercase characters,' +
      ' one of special characters. Password should also be at least 8 characters long.'
  };

  if (requiredField)
    if (!value)
      return required;

  if (value)
    if (!passwordRegEx.test(value) || value.length < minPasswordLength || value.length > maxPasswordLength)
      return invalid;

  return valid;
};

export const passwordMatch = (password: string, repeatPassword: string): validationType => {
  const invalid: validationType = { isValid: false, error: 'Passwords don\'t match.' };

  if (repeatPassword !== password)
    return invalid;

  return valid;
};
