import 'reflect-metadata';
import 'styles/index.css';
import 'styles/antd.less';
import { wrapper } from '../store';
import Root from 'common/containers/root';
import { useState, useEffect } from 'react';
import AppLoading from 'common/components/appLoading';

function App({ Component, pageProps }: any) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeunload', () => setLoading(true));
    window.addEventListener('load', () => setLoading(false));

    return () => {
      window.removeEventListener('beforeunload', () => setLoading(true));
      window.removeEventListener('load', () => setLoading(false));
    };
  }, []);

  return (
    <>
      {loading ? (
        <AppLoading />
      ) : (
        <Root>
          <Component {...pageProps} />
        </Root>
      )}
    </>
  );
}

export default wrapper.withRedux(App);
