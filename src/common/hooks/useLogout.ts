import { useDispatch } from 'react-redux';
import { logout } from 'store/actions/authentication';

export function useLogout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return { handleLogout };
}
