import Router from 'next/router';
import multiLanguage, { LanguageKey } from 'common/constants/multiLanguage';
import { isObject } from 'lodash';
import { appConfig } from '@configs/app';

export const replaceRouter = (path: string) => {
  if (typeof window === 'undefined' || !path) {
    return;
  }

  Router.replace(path);
};

export const translate = (key: string, languageKey: LanguageKey = 'jp') => {
  return multiLanguage[key] ? multiLanguage[key][languageKey] : key;
};

export const convertObjectToQueryParams = (paramObj: { [key: string]: any }) => {
  let paramStr = '';

  if (isObject(paramObj)) {
    paramStr = Object.keys(paramObj)
      .map(function (key) {
        return key + '=' + (paramObj as any)[key];
      })
      .join('&');
  }

  return paramStr;
};

export function validateNumber(value?: string) {
  const regEx = /^\d+$/;

  return regEx.test(value || '');
}

export function validateInternalEmail(value?: string) {
  if (!value) {
    return false;
  }

  const emailSplits = value.split('@');

  if (emailSplits.length != 2) {
    return false;
  }

  return emailSplits[1] === appConfig.internalEmailSuffix;
}

export function isFullSize(value?: string) {
  if (!value) {
    return true;
  }

  const regexp = new RegExp(/^[ａ-ｚＡ-Ｚ０-９ぁ-んァ-ン一-龥]+$/);
  return regexp.test(value);
}

export function checkFieldErrorHelper<Values>(form: any, fieldName: keyof Values) {
  if (!form.touched[fieldName]) {
    return;
  }

  return form.errors[fieldName];
}
