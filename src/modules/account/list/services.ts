import client from 'common/utilities/client';
import { convertObjectToQueryParams } from 'common/utilities/helper';
export const getAccountList = (params: any) => {
  const queryString = convertObjectToQueryParams(params);

  return client.get(`/search?${queryString}`);
};

export const deleteAccountAdmin = (listId: string[]) => {
  return client.delete(`/delete?loginIds=${listId}`);
};