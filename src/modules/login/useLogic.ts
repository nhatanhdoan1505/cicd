import { login } from './services';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from 'store/actions';
import { useApiCaller } from 'common/hooks';
import { LoginResDto } from './dto';
import { FormValue } from './components';
import { useRouter } from 'next/router';

export default function useLogic() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { request, loading } = useApiCaller<LoginResDto>({ apiCaller: login, messageFail: 'Fail', messageSuccess: 'success' });

  const handleSubmit = async (data: FormValue) => {
    const params = {
      loginId: data.loginId,
      password: data.password,
    };

    const result: any = await request(params);
    if (result?.status !== 200) {
      return;
    }

    if (result.data.isActive) {
      dispatch(
        setAuthenticated({
          token: result.data.accessToken,
          refreshToken: result.data.refreshToken,
        })
      );
      router.push('/account');
      return;
    }

    router.push({
      pathname: '/reset-password-initial',
      query: { loginId: data.loginId },
    });
  };

  return { handleSubmit, loading };
}
