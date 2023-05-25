import Router from 'next/router';
import multiLanguage, { LanguageKey } from 'common/constants/multiLanguage';
import { isObject } from 'lodash';

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
