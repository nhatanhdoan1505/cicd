import { translate } from 'common/utilities/helper';
import ISideBar from 'common/types/ISideBar';

export const SideBarUnAuthenticatedData: ISideBar[] = [
  {
    title: translate('login'),
    icon: '',
    path: '/admin/login',
  },
];
