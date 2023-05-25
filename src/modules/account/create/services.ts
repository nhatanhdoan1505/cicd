import { CreateAccount } from './dto';
import client from 'common/utilities/client';

export const account = (data: CreateAccount) => {
  return client.post('/account', data);
};
