import { ResetPasswordInitial } from 'modules/resetPasswordInitial';

import { withPreAuthentication } from 'common/hocs';

const ResetPassUnAuthenticated = withPreAuthentication(ResetPasswordInitial);

export default ResetPassUnAuthenticated;
