import ForgotPass from './components';
import { useLogic } from './useLogic';

export function ForgotPassword() {
  const { messageError, setMessageError, handleSubmit, loading } = useLogic();

  return <ForgotPass submit={handleSubmit} loading={loading} messageError={messageError} setMessageError={setMessageError} />;
}
