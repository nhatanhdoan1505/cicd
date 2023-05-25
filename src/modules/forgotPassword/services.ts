import { ForgotReqDto } from './dto';
import client from 'common/utilities/client';

export const forgotPassword = (data: ForgotReqDto) => {
  return client.post('/account/forgot-password/send-mail', data);
};
