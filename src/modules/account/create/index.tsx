import AccountComponents from './components/account';
import useLogic from './useLogic';

function Account() {
  const { handleSubmit, loading } = useLogic();

  return <AccountComponents handleSubmit={handleSubmit} loading={loading} />;
}

export default Account;
