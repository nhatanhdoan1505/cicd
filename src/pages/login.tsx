import Login from 'modules/login';
import { withPreAuthentication } from 'common/hocs';

const IndexUnAuthenticated = withPreAuthentication(Login);
//hello

export default IndexUnAuthenticated;
