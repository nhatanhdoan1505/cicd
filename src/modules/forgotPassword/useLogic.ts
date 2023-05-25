import { forgotPassword } from './services';
import { useState } from 'react';
import { useApiCaller } from 'common/hooks';
import { ForgotReqDto, ForgotResDto } from './dto';
import { FormValueForgot } from './components';
import Router from 'next/router';

export function useLogic() {
  const [messageError, setMessageError] = useState('');

  const { request, loading } = useApiCaller<ForgotResDto>({ apiCaller: forgotPassword, messageSuccess: 'success', messageFail: 'failure' });

  const handleSubmit = async (data: FormValueForgot) => {
    const dataBody = new ForgotReqDto();
    dataBody.email = data.email;

    const result: any = await request(dataBody);
    if (result.status === 200) {
      Router.push('/success');
    }
  };

  return { handleSubmit, messageError, setMessageError, loading };
}
