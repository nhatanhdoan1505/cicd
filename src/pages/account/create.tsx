import Account from 'modules/account/create';

import { withAuthentication } from 'common/hocs';

const AccountComponent = withAuthentication(Account);
AccountComponent.layout = 'admin';

export default AccountComponent;
