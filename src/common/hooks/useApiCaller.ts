import { useDispatch } from 'react-redux';
import { notification, setAuthenticated } from 'store/actions';
import { useState } from 'react';
import client from 'common/utilities/client';
import { useSelector } from './useSelector';

type ApiCallerParam = {
  apiCaller: any;
  messageFail?: boolean | string;
  messageSuccess?: boolean | string;
  setData?: (data: any) => void;
};

export function useApiCaller<TRes>({ apiCaller, messageFail, messageSuccess, setData }: ApiCallerParam) {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const request = async (dataOrig?: any): Promise<TRes> => {
    setLoading(true);

    let responseData = await apiCaller(dataOrig);

    setLoading(false);

    if (responseData.status === 401) {
      const newToken = await client.post('/auth/refresh-token', { refreshToken: store?.authentication?.refreshToken });

      dispatch(
        setAuthenticated({
          token: newToken.data.accessToken,
          refreshToken: newToken.data.refreshToken,
        })
      );

      responseData = await apiCaller(dataOrig);
    }

    if (responseData.status === 200 && messageSuccess) {
      dispatch(
        notification({
          type: 'success',
          isOpen: true,
          message: messageSuccess as string,
        })
      );
    }

    if (responseData.status !== 200 && responseData.status !== 401 && messageFail) {
      dispatch(
        notification({
          isOpen: true,
          type: 'error',
          message: messageFail as string,
        })
      );
    }

    if (setData) {
      setData(responseData);
    }

    return responseData;
  };

  return {
    loading,
    request,
    setLoading,
  };
}
