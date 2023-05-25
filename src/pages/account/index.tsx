import AccountList from 'modules/account/list';
import { withAuthentication } from 'common/hocs';

const AccountListWrapper = withAuthentication(AccountList);
AccountListWrapper.layout = 'admin';

export default AccountListWrapper;
