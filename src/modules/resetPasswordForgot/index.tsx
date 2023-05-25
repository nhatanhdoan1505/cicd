import ResetPass from './components';
import { useLogic } from './useLogic';

export function Reset() {
  const { messageError, setMessageError, handleSubmit, loading, token } = useLogic();

  return <ResetPass submit={handleSubmit} loading={loading} messageError={messageError} setMessageError={setMessageError} token={token} />;
}
