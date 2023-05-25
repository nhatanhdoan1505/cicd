import { SideBarData } from './sideBarData';
import { Menu, Layout } from 'antd';
import ISideBar, { subMenu } from 'common/types/ISideBar';
// import { SideBarUnAuthenticatedData } from './sideBarUnAuthenticatedData';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import Router from 'next/router';
import { useState, useEffect } from 'react';
const { Sider } = Layout;
const siderStyle: React.CSSProperties = {
  backgroundColor: '#FFF',
  borderRight: '1px solid #CCC',
};
export default function SideBar({ isAuth, isShowSideBar }: { isAuth: boolean; isShowSideBar: boolean }) {
  const sideBarList = isAuth ? SideBarData : SideBarData;
  const { pathname } = useRouter();

  const [isSelected, setIsSelected] = useState<string[]>([]);

  const onMenuItemSelect = (e: any) => {
    Router.push(e.key);
  };

  const renderSubItem = (items: subMenu[]) =>
    items?.map((item: subMenu) => {
      return (
        <Menu.Item
          key={item.path}
          className={clsx('w-full text-[#5F5E5E] pl-[98px] h-[40px] leading flex items-center hover:text-[#FC8686]', {
            'bg-color-active rounded-tr-[20px] rounded-br-[20px]  text-[#FC8686]': pathname.includes(item.path),
          })}
        >
          <span
            className={clsx('name-menu font-noto_sans', {
              'font-bold ': pathname.includes(item.path),
            })}
          >
            {item.title}
          </span>
        </Menu.Item>
      );
    });
  const renderMenuItems = (item: ISideBar) => {
    const subItems = item?.subItem && Object.values(item?.subItem);
    if (Array.isArray(subItems) && subItems.length > 0) {
      return (
        <Menu.SubMenu
          key={item.path}
          className={clsx(' text-[#5F5E5E] cus-menu-sndl w-full h-[40px] ', {
            'bg-color-active rounded-tr-[20px] rounded-br-[20px]  text-[#FC8686]': pathname.includes(item.path),
          })}
          title={
            <span>
              <span className="arrowNew" style={{ position: 'absolute', left: 20 }}>
                {subItems?.length > 0 && (
                  <img
                    src={isSelected.includes(item.path) ? '/assets/images/menu/ic-arrow-up.svg' : '/assets/images/menu/ic-arrow-down.svg'}
                    alt="ic-menu"
                    height="8px"
                    width="8px"
                  />
                )}
              </span>
              <span>
                {pathname.includes(item.path) ? (
                  <img src={item.iconActive} alt="ic-menu-active" height="24" />
                ) : (
                  <img src={item.icon} alt="ic-menu" height="24" />
                )}
              </span>
              <span
                className={clsx('name-menu font-noto_sans ml-[15px] align-middle', {
                  'font-bold ': pathname.includes(item.path),
                })}
              >
                {item.title}
              </span>
            </span>
          }
        >
          {renderSubItem(subItems)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item
        key={item.path}
        className={clsx('w-full text-[#5F5E5E] h-[40px] leading flex items-center pl-[46px] hover:text-[#FC8686]', {
          'bg-color-active rounded-tr-[20px] rounded-br-[20px]  text-[#FC8686]': pathname.includes(item.path),
        })}
      >
        {(item.icon || item.iconActive) && (
          <span className="mr-[15px]">
            {pathname.includes(item.path) ? <img src={item.iconActive} alt="ic-menu-active" /> : <img src={item.icon} alt="ic-menu" />}
          </span>
        )}
        <span
          className={clsx('name-menu font-noto_sans', {
            'font-bold ': pathname.includes(item.path),
          })}
        >
          {item.title}
        </span>
      </Menu.Item>
    );
  };

  useEffect(() => {
    const paths = pathname.split('/');
    let selectedKey = '';
    const selectedKeys = paths.slice(1).map((item) => {
      selectedKey = `${selectedKey}/${item}`;
      return selectedKey;
    });
    if (selectedKeys.length > 1) {
      setIsSelected(selectedKeys);
    }
  }, []);

  const handleSelectedKeys = (pathname: string) => {
    const paths = pathname.split('/');
    let selectedKey = '';
    const selectedKeys = paths.slice(1).map((item) => {
      selectedKey = `${selectedKey}/${item}`;
      return selectedKey;
    });
    return selectedKeys;
  };

  return (
    <Sider width={365} trigger={null} collapsible collapsed={!isShowSideBar} style={siderStyle}>
      <div className="w-full flex flex-col flex-shrink-0 justify-between top-0 left-0 bottom-0 sider-menu">
        <Menu
          className="border-r-0"
          onOpenChange={(e) => {
            setIsSelected(e);
          }}
          onClick={onMenuItemSelect}
          mode="inline"
          selectedKeys={handleSelectedKeys(pathname)}
          defaultOpenKeys={handleSelectedKeys(pathname)}
        >
          {sideBarList.map(renderMenuItems)}
        </Menu>
      </div>
    </Sider>
  );
}
