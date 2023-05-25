import LoginComponent from './components';
import useLogic from './useLogic';

function Login() {
  const { handleSubmit, loading } = useLogic();

  return <LoginComponent submit={handleSubmit} loading={loading} />;
}

export default Login;
