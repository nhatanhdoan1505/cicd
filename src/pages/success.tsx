import successComponent from 'modules/success';
import { withPreAuthentication } from 'common/hocs';

const successUnAuthenticated = withPreAuthentication(successComponent);

export default successUnAuthenticated;
