import { translate } from 'common/utilities/helper';
import ISideBar from 'common/types/ISideBar';
export const SideBarData: ISideBar[] = [
  {
    title: translate('accounts_page'),
    icon: '/assets/images/menu/mn-staff.svg',
    iconActive: '/assets/images/menu/mn-staff-active.svg',
    path: '/account',
    subItem: [],
  },
  {
    title: translate('management_services'),
    icon: '/assets/images/menu/mn-sv.svg',
    iconActive: '/assets/images/menu/mn-sv-active.svg',
    path: '/management',
    subItem: [
      {
        path: '#',
        icon: '',
        iconActive: '',
        title: '企業情報登録・編集',
      },
      {
        path: '#b',
        icon: '',
        iconActive: '',
        title: '企業のサービスオプション管理',
      },
    ],
  },
];
