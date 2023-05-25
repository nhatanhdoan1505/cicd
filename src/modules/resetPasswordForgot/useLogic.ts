import { resetPassword } from './services';
import { useEffect, useState } from 'react';
import { useApiCaller } from 'common/hooks';
import { ResetReqDto } from './dto';
import Router, { useRouter } from 'next/router';

export function useLogic() {
  const router = useRouter();

  const [messageError, setMessageError] = useState('');
  const [token, setToken] = useState<string>('');

  const { request, loading } = useApiCaller<any>({ apiCaller: resetPassword, messageSuccess: 'success', messageFail: 'failure' });

  const handleSubmit = async (data: any) => {
    const dataBody = new ResetReqDto();
    dataBody.confirmPassword = data.confirmPassword;
    dataBody.password = data.password;
    dataBody.token = data.token;

    const result: any = await request(dataBody);

    if (result.status === 200) {
      Router.replace('/login');

      return;
    }
  };

  useEffect(() => {
    if (!router.query.token && !router.isReady) {
      return;
    }

    setToken(router.query.token as string);
  }, [router.query.token]);

  return { handleSubmit, messageError, setMessageError, loading, token };
}
