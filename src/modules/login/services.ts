import { LoginReqDto } from './dto';
import client from 'common/utilities/client';

export const login = (data: LoginReqDto) => {
  return client.post('/auth/login', data);
};
