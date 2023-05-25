import { ForgotPassword } from 'modules/forgotPassword';

import { withPreAuthentication } from 'common/hocs';

const ForgotPassUnAuthenticated = withPreAuthentication(ForgotPassword);

export default ForgotPassUnAuthenticated;
