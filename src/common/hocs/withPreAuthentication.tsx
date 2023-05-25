import { useSelector } from '../hooks/useSelector';
import { replaceRouter } from 'common/utilities/helper';

export const withPreAuthentication = (Component: any): any => {
  const HOC = (props: any) => {
    const { token } = useSelector((state) => ({
      token: state.authentication.token,
    }));

    if (token) {
      replaceRouter('/account');

      return null;
    }

    return <Component {...props} />;
  };

  return HOC;
};
