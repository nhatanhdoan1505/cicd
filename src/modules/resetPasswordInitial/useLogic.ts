import { resetPassword } from './services';
import { useEffect, useState } from 'react';
import { useApiCaller } from 'common/hooks';
import { ResetResDto } from './dto';
import { FormValue } from './components';
import { useRouter } from 'next/router';
import { setAuthenticated } from 'store/actions';
import { useDispatch } from 'react-redux';

export function useLogic() {
  const router = useRouter();
  const [loginId, setLoginId] = useState<string>('');
  const dispatch = useDispatch();

  const { request, loading } = useApiCaller<ResetResDto>({ apiCaller: resetPassword, messageSuccess: 'success', messageFail: 'failure' });

  const handleSubmit = async (data: FormValue) => {
    const params = {
      loginId: data.loginId,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    const result: any = await request(params);

    if (result?.data?.accessToken) {
      dispatch(
        setAuthenticated({
          token: result?.data?.accessToken,
          refreshToken: result?.data?.refreshToken,
        })
      );

      router.replace('/account');
      return;
    }
  };

  useEffect(() => {
    if (!router.query.loginId && !router.isReady) {
      return;
    }

    setLoginId(router.query.loginId as string);
  }, [router.query.loginId]);

  return { handleSubmit, loginId, loading };
}
