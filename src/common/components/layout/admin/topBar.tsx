import { Dropdown, Space } from 'antd';
import { useSelector } from 'common/hooks';
import { IAuthState } from 'store/reducers/authentication';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'store/actions';
import Router from 'next/router';

interface TopBarProps {
  setIsShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  isShowSideBar: boolean;
}

function TopBar({ setIsShowSideBar, isShowSideBar }: TopBarProps) {
  const avatar = '';
  const dispatch = useDispatch();

  const { authData } = useSelector((state) => ({
    authData: state.authentication as IAuthState,
  }));

  if (!authData) {
    return null;
  }

  const handleLogout = () => {
    dispatch(logout());
  };

  const menu = (
    <div className="flex items-center justify-center flex-col p-[16px 48px] bg-white w-[254px] min-h-[310px] rounded-[5px] text-center mt-[16px] shadow-popup-logout">
      <div className="flex justify-center items-center h-[100px] w-[100px] rounded-[50%] relative bg-[rgba(252,134,134,.1)] mb-[8px]">
        <img className={avatar ? 'avatar__preview' : ''} src={avatar || '/assets/images/ic-avt.svg'} alt="avt" />
      </div>
      <div className="text-black break-words overflow-hidden text-ellipsis py-1 leading-4"> {authData.username || ''}</div>
      <div className="text-black break-words overflow-hidden text-ellipsis max-h-[16px] leading-4 text-[12px] mt-[4px] mb-[16px]">
        {authData.email || ''}
      </div>
      <button
        onClick={() => Router.push('/profile')}
        className="bg-white w-[158px] cursor-pointer mb-[4px] border border-solid border-rose-400 py-[10px] px[15px] rounded-[5px] text-[#fc8686]"
      >
        プロフィール
      </button>
      <button
        className="bg-[#fc8686] rounded-[5px] py-[10px] px[15px] w-[158px] cursor-pointer border border-solid border-rose-400 text-white"
        onClick={handleLogout}
      >
        ログアウト
      </button>
    </div>
  );

  return (
    <div className="bg-white h-[72px] flex w-full px-[32px] border-0 border-b border-solid border-bd-colors2 justify-between">
      <div className="logo flex items-center">
        <div className="trigger mr-[20px] cursor-pointer" onClick={() => setIsShowSideBar(!isShowSideBar)}>
          <img src="/assets/images/menu/icon-trigger.svg" alt="icon-trigger" />
        </div>
        <Link href="/account">
          <a className="cursor-pointer">
            <img src="/assets/images/logo.png" alt="logo" style={{ width: 133, height: 44 }} />
          </a>
        </Link>
      </div>
      <Space size="middle" className="right-box">
        <div className="tour h-[44px] flex items-center justify-center bg-[#FC8686] rounded-[5px] text-[16px] text-white font-[700] font-noto_sans px-[15px] cursor-pointer">
          使い方マニュアル
        </div>
        <Space className="avatar-box cursor-pointer">
          <Dropdown overlay={menu} trigger={['click']} destroyPopupOnHide={true}>
            <img className="avatar__preview" src={avatar || '/assets/images/ic-avatar.svg'} alt="avt" onClick={(e) => e.preventDefault()} />
          </Dropdown>
        </Space>
      </Space>
    </div>
  );
}

export default TopBar;
