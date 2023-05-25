import { account } from './services';
import { useApiCaller } from 'common/hooks';
import { CreateAccount, LoginResDto } from './dto';
import { FormValue } from './components/account';
import router from 'next/router';

export default function useLogic() {
  const { request, loading } = useApiCaller<LoginResDto>({ apiCaller: account, messageFail: 'failed' });

  const handleSubmit = async (data: FormValue) => {
    const dataBody = new CreateAccount();
    dataBody.loginId = data.loginId;
    dataBody.email = data.email;
    dataBody.familyNameFirst = data.familyNameFirst;
    dataBody.familyNameLast = data.familyNameLast;
    dataBody.furiganaNameFirst = data.furiganaNameFirst;
    dataBody.furiganaNameLast = data.furiganaNameLast;
    dataBody.role = data.role;
    dataBody.accountStatus = data.accountStatus;
    dataBody.initialPassword = 'Aa123456@';

    const result: any = await request(dataBody);

    if (result?.status === 200) {
      router.push('/account');
    }
  };

  return { handleSubmit, loading };
}
