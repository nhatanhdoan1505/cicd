import { useNotification } from 'common/hooks';
import LayoutWrapper from 'common/containers/layoutWrapper';
import { useDispatch } from 'react-redux';
import { loadAuthentication } from 'store/actions';
import { useEffect } from 'react';

type PropsType = {
  children: React.ReactNode;
};

export default function Root({ children }: PropsType) {
  useNotification();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAuthentication());
  }, []);

  return <LayoutWrapper>{children}</LayoutWrapper>;
}
