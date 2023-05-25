import { useState } from 'react';
import SideBar from './sideBar';
import TopBar from './topBar';
// import Footer from './footer';

export default function Layout({ children, isAuth = true }: { children: React.ReactNode; isAuth?: boolean }) {
  const [isShowSideBar, setIsShowSideBar] = useState(true);
  return (
    <div className="flex flex-col min-h-full relative">
      <div className="preloading">
        <div className="circle" />
      </div>
      {isAuth && <TopBar setIsShowSideBar={setIsShowSideBar} isShowSideBar={isShowSideBar}/>}
      {/* <TopBar /> */}
      <div className="flex flex-1">
        {isAuth && <SideBar isAuth={isAuth} isShowSideBar={isShowSideBar}/>}
        {/* <SideBar isAuth={isAuth} /> */}
        <div className="flex flex-col flex-1 bg-[#F8F8F8] z-10">
          <main className='block w-full'>{children}</main>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
