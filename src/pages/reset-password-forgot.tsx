import { Reset } from 'modules/resetPasswordForgot';

import { withPreAuthentication } from 'common/hocs';

const ResetPassUnAuthenticated = withPreAuthentication(Reset);

export default ResetPassUnAuthenticated;
