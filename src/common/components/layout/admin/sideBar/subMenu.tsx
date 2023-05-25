import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import ISideBar from 'common/types/ISideBar';
import { useMemo } from 'react';

function SubMenu({ item, lastItem }: { item: ISideBar; lastItem: boolean }) {
  const { pathname } = useRouter();

  const isRouterMatching = useMemo(() => {
    if (pathname === '/admin' && pathname === item.path) return true;
    return pathname?.includes(item.path) && item.path !== '/admin';
  }, [pathname]);

  return (
    <Link href={item.path}>
      <a className={`flex items-center py-4 group border-0 border-dotted border-primary-light-300  ${!lastItem && 'border-b'}`}>
        <div
          className={clsx('flex justify-center items-center w-9 h-9 rounded-md fill-[#ccc] group-hover:bg-primary-light-200 group-hover:fill-white', {
            'bg-primary-light-200 fill-white': isRouterMatching || lastItem,
          })}
        >
          {item.icon}
        </div>
        <p
          className={clsx('text-lg ml-5 text-[#333333] font-bold', {
            'text-primary-strong-100': isRouterMatching || lastItem,
          })}
        >
          {item.title}
        </p>
      </a>
    </Link>
  );
}

export default SubMenu;
