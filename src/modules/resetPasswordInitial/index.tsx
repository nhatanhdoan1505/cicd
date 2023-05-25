import ResetPass from './components';
import { useLogic } from './useLogic';

export function ResetPasswordInitial() {
  const { loginId, handleSubmit, loading } = useLogic();

  return <ResetPass submit={handleSubmit} loading={loading} loginId={loginId} />;
}
