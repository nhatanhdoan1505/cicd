import Login from 'modules/login';
import { withPreAuthentication } from 'common/hocs';

const IndexUnAuthenticated = withPreAuthentication(Login);
//hello
//hello

export default IndexUnAuthenticated;
