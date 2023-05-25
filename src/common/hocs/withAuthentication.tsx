import { useSelector } from '../hooks';
import AppLoading from 'common/components/appLoading';
import { useEffect } from 'react';
import Router from 'next/router';

export const withAuthentication = (Component: any): any => {
  const AuthHOC = (props: any) => {
    const { authLoaded, token } = useSelector((state) => ({
      authLoaded: state.app.authLoaded,
      token: state.authentication.token,
    }));

    useEffect(() => {
      if (!authLoaded) {
        return;
      }

      if (!token) {
        Router.replace('/login');
      }
    }, [token, authLoaded]);

    if (!authLoaded || !token) {
      return <AppLoading />;
    }

    return <Component {...props} />;
  };

  return AuthHOC;
};
