import { ResetReqDto } from './dto';
import client from 'common/utilities/client';

export const resetPassword = (data: ResetReqDto) => {
  return client.post(`/account/forgot-password/${data.token}`, data);
};
